IF OBJECT_ID('dbo.Settings', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.Settings (
        setting_id UNIQUEIDENTIFIER NOT NULL
            CONSTRAINT PK_Settings PRIMARY KEY DEFAULT NEWID(),
        ai_confidence_threshold FLOAT NOT NULL
            CONSTRAINT DF_Settings_ai_confidence_threshold DEFAULT (70),
        updated_by UNIQUEIDENTIFIER NULL,
        updated_at DATETIME2 NOT NULL
            CONSTRAINT DF_Settings_updated_at DEFAULT SYSUTCDATETIME(),
        CONSTRAINT FK_Settings_updated_by FOREIGN KEY (updated_by) REFERENCES dbo.Users(user_id),
        CONSTRAINT CK_Settings_ai_confidence_threshold CHECK (ai_confidence_threshold >= 0 AND ai_confidence_threshold <= 100)
    );

    INSERT INTO dbo.Settings (ai_confidence_threshold) VALUES (70);
END;
GO

IF COL_LENGTH('dbo.ExamReviewComments', 'edit_reason') IS NULL
    ALTER TABLE dbo.ExamReviewComments ADD edit_reason NVARCHAR(MAX) NULL;
IF COL_LENGTH('dbo.ExamReviewComments', 'edited_by') IS NULL
    ALTER TABLE dbo.ExamReviewComments ADD edited_by UNIQUEIDENTIFIER NULL;
IF COL_LENGTH('dbo.ExamReviewComments', 'edited_at') IS NULL
    ALTER TABLE dbo.ExamReviewComments ADD edited_at DATETIME2 NULL;
GO

IF NOT EXISTS (SELECT 1 FROM sys.foreign_keys WHERE name = 'FK_ExamReviewComments_edited_by')
    ALTER TABLE dbo.ExamReviewComments ADD CONSTRAINT FK_ExamReviewComments_edited_by FOREIGN KEY (edited_by) REFERENCES dbo.Users(user_id);
GO

IF COL_LENGTH('dbo.ExamReviewCommentsHistory', 'edit_reason') IS NULL
    ALTER TABLE dbo.ExamReviewCommentsHistory ADD edit_reason NVARCHAR(MAX) NULL;
IF COL_LENGTH('dbo.ExamReviewCommentsHistory', 'edited_by') IS NULL
    ALTER TABLE dbo.ExamReviewCommentsHistory ADD edited_by UNIQUEIDENTIFIER NULL;
IF COL_LENGTH('dbo.ExamReviewCommentsHistory', 'edited_at') IS NULL
    ALTER TABLE dbo.ExamReviewCommentsHistory ADD edited_at DATETIME2 NULL;
GO

IF NOT EXISTS (SELECT 1 FROM sys.foreign_keys WHERE name = 'FK_ExamReviewCommentsHistory_edited_by')
    ALTER TABLE dbo.ExamReviewCommentsHistory ADD CONSTRAINT FK_ExamReviewCommentsHistory_edited_by FOREIGN KEY (edited_by) REFERENCES dbo.Users(user_id);
GO
