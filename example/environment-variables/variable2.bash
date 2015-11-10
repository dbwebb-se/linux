#!/bin/env bash
echo "$EDITOR"
if [[ $EDITOR1 ]]; then
    echo "EDITOR1='$EDITOR1'"
else
    echo "EDITOR1 is not set."
fi
