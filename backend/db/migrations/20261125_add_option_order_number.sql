IF COL_LENGTH('dbo.Options', 'order_number') IS NULL
BEGIN
    ALTER TABLE dbo.Options
    ADD order_number INT NULL;
END
GO

-- Backfill order_number for existing options that have embedded A/B/C/D/E/F prefixes
UPDATE dbo.Options
SET order_number = CASE
    WHEN UPPER(LTRIM(option_text)) LIKE 'A)%' OR UPPER(LTRIM(option_text)) LIKE '(A)%' OR UPPER(LTRIM(option_text)) LIKE 'A.%' OR UPPER(LTRIM(option_text)) LIKE 'A:%' OR UPPER(LTRIM(option_text)) LIKE 'A-%' THEN 1
    WHEN UPPER(LTRIM(option_text)) LIKE 'B)%' OR UPPER(LTRIM(option_text)) LIKE '(B)%' OR UPPER(LTRIM(option_text)) LIKE 'B.%' OR UPPER(LTRIM(option_text)) LIKE 'B:%' OR UPPER(LTRIM(option_text)) LIKE 'B-%' THEN 2
    WHEN UPPER(LTRIM(option_text)) LIKE 'C)%' OR UPPER(LTRIM(option_text)) LIKE '(C)%' OR UPPER(LTRIM(option_text)) LIKE 'C.%' OR UPPER(LTRIM(option_text)) LIKE 'C:%' OR UPPER(LTRIM(option_text)) LIKE 'C-%' THEN 3
    WHEN UPPER(LTRIM(option_text)) LIKE 'D)%' OR UPPER(LTRIM(option_text)) LIKE '(D)%' OR UPPER(LTRIM(option_text)) LIKE 'D.%' OR UPPER(LTRIM(option_text)) LIKE 'D:%' OR UPPER(LTRIM(option_text)) LIKE 'D-%' THEN 4
    WHEN UPPER(LTRIM(option_text)) LIKE 'E)%' OR UPPER(LTRIM(option_text)) LIKE '(E)%' OR UPPER(LTRIM(option_text)) LIKE 'E.%' OR UPPER(LTRIM(option_text)) LIKE 'E:%' OR UPPER(LTRIM(option_text)) LIKE 'E-%' THEN 5
    WHEN UPPER(LTRIM(option_text)) LIKE 'F)%' OR UPPER(LTRIM(option_text)) LIKE '(F)%' OR UPPER(LTRIM(option_text)) LIKE 'F.%' OR UPPER(LTRIM(option_text)) LIKE 'F:%' OR UPPER(LTRIM(option_text)) LIKE 'F-%' THEN 6
    ELSE order_number
END
WHERE order_number IS NULL;
GO
