"use strict"

const repl       = require('repl');
const sqlite     = require('sqlite3').verbose();

class Student {
  constructor(firstname, lastname, cohort_id){
    this.firstname = firstname;
    this.lastname  = lastname;
    this.cohort_id = cohort_id;
  }

  // CREATE Data Student
  static createStudent(db, data) {
    let createDataStudent = `INSERT INTO students (firstname, lastname, cohort_id) VALUES ($firstname,$lastname,$cohort_id);`;
      db.serialize(function() {
        db.each(createDataStudent, {
          $firstname : data.firstname,
          $lastname  : data.lastname,
          $cohort_id : data.cohort_id
        },
        function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('CREATE');
        }
      });
    });
  }

  // UPDATE Data Student
  static updateStudent(db, data){
    let updateDataStudent = `UPDATE students SET firstname=$firstname, lastname=$lastname, cohort_id=$cohort_id WHERE id=$id;`;
      db.serialize(function() {
        db.each(updateDataStudent, {
          $firstname : data.firstname,
          $lastname  : data.lastname,
          $id        : data.id,
          $cohort_id : data.cohort_id
        },
        function(err, row) {
        if(err) {
          console.log(err);
        } else {
          console.log('UPDATE');
        }
      });
    });
  }

  // DELETE Data Student
  static deleteStudent(db, id) {
    let deleteDataStudent = `DELETE FROM students WHERE id=$id;`;
      db.serialize(function() {
        db.run(deleteDataStudent, {
          $id : id
        },
        function(err, row) {
        if(err) {
          console.log(err);
        } else {
          console.log(row);
        }
      });
    });
  }

  // FIND ID Data Student
  static findByIdStudent(db, id) {
    let findDataStudent = `SELECT * FROM students WHERE id=$id;`;
      db.serialize(function() {
        db.each(findDataStudent, {
          $id : id
        },
        function(err, row) {
        if(err) {
          console.log(err);
        } else {
          console.log(`${row.id} | ${row.firstname} | ${row.lastname} | ${row.cohort_id}`);
        }
      });
    });
  }

  // FIND ALL Data Student
  static findAllStudent(db, callback) {
    let findDataStudent = `SELECT * FROM students;`;
      db.serialize(function() {
        db.all(findDataStudent, callback)
    });
  }

  // WHERE Data Student
  static whereStudent(db, values, callback) {
    let whereDataStudent = 'SELECT * FROM students WHERE ';
      db.serialize(function() {
        db.all(whereDataStudent + values, callback)
    });
  }
}

export default Student
