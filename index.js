"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";
const repl = require("repl");


var db = new DBModel("./db/student.db")

var p = process.argv[2]

if(p == "playtime") {
	var rpl = repl.start('> ')
	rpl.context.dbModel = db
	rpl.context.Student = Student
}


