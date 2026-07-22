IF COL_LENGTH('dbo.MarksHistory', 'edit_reason') IS NULL
BEGIN
    ALTER TABLE dbo.MarksHistory
    ADD edit_reason NVARCHAR(MAX) NULL;
END;
