-- Expand Exams description column to allow long descriptions without truncation errors.
IF COL_LENGTH('dbo.Exams', 'description') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Exams ALTER COLUMN description NVARCHAR(MAX) NULL;
END
GO
