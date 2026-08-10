IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'dbo.Answers') AND name = N'marks_awarded')
BEGIN
    ALTER TABLE dbo.Answers ALTER COLUMN marks_awarded FLOAT NULL;
END
GO

IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'dbo.Answers') AND name = N'ai_marks')
BEGIN
    ALTER TABLE dbo.Answers ALTER COLUMN ai_marks FLOAT NULL;
END
GO

IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'dbo.Answers') AND name = N'manual_marks')
BEGIN
    ALTER TABLE dbo.Answers ALTER COLUMN manual_marks FLOAT NULL;
END
GO

IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'dbo.MarksHistory') AND name = N'marks_awarded')
BEGIN
    ALTER TABLE dbo.MarksHistory ALTER COLUMN marks_awarded FLOAT NULL;
END
GO

IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'dbo.Exam_Attempts') AND name = N'score')
BEGIN
    ALTER TABLE dbo.Exam_Attempts ALTER COLUMN score FLOAT NULL;
END
GO
