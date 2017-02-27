#!/usr/bin/env node

"use strict";

const path = require("path");
const readline = require("readline");
const cli = require("./cli")
const menu = require("./menu")



// Get incoming cli options and arguments
var optarg = cli.checkOptionsArguments();

console.log("Starting up I am thinking of a number between...");
menu.mainloop(optarg);
