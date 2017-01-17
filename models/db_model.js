"use strict"
const sqlite = require("sqlite3").verbose()
const CREATE_STUDENT = "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, email TEXT, is_deleted, cohort_id INTEGER, FOREIGN KEY (cohort_id) REFERENCES cohorts (id));";
const CREATE_COHORT  = "CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT, group_name TEXT);";
class DBModel {

    constructor(file){

        this.connection = new sqlite.Database(file)

    }


   setup(){

      let db = this.connection

      db.serialize(function() {
        db.run(CREATE_COHORT,function(err){
          if(err){
            console.log(err);
          }else{
            console.log("TABLE COHORT CREATED");
          }
        });

      });


      db.serialize(function() {
        db.run(CREATE_STUDENT,function(err){
          if(err){
            console.log(err);
          }else{
            console.log("TABLE STUDENT CREATED");
          }
        });

      });


    }

}

export default DBModel
