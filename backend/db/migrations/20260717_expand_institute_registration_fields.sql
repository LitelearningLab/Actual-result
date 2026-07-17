-- Match user-entered institute fields to the lengths accepted by the application.
-- Preserve required-name constraints while widening columns that receive form input.
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
GO
