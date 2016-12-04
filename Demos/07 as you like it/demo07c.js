/* ES6 Demo */
const user = util.executeReturnOneCol('select user from dual');

const a="Hello ECMA Script 6";
let b="const and let are new to ES6";

print(`ES 6 allows multiline strings
  enclosed in backticks and variables includes with "$"
  and curly braces ${a} ${b} User: ${user}`);
