echo Jython standalone
java -jar ./jython-standalone-2.7.0.jar ./fibonacci.py

echo LuaJ  standalone
java -cp ./luaj-jse-3.0.1.jar lua ./fibonacci.lua


echo "SQLcl won't find the interpreters"
sql geoff/geoff << EOF

script ./fibonacci.py
script ./fibonacci.lua

EOF

echo "Pointing the CLASSPATH to the interpreters"
export CLASSPATH="jython-standalone-2.7.0.jar:luaj-jse-3.0.1.jar"

echo CLASSPATH: $CLASSPATH

sql geoff/geoff << EOF

script ./fibonacci.py
script ./fibonacci.lua

EOF
