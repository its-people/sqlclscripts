#import SQLcl
from java.sql import DriverManager
from oracle.dbtools.db import DBUtil
from oracle.dbtools.raptor.newscriptrunner import *
#prepare SQLcl
#conn  = DriverManager.getConnection('jdbc:oracle:thin:@localhost:1521/orcl','doag','doag')
conn  = DriverManager.getConnection(
         'jdbc:oracle:thin:@127.0.0.1:1521/orcl','geoff','geoff');

util  = DBUtil.getInstance(conn)
sqlcl = ScriptExecutor(conn)
ctx = ScriptRunnerContext()

#set the context
sqlcl.setScriptRunnerContext(ctx)
ctx.setBaseConnection(conn)

# Use SQLcl from python
print "**** Jython ****"

print "Running SQLcl from inside jython"
# Multiline-String. Could have used triple-quotes as well.
stmt="\n".join([ 'set sqlformat ansiconsole'  # sqlformat is needed. Otherwise Error will occur.
               , "select * from sqlcl_demo;" ])
print "Executing this buffer in SQLcl:"
print ""
print stmt
print ""
sqlcl.setStmt(stmt)
sqlcl.run()
