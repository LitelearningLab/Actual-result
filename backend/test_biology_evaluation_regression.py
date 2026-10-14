import unittest
from unittest.mock import MagicMock
import json
import re
from others.llm import descriptive_evaluation, _filter_redundant_incomplete_points


class TestBiologyEvaluationRegression(unittest.TestCase):
    """
    End-to-end regression test suite verifying the 5 actual biology evaluations:
    1. Enzymes: Distinguish mentioned active site from missing specificity mechanism; catch temperature overgeneralization.
    2. Natural Selection: Catch Lamarckian stretching, immediate extinction overgeneralization, and conscious choice.
    3. Photosynthesis: Factual oxygen error; eliminate duplicate oxygen incomplete point; specific feedback on importance; Calvin cycle separation.
    4. Cell Membrane: Water active transport in incorrect; eliminate contradictory duplicate incomplete point; preserve distinct aquaporin channels.
    5. DNA: Double helix and inheritance recognized as correct; replication named placed in incomplete (not missing); catch direct amino acids error.
    """

    def setUp(self):
        self.mock_client = MagicMock()
        self.mock_response = MagicMock()
        self.mock_response.status_code = 200
        self.mock_client.chat_completion.return_value = self.mock_response

    def simulate_database_comment_storage(self, evaluation_result):
        """
        Simulates the database persistence logic from exam_review.py:
        splits '|' separated points into category-tagged review comment rows.
        """
        persisted_comments = []
        for key in ["missing", "incomplete", "incorrect"]:
            comment = str(evaluation_result.get(key) or "").strip()
            if comment and comment.lower() not in {"none", "null", "n/a"}:
                for part in (p.strip() for p in comment.split('|')):
                    if part:
                        persisted_comments.append({
                            "category": key,
                            "comment_text": part
                        })
        return persisted_comments

    # --------------------------------------------------------------------------
    # BIOLOGY CASE 1: Enzymes
    # --------------------------------------------------------------------------
    def test_biology_case_1_enzymes_classification_and_overgeneralization(self):
        """
        Case 1:
        - Factual error 1: 'Enzymes increase activation energy' in incorrect.
        - Factual error 2: 'Enzymes stop working when temperature changes slightly' is an overgeneralization in incorrect.
        - Active site and substrate mentioned: Specificity mechanism is in incomplete (acknowledging they were named),
          NOT in missing.
        """
        raw_llm_output = {
            "score": 1.5,
            "missing": "None",
            "incomplete": "Enzyme specificity Complete: Student named active site and substrate, but did not explain specificity mechanism or induced-fit model",
            "incorrect": (
                "Enzymes increase activation energy Correct: Enzymes lower activation energy to speed up reactions | "
                "Enzymes stop working when temperature changes slightly Correct: Slight temperature variations alter reaction rate; enzymes only denature at extreme heat"
            ),
            "feedback": "Identified active site but erred on activation energy and temperature effects.",
            "ai_confidence": 92
        }
        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(raw_llm_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=5,
            expected_answer="Enzymes lower activation energy. Substrates bind active site with specificity (induced-fit). Activity varies with temperature until denaturation.",
            student_answer="Enzymes are catalysts with an active site where substrate binds. Enzymes increase activation energy. Enzymes stop working when temperature changes slightly.",
            question_text="Explain enzyme action, activation energy, and how temperature affects enzymes."
        )

        self.assertTrue(result["status"])
        comments = self.simulate_database_comment_storage(result)

        incorrect_comments = [c["comment_text"] for c in comments if c["category"] == "incorrect"]
        incomplete_comments = [c["comment_text"] for c in comments if c["category"] == "incomplete"]
        missing_comments = [c["comment_text"] for c in comments if c["category"] == "missing"]

        # 1. Activation energy error captured
        self.assertTrue(any("activation energy" in c.lower() for c in incorrect_comments))
        # 2. Temperature overgeneralization captured
        self.assertTrue(any("temperature" in c.lower() for c in incorrect_comments))
        # 3. Active site is NOT in missing
        self.assertEqual(len(missing_comments), 0)
        # 4. Specificity in incomplete acknowledges active site was named
        self.assertTrue(any("student named active site" in c.lower() for c in incomplete_comments))

    # --------------------------------------------------------------------------
    # BIOLOGY CASE 2: Natural Selection
    # --------------------------------------------------------------------------
    def test_biology_case_2_natural_selection_catches_all_distinct_errors(self):
        """
        Case 2:
        - Giraffe stretching neck (Lamarckian misconception) in incorrect.
        - 'Animals that cannot adapt immediately will become extinct' (overgeneralization) in incorrect.
        - Organisms consciously choose characteristics in incorrect.
        """
        raw_llm_output = {
            "score": 0.5,
            "missing": "Inherited genetic variation Needed: Explain natural selection acts on existing genetic mutations",
            "incomplete": "None",
            "incorrect": (
                "Giraffes stretched necks to reach high leaves developing long necks Correct: Longer necks evolved via natural selection of inherited genetic variation | "
                "Animals that cannot adapt immediately will become extinct Correct: Adaptation occurs across generations in populations; failure leads to gradual decline | "
                "Organisms consciously choose their characteristics Correct: Selection acts on random mutations and existing variation, not conscious choice"
            ),
            "feedback": "Multiple misconceptions regarding acquired characteristics, immediate adaptation, and conscious selection.",
            "ai_confidence": 95
        }
        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(raw_llm_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=5,
            expected_answer="Natural selection acts on inherited variation. Organisms with advantageous traits survive and reproduce over generations.",
            student_answer="In evolution, giraffes stretched their necks to reach high leaves and developed longer necks. Organisms choose their characteristics. Animals that cannot adapt immediately will become extinct.",
            question_text="Explain the mechanism of natural selection using an example."
        )

        self.assertTrue(result["status"])
        comments = self.simulate_database_comment_storage(result)
        incorrect_comments = [c["comment_text"] for c in comments if c["category"] == "incorrect"]

        # All 3 distinct errors must be captured
        self.assertEqual(len(incorrect_comments), 3)
        self.assertTrue(any("giraffes stretched" in c.lower() for c in incorrect_comments))
        self.assertTrue(any("adapt immediately" in c.lower() for c in incorrect_comments))
        self.assertTrue(any("choose their characteristics" in c.lower() for c in incorrect_comments))

    # --------------------------------------------------------------------------
    # BIOLOGY CASE 3: Photosynthesis
    # --------------------------------------------------------------------------
    def test_biology_case_3_photosynthesis_eliminates_duplicate_and_vague_feedback(self):
        """
        Case 3:
        - Plants absorb oxygen in incorrect.
        - Oxygen is NOT duplicated under incomplete (filtered out by post-processing).
        - Photosynthesis importance feedback identifies specific missing mechanism, not vague 'more detail'.
        - Calvin cycle error separated from missing light-dependent photolysis.
        """
        raw_llm_output = {
            "score": 1.5,
            "missing": "Photolysis in light reactions Needed: Describe splitting of water molecules in thylakoid membrane",
            "incomplete": (
                "Oxygen absorption Complete: Clarification that oxygen is released rather than absorbed | "
                "Energy storage Complete: Student named photosynthesis importance, but omitted how chemical energy is stored in glucose bonds"
            ),
            "incorrect": (
                "Plants absorb oxygen to prepare food Correct: Plants absorb carbon dioxide and release oxygen as a byproduct | "
                "Calvin cycle produces light energy Correct: Calvin cycle is light-independent and consumes ATP and NADPH to fix carbon"
            ),
            "feedback": "Partially correct with factual errors on gas exchange and Calvin cycle.",
            "ai_confidence": 90
        }
        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(raw_llm_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=5,
            expected_answer="Photosynthesis converts CO2 and H2O into glucose using light, releasing O2. Light reactions split water; Calvin cycle fixes CO2 into sugar.",
            student_answer="Photosynthesis is very important for plants. Plants absorb oxygen to prepare food. Calvin cycle produces light energy.",
            question_text="Explain the stages and importance of photosynthesis."
        )

        self.assertTrue(result["status"])
        # The duplicate oxygen incomplete point MUST be filtered out
        self.assertNotIn("oxygen is released rather than absorbed", result["incomplete"].lower())
        # The genuine energy storage incomplete point MUST be preserved
        self.assertIn("chemical energy is stored in glucose bonds", result["incomplete"])
        # Both incorrect points preserved
        self.assertIn("Plants absorb oxygen", result["incorrect"])
        self.assertIn("Calvin cycle produces light energy", result["incorrect"])
        # Missing photolysis preserved
        self.assertIn("Photolysis in light reactions", result["missing"])

    # --------------------------------------------------------------------------
    # BIOLOGY CASE 4: Cell Membrane
    # --------------------------------------------------------------------------
    def test_biology_case_4_cell_membrane_prunes_contradictory_duplicate_incomplete(self):
        """
        Case 4:
        - Student says water transport always requires active transport -> in incorrect.
        - AI gives duplicate incomplete: 'Water transport Complete: Clarification that not all water transport is active'
          -> MUST be pruned by deduplication!
        - If incomplete has a separate requirement (e.g. aquaporin channel proteins), it MUST be preserved.
        """
        raw_llm_output = {
            "score": 1.0,
            "missing": "Phospholipid bilayer structure Needed: Describe hydrophilic heads and hydrophobic tails",
            "incomplete": (
                "Water transport Complete: Clarification that not all water transport is active | "
                "Aquaporin channels Complete: Student did not explain how channel proteins facilitate rapid water diffusion"
            ),
            "incorrect": "Water always enters through active transport Correct: Water commonly moves across membranes passively by osmosis",
            "feedback": "Incorrect claim regarding water active transport.",
            "ai_confidence": 92
        }
        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(raw_llm_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=4,
            expected_answer="Cell membrane has phospholipid bilayer. Water moves passively via osmosis and aquaporin channels. Active transport moves ions against gradient using ATP.",
            student_answer="Cell membrane controls movement. Water always enters through active transport.",
            question_text="Explain cell membrane transport mechanisms."
        )

        self.assertTrue(result["status"])
        # Contradictory duplicate 'clarification that not all water transport is active' pruned
        self.assertNotIn("clarification that not all water transport is active", result["incomplete"].lower())
        # Genuinely separate requirement 'Aquaporin channels' preserved
        self.assertIn("Aquaporin channels", result["incomplete"])
        # Incorrect item preserved
        self.assertIn("Water always enters through active transport", result["incorrect"])
        # Missing item preserved
        self.assertIn("Phospholipid bilayer structure", result["missing"])

    # --------------------------------------------------------------------------
    # BIOLOGY CASE 5: DNA
    # --------------------------------------------------------------------------
    def test_biology_case_5_dna_credits_correct_details_and_catches_amino_acids_error(self):
        """
        Case 5:
        - Student mentions double-helix, genes, and inheritance -> recognized as correct, NOT in incomplete.
        - Student mentions DNA replication -> in incomplete acknowledging it was named without mechanism (NOT in missing).
        - Student claims DNA directly changes into amino acids -> in incorrect.
        """
        raw_llm_output = {
            "score": 2.5,
            "missing": "Complementary base pairing Needed: Explain hydrogen bonding between A-T and G-C bases",
            "incomplete": "DNA replication Complete: Student named DNA replication, but did not explain the unzipping mechanism or DNA polymerase action",
            "incorrect": "DNA directly changes into amino acids Correct: DNA is transcribed into mRNA which is translated by ribosomes into amino acids",
            "feedback": "Correctly described double helix and genes; erred on protein synthesis mechanism.",
            "ai_confidence": 94
        }
        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(raw_llm_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=5,
            expected_answer="DNA is a double helix containing genes that pass traits to offspring. Replicates via DNA polymerase. Transcribes to mRNA to synthesize amino acids.",
            student_answer="DNA has a double-helix structure with genes that control inheritance from parents to offspring. DNA does replication. DNA directly changes into amino acids to make proteins.",
            question_text="Describe the structure and function of DNA in heredity and protein synthesis."
        )

        self.assertTrue(result["status"])
        comments = self.simulate_database_comment_storage(result)

        incorrect_comments = [c["comment_text"] for c in comments if c["category"] == "incorrect"]
        incomplete_comments = [c["comment_text"] for c in comments if c["category"] == "incomplete"]
        missing_comments = [c["comment_text"] for c in comments if c["category"] == "missing"]

        # 1. DNA directly changes into amino acids caught in incorrect
        self.assertTrue(any("directly changes into amino acids" in c for c in incorrect_comments))
        # 2. Replication is in incomplete acknowledging student named it, NOT in missing
        self.assertTrue(any("student named dna replication" in c.lower() for c in incomplete_comments))
        self.assertFalse(any("replication" in c.lower() for c in missing_comments))
        # 3. Double helix and heredity are NOT in incomplete
        self.assertFalse(any("double helix" in c.lower() for c in incomplete_comments))
        self.assertFalse(any("inheritance" in c.lower() for c in incomplete_comments))


if __name__ == "__main__":
    unittest.main()
