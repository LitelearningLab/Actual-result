IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='QuestionMedia' AND xtype='U')
BEGIN
    CREATE TABLE QuestionMedia (
        media_id NVARCHAR(50) PRIMARY KEY,
        question_id NVARCHAR(50) NOT NULL,
        media_type NVARCHAR(50) NOT NULL,
        file_url NVARCHAR(1000) NOT NULL,
        gcs_path NVARCHAR(500) NULL,
        original_filename NVARCHAR(255) NULL,
        mime_type NVARCHAR(100) NULL,
        file_size INT NULL,
        caption NVARCHAR(500) NULL,
        order_number INT DEFAULT 1,
        active_status INT DEFAULT 1,
        created_by NVARCHAR(50) NULL,
        created_date DATETIME DEFAULT GETUTCDATE(),
        updated_by NVARCHAR(50) NULL,
        updated_date DATETIME NULL
    );
    CREATE INDEX IX_QuestionMedia_Question ON QuestionMedia(question_id);
END
GO

IF NOT EXISTS (
    SELECT * FROM sys.columns 
    WHERE object_id = OBJECT_ID('Options') AND name = 'image_url'
)
BEGIN
    ALTER TABLE Options ADD image_url NVARCHAR(1000) NULL;
END
GO

IF NOT EXISTS (
    SELECT * FROM sys.columns 
    WHERE object_id = OBJECT_ID('Options') AND name = 'gcs_path'
)
BEGIN
    ALTER TABLE Options ADD gcs_path NVARCHAR(500) NULL;
END
GO
