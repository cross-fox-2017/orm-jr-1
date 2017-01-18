"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name, id) {
    this.id = id;
    this.name = name;
  }

  static create(db, cohort) {
    let add = `INSERT INTO cohorts (name) VALUES ('${cohort.name}');`;
    db.serialize(function () {
      db.run(add, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(add);
        }
      });
    });
  }

  static update (db, cohort) {
    let update = `UPDATE cohorts SET name = '${cohort.name}';`;
    db.serialize(function () {
      db.run(update, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(update);
        }
      });
    });
  }

  static delete (db, id) {
    let deleteData = `DELETE FROM cohorts WHERE id = ${id};`;
    db.serialize(function () {
      db.run(deleteData, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(deleteData);
        }
      });
    });
  }

  static findByID (db, id) {
    let show = `SELECT * FROM cohorts WHERE id = ${id};`;
    db.serialize(function () {
      db.each(show, function (err, row) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(row);
        }
      });
    });
  }

  static findAll (db, callback) {
    let show = `SELECT cohorts.*, students.firstname, students.lastname, students.cohort_id FROM cohorts LEFT JOIN students ON students.cohort_id = cohorts.id`;
    db.serialize(function () {
      db.all(show, function (err, row) {
        if (err) {
          callback(null,err);
        }
        else {
          callback(row); // penulisannya function (data,err) jadi -> callback(row)
        }
      });
    });
  }

  static where (db, value, callback) {
    let show = `SELECT * FROM cohorts WHERE ${value};`;
    db.serialize(function () {
      db.all(show, function (err, row) {
        if (err) {
          callback(null,err);
        }
        else {
          callback(row);
        }
      });
    });
  }

  static help () {
    let show = `create(db, cohort)\nupdate(db, cohort)\ndelete(db, id)\nfindByID(db, id)\nfindAll(db, callback)\nwhere(db, value, callback) <value: "attribute = 'value' >"\nhelp()`;
    console.log(show);
  }

}

export default Cohort
