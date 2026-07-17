-- Manual Review access can be opened or closed by an admin after completion.
IF COL_LENGTH('dbo.ExamSchedules', 'manual_review_enabled') IS NULL
BEGIN
    ALTER TABLE dbo.ExamSchedules
        ADD manual_review_enabled BIT NOT NULL
            CONSTRAINT DF_ExamSchedules_manual_review_enabled DEFAULT (0) WITH VALUES;

    -- Compile the backfill after ALTER TABLE so SQL Server can resolve the new column.
    EXEC sys.sp_executesql N'
        UPDATE dbo.ExamSchedules
        SET manual_review_enabled = 1
        WHERE review_mode = ''manual'';
    ';
END;
GO
