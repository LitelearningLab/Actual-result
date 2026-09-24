-- Store direct user assignments for printable question papers.
IF OBJECT_ID('dbo.QuestionPaperUserAssignments', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.QuestionPaperUserAssignments (
        assignment_id UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
        exam_id UNIQUEIDENTIFIER NOT NULL,
        user_id UNIQUEIDENTIFIER NOT NULL,
        created_by NVARCHAR(255) NULL,
        created_date DATETIME NOT NULL CONSTRAINT DF_QuestionPaperUserAssignments_CreatedDate DEFAULT GETUTCDATE(),
        CONSTRAINT FK_QuestionPaperUserAssignments_Exam FOREIGN KEY (exam_id) REFERENCES dbo.Exams(exam_id),
        CONSTRAINT FK_QuestionPaperUserAssignments_User FOREIGN KEY (user_id) REFERENCES dbo.Users(user_id),
        CONSTRAINT UQ_QuestionPaperUserAssignments UNIQUE (exam_id, user_id)
    );

    CREATE INDEX IX_QuestionPaperUserAssignments_Exam
        ON dbo.QuestionPaperUserAssignments(exam_id);
    CREATE INDEX IX_QuestionPaperUserAssignments_User
        ON dbo.QuestionPaperUserAssignments(user_id);
END;
GO
