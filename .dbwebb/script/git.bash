#!/usr/bin/env bash

# Include ./functions.bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$DIR/functions.bash" 

if [ -z $1 ]; then
    echo "Usage: <url to git>"
    exit 1
fi

GIT="${1}.git"
export DBWEBB_HOST="${DBWEBB_HOST:-1338}"


# Download it (what if we get it from GitHub instead?)
TARGET="me/git"
install -d $TARGET
sudo rm -rf $TARGET/{*,.??*}
git clone $GIT $TARGET

check_dir_for_git $TARGET

pushd $TARGET
npm run
npm test
npm start
popd


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
