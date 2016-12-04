#!/bin/bash
java -version

sql geoff/geoff << EOF
script demo07c.js
EOF

export PATH=~/jre-9/bin:$PATH
export JAVA_HOME=/home/oracle/jre-9
export APP_VM_OPTS="-Dnashorn.args=--language=es6"
java -version

sql geoff/geoff << EOF
script demo07c.js
EOF
