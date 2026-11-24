-- ============================================================
-- Migration: Exam_Attempt status + score column update
-- Target DB: SQL Server (mssql)
-- Date: 2026-11-25
-- Description:
--   1. Add 'failed' to the status CHECK constraint.
--   2. Make score column nullable (remove default 0.0).
--
-- Safety:
--   - Existing 'evaluated' rows with score=0.0 are PRESERVED.
--   - Existing 'in_progress' rows with score=0.0 — score
--     becomes NULL after this migration (safe: they are
--     either still evaluating or failed, neither should
--     show 0 as a completed result).
--   - Online exam rows with status 'submitted' or 'evaluated'
--     and a real score are NOT touched.
--   - Run inside a transaction so the whole migration can
--     be rolled back on error.
-- ============================================================

BEGIN TRANSACTION;

-- Step 1: Drop existing CHECK constraint on status.
-- Find the constraint name first (may differ per DB instance).
DECLARE @ConstraintName NVARCHAR(256);
SELECT @ConstraintName = name
FROM sys.check_constraints
WHERE parent_object_id = OBJECT_ID('Exam_Attempts')
  AND CHARINDEX('status', definition) > 0;

IF @ConstraintName IS NOT NULL
BEGIN
    EXEC('ALTER TABLE Exam_Attempts DROP CONSTRAINT [' + @ConstraintName + ']');
END

-- Step 2: Add updated CHECK constraint including 'failed'.
ALTER TABLE Exam_Attempts
ADD CONSTRAINT CK_ExamAttempts_Status
CHECK (status IN ('not_started', 'in_progress', 'submitted', 'evaluated', 'failed'));

-- Step 3: Remove DEFAULT constraint on score (the 0.0 default).
DECLARE @DefaultName NVARCHAR(256);
SELECT @DefaultName = name
FROM sys.default_constraints
WHERE parent_object_id = OBJECT_ID('Exam_Attempts')
  AND COL_NAME(parent_object_id, parent_column_id) = 'score';

IF @DefaultName IS NOT NULL
BEGIN
    EXEC('ALTER TABLE Exam_Attempts DROP CONSTRAINT [' + @DefaultName + ']');
END

-- Step 4: Allow score column to be NULL.
-- Existing 0.0 values on 'in_progress' rows are set to NULL
-- because they were never real scores (DB default only).
-- Genuine 0.0 scores on 'evaluated' rows are preserved.
UPDATE Exam_Attempts
SET score = NULL
WHERE status = 'in_progress'
  AND score = 0.0;

-- Step 5: Alter column to allow NULL.
ALTER TABLE Exam_Attempts
ALTER COLUMN score FLOAT NULL;

COMMIT TRANSACTION;
-- ============================================================
-- Rollback: If needed, run:
--   ROLLBACK TRANSACTION;
-- ============================================================
