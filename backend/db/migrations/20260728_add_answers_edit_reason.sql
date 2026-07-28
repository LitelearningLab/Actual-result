IF COL_LENGTH('dbo.Answers', 'edit_reason') IS NULL
BEGIN
    ALTER TABLE dbo.Answers
    ADD edit_reason NVARCHAR(MAX) NULL;
END;
