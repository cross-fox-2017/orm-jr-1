"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require("repl")
const sqlite = require('sqlite3').verbose();

var db = new DBModel("./db/students.db")
db.setup()
var p = process.argv[2]

if (p == 'playtime') {
  var r = repl.start('> ')
  r.context.dbModel = db
  r.context.Student = Student
  r.context.Cohort = Cohort
}
