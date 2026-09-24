-- Preserve the configured question target used by section progress indicators.
IF COL_LENGTH('dbo.ExamSections', 'target_count') IS NULL
BEGIN
    ALTER TABLE dbo.ExamSections ADD target_count INT NULL;
END;
GO
