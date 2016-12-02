script

var dbUser = util.executeReturnOneCol('select user from dual');
if ( dbUser == 'GEOFF' ) {
 sqlcl.setStmt('set sqlprompt "@|white,bg_green,INTENSITY_BOLD Go _user! |@ "');
} else {
 sqlcl.setStmt('set sqlprompt "@|white,bg_red,INTENSITY_BOLD Go _user! |@ "');
}

sqlcl.run();

/

