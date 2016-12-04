#!/bin/bash

lib=/home/oracle/sqlcl/lib
clp="" 
for jar in `ls $lib/*.jar`
do
 clp=${clp}:$jar
done
#export CP="."
echo JARS: $clp
echo
echo

# The Java Environment needs at least to know where the jdbc-Drivers are.
# But it's OK, if we hand over the other jars as well.
export CLASSPATH=$clp

~/jython/bin/jython -Dpython.path=$clp  ./demo07b.py
