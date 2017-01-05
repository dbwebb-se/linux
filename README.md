Linux - linux
===================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mosbth/linux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)
[![Build Status](https://travis-ci.org/dbwebb-se/linux.svg?branch=master)](https://travis-ci.org/dbwebb-se/linux)
[![CircleCI](https://circleci.com/gh/dbwebb-se/linux.svg?style=svg)](https://circleci.com/gh/dbwebb-se/linux)


Course material for linux-course, aimed at a swedish target audience as an introduction to web programming for computer science students at University level.

Relased as part of a University course presented at:

* http://dbwebb.se/linux

The usage of this repo is also documented here (in swedish):

* http://dbwebb.se/dbwebb-cli



Acknowledgement
-------------------

This is a co-effort of several people using freely available documentation and tools from the open source community.

For contributors, see the commit history and the issues.

Feel free to help building up the repository with more content suited for training and education.



For teachers
-------------------

To get the solutions, one need extra privileges.

Useful aliases.

```bash
# Once cloned, get the submodule.
alias gsu='git submodule update --init --recursive'
```

When updating the submodule, commit in its directory first, then commit the linux-repo.



History
-------------------

v1.2.1 (2017-01-05)

* Move old and unused examples to old.
* Update example to pass validation.
* Enforce jshint and jscs with new config files.


v1.2.0 (2016-12-21)

* Starting upgrading to linux version 2.


v1.1.2 (2016-12-21)

* Before linux version 2.


v1.1.1 (2016-10-14)

* Enabled to install latest version of babel as part of course repo.


v1.1.0 (2016-08-17)

* Enabled new test suite on both travis and circle.


v1.0.2 (2016-05-13)

* Adding kmom02/lab1 for preparation.
* Adding example `nodejs/serverDecode`.
* Adding example `nodejs/saveProcessId`.
* Cleaning up .default-dir.
* Adding example for `nodejs/serverWithQueryString`.
* Adding example for `nodejs/child_process`.
* Adding example gomoku.
* Adding example guess-my-number-cli.
* Removed `example/nodejs/kmom04`
* Minor updates to `example/nodejs/maze`.
* Added `me/kmom05/maze`.
* Removed from .jscsrc "requireSpaceBeforePostfixUnaryOperators".


v1.0.1 (2015-08-17)

* Added missing configfile for html-minifier.


v1.0.0 (2015-08-17)

* Started work in january 2015, planned release end of august 2015.



```
 .
..:  Copyright (c) 2015 -2017 Mikael Roos, mos@dbwebb.se
```
