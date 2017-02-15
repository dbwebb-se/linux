/**
 * To verify that SQLite is installed and is working.
 * The program creates an in-memory database with one table, inserts
 * some values and does a select on that table.
 */
"use strict";

//var sqlite3 = require("sqlite3");
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(":memory:");

db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
