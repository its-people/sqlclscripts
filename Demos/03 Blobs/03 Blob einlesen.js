var HashMap = Java.type("java.util.HashMap");
var bindmap = new HashMap();

// Wir erwarten ein Argument: Den Dateinamen
print("\nLese Datei: "+ args[1]);
var filePath=args[1];

var blob=conn.createBlob();
var bstream=blob.setBinaryStream(1);
/* den Blob einlesen */
java.nio.file.Files.copy( java.nio.file.FileSystems.getDefault().getPath(filePath)
                        , bstream );
bstream.flush();

bindmap.put("inhalt",  blob);
bindmap.put("pfad", filePath);


if(!util.execute( "insert into dokument (datei_inhalt,datei_pfad, datum) values(:inhalt, :pfad, sysdate)"
                , bindmap)
  ){ print("insert fehlgeschlagen, exit.");
     exit;
}
sqlcl.setStmt( "commit; \n"
             + "set sqlformat ansiconsole \n"
             + ' select datei_pfad "Dateipfad",dbms_lob.getlength(datei_inhalt) "Größe", to_char(datum,\'DD.MM.YYYY HH24:MI:SS\') "Zeit" '
             + "from dokument;");
sqlcl.run();
