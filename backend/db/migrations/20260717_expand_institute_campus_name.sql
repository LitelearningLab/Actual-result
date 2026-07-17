-- Campus names can be longer than the legacy 21-character limit.
IF COL_LENGTH('dbo.InstituteCampuses', 'name') < 510
BEGIN
    ALTER TABLE dbo.InstituteCampuses
        ALTER COLUMN name NVARCHAR(255) NOT NULL;
END;
GO
