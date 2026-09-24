-- Keep online tests and printable question papers as separate exam workflows.
-- This migration is idempotent so it is safe during every application startup.
IF COL_LENGTH('dbo.Exams', 'test_mode') IS NULL
BEGIN
    ALTER TABLE dbo.Exams ADD test_mode NVARCHAR(50) NULL;
END;
GO

IF COL_LENGTH('dbo.Exams', 'total_marks') IS NULL
BEGIN
    ALTER TABLE dbo.Exams ADD total_marks INT NULL;
END;
GO
