#!/bin/env node

console.log(process.env.EDITOR);


if ('EDITOR1' in process.env) {
    console.log("EDITOR1='" + process.env.EDITOR1 + "'");
}
else {
    console.log("EDITOR1 is not set.");
}
