"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

// help(){
//   console.log('SHOW ALL STUDENTS....................: show()');
//   console.log('FIND STUDENT BY NAME (FIRST OR LAST).: findByName()');
//   console.log('ADD NEW STUDENT......................: insert(\'firstname\', \'lastname\', \'telepon\')');
//   console.log('REMOVE STUDENT.......................: delete(id)  ');
//   console.log('UPDATE STUDENT\'s DETAIL..............: update(\'firstname\', \'lastname\', \'telepon\', \'id\')  ');
//   console.log('GET BIRTHDAY BY THIS MONTH...........: getBirthdayByThisMonth() ')
//   console.log('SORT BIRTHDAY BY MONTH...............: sortBirthday()');
// }

const repl  = require("repl");
var db      = new DBModel("./db/student.db")
var argv    = process.argv[2]

if(argv == "playtime"){
  var replStart  = repl.start('> ')
  replStart.context.dbModel = db
  replStart.context.Student = Student
  replStart.context.Cohort  = Cohort
  // replStart.context.help    = help
}
