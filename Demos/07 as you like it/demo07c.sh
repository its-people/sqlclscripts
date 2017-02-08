#!/bin/bash
java -version
#Pause
read -n1 -r -p "Press any key to continue..." key
echo

sql -s geoff/geoff << EOF
script demo07c.js
EOF
#Pause
read -n1 -r -p "Press any key to continue..." key
echo

export PATH=~/jre-9/bin:$PATH
export JAVA_HOME=/home/oracle/jre-9
export APP_VM_OPTS="-Dnashorn.args=--language=es6"
java -version
#Pause
read -n1 -r -p "Press any key to continue..." key
echo

sql -s geoff/geoff << EOF
script demo07c.js
EOF
