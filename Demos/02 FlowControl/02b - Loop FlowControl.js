
// Loops
var binds = {};
var a = 0, b = 1, f = 1, n=10, ret;
for(var i = 2; i <= n; i++) {
  f = a + b;
  a = b; b = f;
  binds.i = i;
  binds.f = f;
  util.execute( "insert into sqlcl_demo(indx,fibonacci) values(:i, :f)",
                binds);
}
// Constructing Scripts
var stmt ="commit; \n";
binds={};
var ret = util.executeReturnList("select indx, fibonacci from sqlcl_demo", binds);

for (i = 0; i < ret.length; i++) {
    stmt = stmt + "@02_demo.sql "+ ret[i].INDX + " " + ret[i].FIBONACCI + "\n";
}

ctx.write ("Script: \n"+stmt);
sqlcl.setStmt( stmt );
sqlcl.run();
