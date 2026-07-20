-- City is user-entered filter text, not a master-data foreign key.
IF COL_LENGTH('dbo.InstituteCampuses', 'city_name') IS NULL
BEGIN
    ALTER TABLE dbo.InstituteCampuses ADD city_name NVARCHAR(255) NULL;
END;
GO

-- Preserve readable city names for existing master-linked campus rows.
UPDATE campus
SET campus.city_name = COALESCE(NULLIF(LTRIM(RTRIM(campus.city_name)), ''), city.city_name, campus.city_id)
FROM dbo.InstituteCampuses AS campus
LEFT JOIN dbo.Cities AS city ON city.city_id = campus.city_id
WHERE campus.city_id IS NOT NULL;
GO

DECLARE @constraint_name SYSNAME;
DECLARE @drop_sql NVARCHAR(MAX);

SELECT TOP (1) @constraint_name = fk.name
FROM sys.foreign_keys AS fk
JOIN sys.foreign_key_columns AS fkc
    ON fkc.constraint_object_id = fk.object_id
JOIN sys.columns AS parent_column
    ON parent_column.object_id = fkc.parent_object_id
   AND parent_column.column_id = fkc.parent_column_id
WHERE fkc.parent_object_id = OBJECT_ID('dbo.InstituteCampuses')
  AND fkc.referenced_object_id = OBJECT_ID('dbo.Cities')
  AND parent_column.name = 'city_id';

IF @constraint_name IS NOT NULL
BEGIN
    SET @drop_sql = N'ALTER TABLE dbo.InstituteCampuses DROP CONSTRAINT '
        + QUOTENAME(@constraint_name) + N';';
    EXEC sys.sp_executesql @drop_sql;
END;
GO

-- New writes use city_name only; clear the obsolete city ID after backfill.
UPDATE dbo.InstituteCampuses
SET city_id = NULL
WHERE city_id IS NOT NULL;
GO
