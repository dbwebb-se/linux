/**
 * Two ways of using SQL DML.
 */
"use strict";

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("db.sqlite");

db.serialize(() => {
    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });

    db.all("SELECT rowid AS id, info FROM lorem", (err, rows) => {
        console.log(rows);
    });
});

db.close();
