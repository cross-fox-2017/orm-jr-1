"use strict"

import DBModel from "./db_model.js";

class Student {
  constructor(firstname, lastname, cohort_id, id) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.cohort_id = cohort_id;
  }

  static create(db, student) {
    let add = `INSERT INTO students (firstname, lastname, cohort_id) VALUES ('${student.firstname}', '${student.lastname}', '${student.cohort_id}');`;
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

  static update (db, student) {
    let update = `UPDATE students SET firstname = '${student.firstname}', lastname = '${student.lastname}', cohort_id = '${student.cohort_id}' WHERE id = ${student.id};`;
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
    let deleteData = `DELETE FROM students WHERE id = ${id};`;
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
    let show = `SELECT * FROM students WHERE id = ${id};`;
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
    let show = `SELECT students.*, cohorts.name FROM students LEFT JOIN cohorts ON students.cohort_id = cohorts.id`;
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
    let show = `SELECT * FROM students WHERE ${value};`;
    db.serialize(function () {
      db.all(show, function (err, row) { // urutannya: query, ${} atau ? ?, callbacknya
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
    let show = `create(db, student)\nupdate(db, student)\ndelete(db, id)\nfindByID(db, id)\nfindAll(db, callback)\nwhere(db, value, callback) <value: "attribute = 'value' >"\nhelp()`;
    console.log(show);
  }
}

export default Student


/*
Student.findAll(dbModel.connection, {limit: 2, offset: 1}, function (data, err) {
  if (!err) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    else {
      console.log('Error');
    }
  }
})
*/
