// script "03 Loading blobs.js" "<complete image path>"

var HashMap = Java.type("java.util.HashMap");
var bindmap = new HashMap();

print("\nreading file: "+ args[1]);
var filePath=args[1];

var blob=conn.createBlob();
var bstream=blob.setBinaryStream(1);

java.nio.file.Files.copy( java.nio.file.FileSystems.getDefault().getPath(filePath)
                        , bstream );
bstream.flush();

bindmap.put("inhalt",  blob);
bindmap.put("pfad", filePath);


if(!util.execute( "insert into dokument (datei_inhalt,datei_pfad, datum) values(:inhalt, :pfad, sysdate)"
                , bindmap)
  ){ print("insert failed, exiting");
     exit;
}
sqlcl.setStmt( "commit; \n"
             + "set sqlformat ansiconsole \n"
             + ' select datei_pfad "Dateipfad",dbms_lob.getlength(datei_inhalt) "Größe", to_char(datum,\'DD.MM.YYYY HH24:MI:SS\') "Zeit" '
             + "from dokument;");
sqlcl.run();
