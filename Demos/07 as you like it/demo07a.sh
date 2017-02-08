echo Jython standalone
java -jar ./jython-standalone-2.7.0.jar ./fibonacci.py

echo LuaJ  standalone
java -cp ./luaj-jse-3.0.1.jar lua ./fibonacci.lua

#Pause
read -n1 -r -p "Press any key to continue..." key

echo
echo "SQLcl won't find the interpreters"
sql -s geoff/geoff << EOF

script ./fibonacci.py
script ./fibonacci.lua

EOF

#Pause
read -n1 -r -p "Press any key to continue..." key
echo
echo "Pointing the CLASSPATH to the interpreters"
export CLASSPATH="jython-standalone-2.7.0.jar:luaj-jse-3.0.1.jar"

echo CLASSPATH: $CLASSPATH

sql -s geoff/geoff << EOF

script ./fibonacci.py
script ./fibonacci.lua

EOF
