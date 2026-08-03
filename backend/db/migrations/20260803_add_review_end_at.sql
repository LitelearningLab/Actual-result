-- Add review_end_at column to ExamSchedules table
IF COL_LENGTH('dbo.ExamSchedules', 'review_end_at') IS NULL
BEGIN
    ALTER TABLE dbo.ExamSchedules
        ADD review_end_at DATETIME2 NULL;
END;
GO
