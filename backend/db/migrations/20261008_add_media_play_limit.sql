IF NOT EXISTS (
    SELECT * FROM sys.columns 
    WHERE object_id = OBJECT_ID('QuestionMedia') AND name = 'play_limit'
)
BEGIN
    ALTER TABLE QuestionMedia ADD play_limit INT DEFAULT 0;
END
GO
