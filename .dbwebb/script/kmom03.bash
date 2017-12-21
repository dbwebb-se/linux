#!/usr/bin/env bash

# Include ./functions.bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$DIR/functions.bash" 

ACRONYM=$1

# Potatoe if needed
[ -z $2 ] || dbwebb run potatoe $ACRONYM

# Download it (what if we get it from GitHub instead?)
sudo rm -rf me/redovisa/{*,.??*}
sudo rm -rf me/app/{*,.??*}
dbwebb init-me
yes | dbwebb --force download redovisa $ACRONYM || exit 1
yes | dbwebb --force download app $ACRONYM || exit 1

check_dir_for_git "me/redovisa"
check_dir_for_git "me/app"

# export DBWEBB_HOST=1338

# me/redovisa/
# make install / npm install
# make test / npm test
# code coverage
# make test1, make test2 make test3
# kolla CI-kedja

# me/app/
# make install
# make test
# make test1 test2 test3
# make start-docker
# kolla app landingssidan i redovisa
#     - vilka tekniker
#     - länk github
# kolla taggar
# checka ut senaste taggen

# vid behov, kolla README efter instruktioner
