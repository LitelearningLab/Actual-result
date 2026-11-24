IF COL_LENGTH('dbo.Institutes', 'allow_online_test') IS NULL
BEGIN
    ALTER TABLE dbo.Institutes
    ADD allow_online_test BIT NOT NULL
    CONSTRAINT DF_Institutes_allow_online_test DEFAULT (1);
END
GO

IF COL_LENGTH('dbo.Institutes', 'allow_paper_test') IS NULL
BEGIN
    ALTER TABLE dbo.Institutes
    ADD allow_paper_test BIT NOT NULL
    CONSTRAINT DF_Institutes_allow_paper_test DEFAULT (1);
END
GO

UPDATE dbo.Institutes
SET allow_online_test = 1
WHERE allow_online_test IS NULL;
GO

UPDATE dbo.Institutes
SET allow_paper_test = 1
WHERE allow_paper_test IS NULL;
GO

-- Expand column sizes in dbo.Pages to accommodate longer page names and URLs
IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Pages' AND COLUMN_NAME = 'page_name' AND CHARACTER_MAXIMUM_LENGTH < 100)
BEGIN
    ALTER TABLE dbo.Pages ALTER COLUMN page_name NVARCHAR(100) NULL;
END
GO

IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Pages' AND COLUMN_NAME = 'page_url' AND CHARACTER_MAXIMUM_LENGTH < 100)
BEGIN
    ALTER TABLE dbo.Pages ALTER COLUMN page_url NVARCHAR(100) NULL;
END
GO

-- Ensure Pages exist for Paper Test and Paper Evaluation
IF NOT EXISTS (SELECT 1 FROM dbo.Pages WHERE page_name = 'Create/Edit Paper Test')
BEGIN
    INSERT INTO dbo.Pages (page_id, page_name, page_url, created_date)
    VALUES (NEWID(), 'Create/Edit Paper Test', '/question-papers', GETDATE());
END
GO

IF NOT EXISTS (SELECT 1 FROM dbo.Pages WHERE page_name = 'Schedule Paper Test')
BEGIN
    INSERT INTO dbo.Pages (page_id, page_name, page_url, created_date)
    VALUES (NEWID(), 'Schedule Paper Test', '/scheduled-paper-tests', GETDATE());
END
GO

IF NOT EXISTS (SELECT 1 FROM dbo.Pages WHERE page_name = 'Paper Evaluation')
BEGIN
    INSERT INTO dbo.Pages (page_id, page_name, page_url, created_date)
    VALUES (NEWID(), 'Paper Evaluation', '/test-evaluation', GETDATE());
END
GO

-- Grant paper test page permissions to existing admin users whose institute has allow_paper_test = 1
INSERT INTO dbo.UserPageAccess (access_id, user_id, page_id, can_view, can_add, can_edit, can_delete, created_date)
SELECT 
    NEWID(),
    u.user_id,
    p.page_id,
    1, 1, 1, 1,
    GETDATE()
FROM dbo.Users u
INNER JOIN dbo.Institutes i ON u.institute_id = i.institute_id
CROSS JOIN dbo.Pages p
WHERE u.user_role = 'admin'
  AND ISNULL(i.allow_paper_test, 1) = 1
  AND p.page_name IN ('Create/Edit Paper Test', 'Schedule Paper Test')
  AND NOT EXISTS (
      SELECT 1 FROM dbo.UserPageAccess upa 
      WHERE upa.user_id = u.user_id AND upa.page_id = p.page_id
  );
GO
