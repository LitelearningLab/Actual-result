IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='AnswerSheetPages' AND xtype='U')
BEGIN
    CREATE TABLE AnswerSheetPages (
        page_id NVARCHAR(50) PRIMARY KEY,
        attempt_id NVARCHAR(50) NOT NULL,
        page_number INT NOT NULL,
        image_path NVARCHAR(500) NOT NULL,
        created_date DATETIME DEFAULT GETUTCDATE()
    );
    CREATE INDEX IX_AnswerSheetPages_Attempt ON AnswerSheetPages(attempt_id);
END
GO
