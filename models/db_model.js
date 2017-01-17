"use strict"

const repl               = require('repl');
const sqlite             = require('sqlite3').verbose();
let CREATE_TABLE_STUDENT = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT NOT NULL, cohort_id INTEGER, FOREIGN KEY (cohort_id) REFERENCES cohorts (id) );";
let CREATE_TABLE_COHORT  = "CREATE TABLE IF NOT EXISTS cohorts  ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);";

class DBModel {
  constructor(file) {
    this.connection = new sqlite.Database(file)
  }

  setup() {

    // TABLE DATA Student
    let db = this.connection;
    let createTableStudent = () => {
      db.serialize(function() {
        db.run(CREATE_TABLE_STUDENT, function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log('Create Table Student Success');
          }
        });
      });
    }

    // TABLE DATA Cohort
    let createTableCohort = () => {
      db.serialize(function() {
        db.run(CREATE_TABLE_COHORT, function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log('Create Table Cohort Success');
          }
        });
      });
    }

    createTableStudent();
    createTableCohort();
  }
}

export default DBModel
