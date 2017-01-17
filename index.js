"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";


const db = new DBModel("./db/student.db")
const repl = require("repl")

var p = process.argv[2]


function help(){

    console.log("dbModel - 'Checking Connection'\ndbModel.setup() - 'Configuration Table'");
}

if(p === "playtime"){


    var r = repl.start("> ")
    r.context.dbModel = db
    r.context.Help = help
    r.context.Student = Student
    // r.context.Student = student

}

// Student.findAll(dbModel.connection,function(data,err){
//
//       if(!err){
//         for(var i = 0;i <data.length;i++){
//           console.log(data[i]);
//         }
//       }else{
//         console.log("Error");
//       }
//
// })
//
// Student.where(dbModel.connection,"firstname = 'windi'",function(data,err){
//
//       if(!err){
//         for(var i = 0;i <data.length;i++){
//           console.log(data[i]);
//         }
//       }else{
//         console.log("Error");
//       }
//
// })
