#!/bin/env bash
echo "$EDITOR"

#[[ -z $var ]]  # True if zero length
if [[ -z $EDITOR1 ]]; then
    echo "EDITOR1='$EDITOR1'"
else
    echo "EDITOR1 is not set."
fi
