// Flow Control Demo a

// Test existance of DB Objects
/* is the table already there? */
var tabName = "SQLCL_DEMO";
var tabCnt = util.executeReturnOneCol(
             'select count(*) ' +                  // JS don't care what kind
             '  from tabs '     +                  // of quote-chars
             " where table_name = '"+tabName+"'"   // are used
             );

print ("tabCnt: " + tabCnt);
if (tabCnt == 0){
  print("Table " + tabName + " not found. Creating it...");

  sqlcl.setStmt( "set echo on\n"                  // This code will be used
               + "set feedback on \n"             // is if it's typed  into SQLcl
               + "create table "+tabName+"( indx       number not null \n"
               + "                        , fibonacci  number          \n"
               + "                        );                           \n"
               + "set serveroutput on size unl \n"   // Everything that works in SQLcl can be used.
               + "alter table "+tabName+" add constraint pk_"+tabName+" primary key (indx);");
  // You will find all statements in the SQLcl History afterwards...
  sqlcl.run();
} else {
  ctx.write("Table "+tabName+" already exists.\n");
}
