-- Add enable_microphone and enable_scan_text columns to ExamSchedules table
IF COL_LENGTH('dbo.ExamSchedules', 'enable_microphone') IS NULL
BEGIN
    ALTER TABLE dbo.ExamSchedules
        ADD enable_microphone BIT NOT NULL DEFAULT 1;
END;
GO

IF COL_LENGTH('dbo.ExamSchedules', 'enable_scan_text') IS NULL
BEGIN
    ALTER TABLE dbo.ExamSchedules
        ADD enable_scan_text BIT NOT NULL DEFAULT 1;
END;
GO
