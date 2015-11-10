#!/bin/env bash
echo "$EDITOR"

# ${var+x} is a parameter expansion which evaluates to the null 
# if var is unset and substitutes the string "x" otherwise
if [[ ${EDITOR1+x} ]]; then
    echo "EDITOR1='$EDITOR1'"
else
    echo "EDITOR1 is not set."
fi
