"use strict"

const repl       = require('repl');
const sqlite     = require('sqlite3').verbose();

class Cohort {
  constructor(name, id){
    this.name = name;
    this.id   = id;
  }

  // CREATE Data Cohort
  static createCohort(db, data) {
    let createDataCohort = `INSERT INTO cohorts (name, id) VALUES ($name,$id);`;
      db.serialize(function() {
        db.each(createDataCohort, {
          $name : data.name,
          $id   : data.id
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

  // UPDATE Data Cohort
  static updateCohort(db, data){
    let updateDataCohort = `UPDATE cohorts SET name=$name WHERE id=$id;`;
      db.serialize(function() {
        db.each(updateDataCohort, {
          $name : data.name,
          $id   : data.id,
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

  // DELETE Data Cohort
  static deleteCohort(db, id) {
    let deleteDataCohort = `DELETE FROM students WHERE id=$id;`;
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

  // FIND ID Data Cohort
  static findByIdCohort(db, id) {
    let findDataCohort = `SELECT * FROM cohorts WHERE id=$id;`;
      db.serialize(function() {
        db.each(findDataCohort, {
          $id : id
        },
        function(err, row) {
        if(err) {
          console.log(err);
        } else {
          console.log(`${row.id} | ${row.name}`);
        }
      });
    });
  }

  // FIND ALL Data Cohort
  static findAllCohort(db, callback) {
    let findDataCohort = `SELECT * FROM cohorts;`;
      db.serialize(function() {
        db.all(findDataCohort, callback)
    });
  }

  // WHERE Data Cohort
  static whereCohort(db, values, callback) {
    let whereDataCohort = 'SELECT * FROM cohorts WHERE ';
      db.serialize(function() {
        db.all(whereDataCohort + values, callback)
    });
  }
}

export default Cohort
