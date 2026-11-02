IF COL_LENGTH('dbo.Institutes', 'qa_character_limits') IS NULL
BEGIN
    ALTER TABLE dbo.Institutes 
    ADD qa_character_limits NVARCHAR(MAX) NULL 
    CONSTRAINT DF_Institutes_qa_character_limits 
    DEFAULT ('[{"marks": 2, "character_limit": 450}, {"marks": 5, "character_limit": 1000}, {"marks": 10, "character_limit": 1500}]');
END
GO

