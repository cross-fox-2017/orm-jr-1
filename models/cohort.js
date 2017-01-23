"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name, id){
    this.name = name;
    this.id   = id;
  }

  // CREATE Data Cohort
  static create(db, data) {
    let createDataCohort = `INSERT INTO cohorts (name, id) VALUES ($name, $id);`;
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
  static update(db, data){
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
  static delete(db, id) {
    let deleteDataCohort = `DELETE FROM students WHERE id=$id;`;
      db.serialize(function() {
        db.run(deleteDataStudent, {
          $id : id
        },
        function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('DELETE');
        }
      });
    });
  }

  // FIND ID Data Cohort
  static findById(db, id) {
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
  static findAll(db, callback) {
    let findDataCohort = `SELECT * FROM cohorts;`;
      db.serialize(function() {
        db.all(findDataCohort, function(err, row) {
          if(err) {
            callback(err)
          } else {
            callback(row)
          }
        });
    });
  }

  // WHERE Data Cohort
  static where(db, values, callback) {
    let whereDataCohort = 'SELECT * FROM cohorts WHERE ${values};';
      db.serialize(function() {
        db.all(whereDataCohort, function(err, row) {
          if(err) {
            callback(err)
          } else {
            callback(row)
          }
        });
    });
  }
}

export default Cohort
