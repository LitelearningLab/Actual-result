-- Migration: Add is_draft column to Exams table for Paper Question drafts
-- Default is 0 so existing records and finalized papers are treated as 0 (not draft).
IF COL_LENGTH('dbo.Exams', 'is_draft') IS NULL
BEGIN
    ALTER TABLE dbo.Exams ADD is_draft INT NULL CONSTRAINT DF_Exams_is_draft DEFAULT 0;
END;
GO

