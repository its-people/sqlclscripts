CREATE TABLE GEOFF.DOKUMENT (
    "ID"             NUMBER(*,0),
    "DATEI_INHALT"   BLOB,
    "DATEI_PFAD"     VARCHAR2(4000 CHAR),
    "DATUM"          DATE
);

truncate table GEOFF.dokument;