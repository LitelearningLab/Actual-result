-- Make the production institute schema match the registration form and ORM model.
-- Every statement is guarded, so this migration is safe to run more than once.

IF COL_LENGTH('dbo.Institutes', 'primary_contact_person') IS NULL
    ALTER TABLE dbo.Institutes ADD primary_contact_person NVARCHAR(255) NULL;
IF COL_LENGTH('dbo.Institutes', 'primary_contact_email') IS NULL
    ALTER TABLE dbo.Institutes ADD primary_contact_email NVARCHAR(255) NULL;
IF COL_LENGTH('dbo.Institutes', 'primary_contact_phone') IS NULL
    ALTER TABLE dbo.Institutes ADD primary_contact_phone NVARCHAR(50) NULL;
IF COL_LENGTH('dbo.Institutes', 'website') IS NULL
    ALTER TABLE dbo.Institutes ADD website NVARCHAR(500) NULL;
IF COL_LENGTH('dbo.Institutes', 'industry_type') IS NULL
    ALTER TABLE dbo.Institutes ADD industry_type NVARCHAR(255) NULL;
IF COL_LENGTH('dbo.Institutes', 'industry_sector') IS NULL
    ALTER TABLE dbo.Institutes ADD industry_sector NVARCHAR(255) NULL;
IF COL_LENGTH('dbo.Institutes', 'max_users') IS NULL
    ALTER TABLE dbo.Institutes ADD max_users INT NULL CONSTRAINT DF_Institutes_max_users DEFAULT (0);
IF COL_LENGTH('dbo.Institutes', 'subscription_start') IS NULL
    ALTER TABLE dbo.Institutes ADD subscription_start DATE NULL;
IF COL_LENGTH('dbo.Institutes', 'subscription_end') IS NULL
    ALTER TABLE dbo.Institutes ADD subscription_end DATE NULL;
GO

-- Use dynamic SQL so SQL Server resolves columns only after the guarded ADD statements.
EXEC sys.sp_executesql N'
ALTER TABLE dbo.Institutes ALTER COLUMN name NVARCHAR(255) NOT NULL;
ALTER TABLE dbo.Institutes ALTER COLUMN short_name NVARCHAR(100) NULL;
ALTER TABLE dbo.Institutes ALTER COLUMN primary_contact_person NVARCHAR(255) NULL;
ALTER TABLE dbo.Institutes ALTER COLUMN primary_contact_email NVARCHAR(255) NULL;
ALTER TABLE dbo.Institutes ALTER COLUMN primary_contact_phone NVARCHAR(50) NULL;
ALTER TABLE dbo.Institutes ALTER COLUMN website NVARCHAR(500) NULL;
ALTER TABLE dbo.Institutes ALTER COLUMN industry_type NVARCHAR(255) NULL;
ALTER TABLE dbo.Institutes ALTER COLUMN industry_sector NVARCHAR(255) NULL;

ALTER TABLE dbo.InstituteCampuses ALTER COLUMN address NVARCHAR(500) NULL;
ALTER TABLE dbo.InstituteCampuses ALTER COLUMN name NVARCHAR(255) NOT NULL;
ALTER TABLE dbo.InstituteCampuses ALTER COLUMN pin_code NVARCHAR(20) NULL;
ALTER TABLE dbo.InstituteCampuses ALTER COLUMN email NVARCHAR(255) NULL;
ALTER TABLE dbo.InstituteCampuses ALTER COLUMN phone NVARCHAR(50) NULL;

ALTER TABLE dbo.InstituteDepartments ALTER COLUMN name NVARCHAR(255) NOT NULL;
ALTER TABLE dbo.InstituteTeams ALTER COLUMN name NVARCHAR(255) NOT NULL;
';
GO
