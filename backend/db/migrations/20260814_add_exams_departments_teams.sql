IF OBJECT_ID('dbo.ExamsDepartments', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.ExamsDepartments (
        id UNIQUEIDENTIFIER NOT NULL CONSTRAINT PK_ExamsDepartments PRIMARY KEY DEFAULT NEWID(),
        exam_id VARCHAR(255) NOT NULL,
        department_id VARCHAR(255) NULL,
        created_by VARCHAR(255) NULL,
        created_date DATETIME2 NOT NULL CONSTRAINT DF_ExamsDepartments_created_date DEFAULT SYSUTCDATETIME()
    );
END;
GO

IF OBJECT_ID('dbo.ExamsTeams', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.ExamsTeams (
        id UNIQUEIDENTIFIER NOT NULL CONSTRAINT PK_ExamsTeams PRIMARY KEY DEFAULT NEWID(),
        exam_id VARCHAR(255) NOT NULL,
        team_id VARCHAR(255) NULL,
        created_by VARCHAR(255) NULL,
        created_date DATETIME2 NOT NULL CONSTRAINT DF_ExamsTeams_created_date DEFAULT SYSUTCDATETIME()
    );
END;
GO
