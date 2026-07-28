-- Migration: Expand column sizes in Categories, CategoriesDepartments, and CategoriesTeams to prevent truncation errors.

IF COL_LENGTH('dbo.Categories', 'is_deleted') IS NULL
BEGIN
    ALTER TABLE dbo.Categories ADD is_deleted BIT NULL;
END

IF COL_LENGTH('dbo.Categories', 'name') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Categories ALTER COLUMN name NVARCHAR(255) NULL;
END

IF COL_LENGTH('dbo.Categories', 'description') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Categories ALTER COLUMN description NVARCHAR(MAX) NULL;
END

IF COL_LENGTH('dbo.Categories', 'type') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Categories ALTER COLUMN type NVARCHAR(100) NULL;
END

IF COL_LENGTH('dbo.Categories', 'answer_by') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Categories ALTER COLUMN answer_by NVARCHAR(100) NULL;
END

IF COL_LENGTH('dbo.Categories', 'evaluation') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Categories ALTER COLUMN evaluation NVARCHAR(100) NULL;
END

IF COL_LENGTH('dbo.Categories', 'created_by') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Categories ALTER COLUMN created_by NVARCHAR(255) NULL;
END

IF COL_LENGTH('dbo.Categories', 'updated_by') IS NOT NULL
BEGIN
    ALTER TABLE dbo.Categories ALTER COLUMN updated_by NVARCHAR(255) NULL;
END

IF COL_LENGTH('dbo.CategoriesDepartments', 'name') IS NOT NULL
BEGIN
    ALTER TABLE dbo.CategoriesDepartments ALTER COLUMN name NVARCHAR(255) NULL;
END

IF COL_LENGTH('dbo.CategoriesTeams', 'name') IS NOT NULL
BEGIN
    ALTER TABLE dbo.CategoriesTeams ALTER COLUMN name NVARCHAR(255) NULL;
END

IF COL_LENGTH('dbo.ExamReviewComments', 'category') IS NOT NULL
BEGIN
    ALTER TABLE dbo.ExamReviewComments ALTER COLUMN category NVARCHAR(100) NULL;
END

IF COL_LENGTH('dbo.ExamReviewCommentsHistory', 'category') IS NOT NULL
BEGIN
    ALTER TABLE dbo.ExamReviewCommentsHistory ALTER COLUMN category NVARCHAR(100) NULL;
END

