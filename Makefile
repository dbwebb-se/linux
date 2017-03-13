#!/usr/bin/env make -f
#
# Makefile for course repos
#

# ---------------------------------------------------------------------------
#
# General setup
#

# Detect OS
OS = $(shell uname -s)

# Defaults
ECHO = echo

# Make adjustments based on OS
ifneq (, $(findstring CYGWIN, $(OS)))
	ECHO = /bin/echo -e
endif

# Colors and helptext
NO_COLOR	= \033[0m
ACTION		= \033[32;01m
OK_COLOR	= \033[32;01m
ERROR_COLOR	= \033[31;01m
WARN_COLOR	= \033[33;01m

# Which makefile am I in?
WHERE-AM-I = $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_MAKEFILE := $(call WHERE-AM-I)

# Echo some nice helptext based on the target comment
HELPTEXT = $(ECHO) "$(ACTION)--->" `egrep "^\# target: $(1) " $(THIS_MAKEFILE) | sed "s/\# target: $(1)[ ]*-[ ]* / /g"` "$(NO_COLOR)"

# target: help                    - Displays help with targets available.
.PHONY:  help
help:
	@$(call HELPTEXT,$@)
	@echo "Usage:"
	@echo " make [target] ..."
	@echo "target:"
	@egrep "^# target:" Makefile | sed 's/# target: / /g'



# ---------------------------------------------------------------------------
#
# Specifics
# 

# Add local bin path for test tools
PATH_ORIG = $(PATH)
PATH := "$(PWD)/bin:$(PWD)/vendor/bin:$(PWD)/node_modules/.bin:$(PATH)"



# ----------------------------------------------------------------------------
# 
# Highlevel targets 
#
# target: prepare                 - Prepare the build directory.
.PHONY: prepare
prepare:
	@$(call HELPTEXT,$@)
	install -d build
	install -d bin/pip



# target: install                 - Install needed utilities locally.
.PHONY: install
install: prepare dbwebb-validate-install dbwebb-inspect-install dbwebb-install npm-install composer-install
	@$(call HELPTEXT,$@)



# target: check                   - Check installed utilities.
.PHONY: check
check: dbwebb-validate-check
	@$(call HELPTEXT,$@)



# target: test                    - Install test tools & run tests.
.PHONY: test
test: check dbwebb-validate-run dbwebb-testrepo
	@$(call HELPTEXT,$@)



# target: clean                   - Remove all generated files.
.PHONY:  clean
clean:
	@$(call HELPTEXT,$@)
	rm -rf build
	rm -f npm-debug.log



# target: clean-me                - Remove me-directory.
.PHONY:  clean-me
clean-me:
	@$(call HELPTEXT,$@)
	rm -rf me



# target: clean-all               - Remove all installed files.
.PHONY:  clean-all
clean-all: clean
	@$(call HELPTEXT,$@)
	rm -rf bin
	rm -rf node_modules
	rm -rf vendor



# ----------------------------------------------------------------------------
# 
# dbwebb cli 
#
# target: dbwebb-install          - Download and install dbwebb-cli.
.PHONY: dbwebb-install
dbwebb-install: prepare
	@$(call HELPTEXT,$@)
	wget --quiet -O bin/dbwebb https://raw.githubusercontent.com/mosbth/dbwebb-cli/master/dbwebb2
	chmod 755 bin/dbwebb
	bin/dbwebb config create noinput
	bin/dbwebb --version



# target: dbwebb-testrepo         - Test course repo.
.PHONY: dbwebb-testrepo
dbwebb-testrepo: dbwebb-install
	@$(call HELPTEXT,$@)
	env PATH=$(PATH) bin/dbwebb --silent --local testrepo



# ----------------------------------------------------------------------------
# 
# dbwebb validate 
#
# target: dbwebb-validate-install - Download and install dbwebb-validate.
.PHONY: dbwebb-validate-install
dbwebb-validate-install: prepare
	@$(call HELPTEXT,$@)
	wget --quiet -O bin/dbwebb-validate https://raw.githubusercontent.com/mosbth/dbwebb-cli/master/dbwebb2-validate
	chmod 755 bin/dbwebb-validate
	bin/dbwebb-validate --version



# target: dbwebb-validate-check   - Check version and environment for dbwebb-validate.
.PHONY: dbwebb-validate-check
dbwebb-validate-check:
	@$(call HELPTEXT,$@)
	env PATH=$(PATH) bin/dbwebb-validate --check



# target: dbwebb-validate-run     - Run tests with dbwebb-validate.
.PHONY: dbwebb-validate-run
dbwebb-validate-run:
	@$(call HELPTEXT,$@)
	env PATH=$(PATH) bin/dbwebb-validate --publish --publish-to build/webroot/ example



# target: dbwebb-validate         - Execute dbwebb validate with what=part-to-validate.
.PHONY: dbwebb-validate
dbwebb-validate:
	@$(call HELPTEXT,$@)
	env PATH=$(PATH) bin/dbwebb-validate --publish --publish-to build/webroot/ $(what) $(arg1)



# ----------------------------------------------------------------------------
# 
# dbwebb inspect 
#
# target: dbwebb-inspect-install  - Download and install dbwebb-inspect.
.PHONY: dbwebb-inspect-install
dbwebb-inspect-install: prepare
	@$(call HELPTEXT,$@)
	wget --quiet -O bin/dbwebb-inspect https://raw.githubusercontent.com/mosbth/dbwebb-cli/master/dbwebb2-inspect
	chmod 755 bin/dbwebb-inspect
	bin/dbwebb-inspect --version



# target: dbwebb-inspect-check    - Check version and environment for dbwebb-inspect.
.PHONY: dbwebb-inspect-check
dbwebb-inspect-check:
	@$(call HELPTEXT,$@)
	bin/dbwebb-inspect --version



# target: dbwebb-inspect          - Run tests with dbwebb-inspect where kmom=kmom01.
.PHONY: dbwebb-inspect
dbwebb-inspect:
	@$(call HELPTEXT,$@)
	env PATH=$(PATH) bin/dbwebb-inspect . $(kmom)



# ----------------------------------------------------------------------------
# 
# npm
#
# target: npm-install             - Install npm packages for development.
.PHONY: npm-install
npm-install: prepare
	@$(call HELPTEXT,$@)
	if [ -f package.json ]; then npm install --only=dev; fi



# target: npm-update              - Update npm packages for development.
.PHONY: npm-update
npm-update:
	@$(call HELPTEXT,$@)
	if [ -f package.json ]; then npm update --only=dev; fi



# ----------------------------------------------------------------------------
# 
# composer 
#
# target: composer-install        - Install composer packages for development.
.PHONY: composer-install
composer-install: prepare
	@$(call HELPTEXT,$@)
	if [ -f composer.json ]; then composer install; fi



# target: composer-update         - Update composer packages for development.
.PHONY: composer-update
composer-update:
	@$(call HELPTEXT,$@)
	if [ -f composer.json ]; composer update; fi
