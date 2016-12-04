
print ("ctx.write() and print seem to work the same way (ctx needs a trailing '\\n', though)");
print ("but they are using different output streams...");
print("(The commands are issued in the order of the digits)");
print("");

ctx.write('1 - ctx\n');
print(    '2 - print');
ctx.write('3 - ctx\n');
print(    '4 - print');
ctx.write('5 - ctx\n');
print(    '6 - print');

