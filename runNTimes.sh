#!/bin/sh
if [ "$1" != "" ]; then
    #echo \$1 is set
  TIMES=$1
else
  # echo \$1 is not set
  TIMES=10
fi
for ((n=0;n<$TIMES;n++)); do node diffie.js; done
