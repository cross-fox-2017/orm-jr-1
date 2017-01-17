"use strict"

const sqlite = require('sqlite3').verbose();

var CREATE_COHORTS  = "CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);"
var CREATE_STUDENTS = "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT, cohort_id INTEGER);"

class DBModel {
  constructor(file){
    this.connection = new sqlite.Database(file)
  }

  setup(){
    let db = this.connection;

    let createTableStudents = () => {
      //RUN SQL one at a time
      db.serialize(function(){
        //CREATE TABLE
        db.run(CREATE_STUDENTS, function(err){
          if(err) {
            console.log(err);
          } else {
            console.log('CREATE STUDENTS succes!');
          }
        });
      });
    }

    let createTableCohorts = () => {
      //RUN SQL one at a time
      db.serialize(function(){
        //CREATE TABLE
        db.run(CREATE_COHORTS, function(err){
          if(err) {
            console.log(err);
          } else {
            console.log('CREATE COHORTS succes!');
          }
        });
      });
    }

    createTableStudents()
    createTableCohorts()
  }
}

export default DBModel
