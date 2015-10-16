#!/bin/env node

var util = require('util');

console.log(util.inspect(process.env, false, null));
