import unittest
from unittest.mock import MagicMock
import json
from others.llm import descriptive_evaluation

class TestEvaluationClassificationRules(unittest.TestCase):
    def setUp(self):
        self.mock_client = MagicMock()
        self.mock_response = MagicMock()
        self.mock_response.status_code = 200
        self.mock_client.chat_completion.return_value = self.mock_response

    def test_prompt_contains_all_core_classification_rules(self):
        """Verify prompt contains strict classification instructions requested by user."""
        self.mock_response.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "score": 3.0,
                        "missing": "None",
                        "incomplete": "None",
                        "incorrect": "None",
                        "feedback": "Evaluation completed.",
                        "ai_confidence": 90
                    })
                }
            }]
        }

        descriptive_evaluation(
            self.mock_client,
            question_mark=5,
            expected_answer="DNA double helix, nucleotides, transcription and translation",
            student_answer="DNA has nucleotides and a double helix structure.",
            question_text="Explain the structure and function of DNA."
        )

        called_args = self.mock_client.chat_completion.call_args[0]
        system_msg, user_msg = called_args[0], called_args[1]

        # 1. Evidence checking rule
        self.assertIn("MANDATORY EVIDENCE CHECKING", system_msg)
        self.assertIn("CHECK STUDENT TEXT FIRST", user_msg)

        # 2. Factual errors belong in incorrect
        self.assertIn("FACTUAL ERROR ROUTING", system_msg)
        self.assertIn("FACTUAL ERRORS BELONG EXCLUSIVELY IN", user_msg)

        # 3. Zero duplication rule
        self.assertIn("ZERO DUPLICATION ACROSS CATEGORIES", system_msg)
        self.assertIn("ZERO DUPLICATION BETWEEN CATEGORIES", user_msg)

        # 4. Rubric grounding (no invented requirements)
        self.assertIn("NEVER INVENT EXTRA REQUIREMENTS", system_msg)
        self.assertIn("NO UNREQUESTED REQUIREMENTS", user_msg)

    def test_cross_category_deduplication_removes_redundant_incomplete_items(self):
        """Verify post-processing removes incomplete items that duplicate incorrect items."""
        # Simulated LLM output where Calvin cycle and active transport are duplicated in incomplete
        mock_output = {
            "score": 2.0,
            "missing": "None",
            "incomplete": (
                "Calvin cycle uses oxygen Complete: Calvin cycle fixes carbon dioxide | "
                "Light reactions Complete: Explain photon absorption in photosystems"
            ),
            "incorrect": (
                "Calvin cycle uses oxygen as its carbon source Correct: Calvin cycle uses carbon dioxide from air | "
                "Water requires active transport in every case Correct: Water moves passively by osmosis"
            ),
            "feedback": "Partially correct answer.",
            "ai_confidence": 85
        }

        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(mock_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=5,
            expected_answer="Photosynthesis mechanisms",
            student_answer="Calvin cycle uses oxygen...",
            question_text="Explain photosynthesis."
        )

        self.assertTrue(result["status"])
        # The duplicate 'Calvin cycle uses oxygen' must be pruned from incomplete
        self.assertNotIn("Calvin cycle uses oxygen", result["incomplete"])
        # The genuinely distinct 'Light reactions' must be preserved in incomplete
        self.assertIn("Light reactions", result["incomplete"])
        # The incorrect items must be fully preserved
        self.assertIn("Calvin cycle uses oxygen", result["incorrect"])
        self.assertIn("Water requires active transport", result["incorrect"])

    def test_cross_category_deduplication_preserves_distinct_points_on_same_topic(self):
        """Verify post-processing does NOT remove separate valid mistakes on the same topic (e.g. activation energy)."""
        mock_output = {
            "score": 1.0,
            "missing": "None",
            "incomplete": "The answer does not explain activation energy Complete: Detail how lowering activation energy increases the rate of reaction",
            "incorrect": "Enzymes increase activation energy Correct: Enzymes lower activation energy",
            "feedback": "Factual error regarding activation energy and incomplete kinetics explanation.",
            "ai_confidence": 90
        }

        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(mock_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=3,
            expected_answer="Enzymes lower activation energy to increase reaction rate.",
            student_answer="Enzymes increase activation energy.",
            question_text="Explain how enzymes affect activation energy and reaction rate."
        )

        self.assertTrue(result["status"])
        # Both the factual error and the distinct incomplete explanation MUST be preserved
        self.assertIn("Enzymes increase activation energy", result["incorrect"])
        self.assertIn("Enzymes lower activation energy", result["incorrect"])
        self.assertIn("The answer does not explain activation energy", result["incomplete"])
        self.assertIn("Detail how lowering activation energy increases the rate of reaction", result["incomplete"])

    def test_prefix_stripping_and_empty_category_normalization(self):
        """Verify prefixes like 'Incorrect: ', 'Missed: ', 'Incomplete: ' are stripped and empty fields become 'None'."""
        mock_output = {
            "score": 1.5,
            "missing": "Missed: Phospholipid bilayer Needed: Describe bilayer structure",
            "incomplete": "Incomplete: Enzyme specificity Complete: Active site conformational fit",
            "incorrect": "Incorrect: Water requires active transport Correct: Water moves by osmosis",
            "feedback": "Feedback here.",
            "ai_confidence": 80
        }

        self.mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps(mock_output)}}]
        }

        result = descriptive_evaluation(
            self.mock_client,
            question_mark=3,
            expected_answer="Cell membrane transport",
            student_answer="Answer...",
            question_text="Question..."
        )

        self.assertTrue(result["status"])
        self.assertFalse(result["missing"].startswith("Missed:"))
        self.assertTrue(result["missing"].startswith("Phospholipid bilayer"))
        self.assertFalse(result["incomplete"].startswith("Incomplete:"))
        self.assertTrue(result["incomplete"].startswith("Enzyme specificity"))
        self.assertFalse(result["incorrect"].startswith("Incorrect:"))
        self.assertTrue(result["incorrect"].startswith("Water requires active transport"))

if __name__ == "__main__":
    unittest.main()
