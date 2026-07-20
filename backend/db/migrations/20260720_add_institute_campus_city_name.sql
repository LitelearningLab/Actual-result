-- Store a user-entered city without violating the optional Cities foreign key.
IF COL_LENGTH('dbo.InstituteCampuses', 'city_name') IS NULL
BEGIN
    ALTER TABLE dbo.InstituteCampuses
        ADD city_name NVARCHAR(255) NULL;
END;
GO

-- Preserve readable values from any legacy rows whose city_id has no master record.
UPDATE campus
SET campus.city_name = campus.city_id,
    campus.city_id = NULL
FROM dbo.InstituteCampuses AS campus
LEFT JOIN dbo.Cities AS city
    ON city.city_id = campus.city_id
WHERE campus.city_id IS NOT NULL
  AND city.city_id IS NULL
  AND campus.city_name IS NULL;
GO
