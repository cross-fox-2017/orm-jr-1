"use strict"

let ADD_DATA = "INSERT INTO students (firstname, lastname, cohort_id) VALUES (?,?,?)"
let EDIT_DATA = "UPDATE students SET firstname = ?, lastname = ?, cohort_id = ? WHERE id=?"
let DELETE_DATA = "DELETE FROM students WHERE id=?"
let FIND_DATA = "SELECT * FROM students WHERE id=?"
let FIND_ALL = "SELECT * FROM students"
let WHERE = "SELECT * FROM students WHERE "


class Student {
  constructor(firstname, lastname, cohort_id, id){
    this.firstname = firstname
    this.lastname = lastname
    this.cohort_id = cohort_id
    this.id = id
  }

  static create(connection, newStudent) {
    let db = connection;
    db.serialize(function() {
      db.run(ADD_DATA, newStudent.firstname, newStudent.lastname, newStudent.cohort_id, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('ADD STUDENT');
        }
      })
    })
  }

  static update(connection, newStudent) {
    let db = connection;
    db.serialize(function() {
      db.run(EDIT_DATA, newStudent.firstname, newStudent.lastname, newStudent.cohort_id, newStudent.id, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('EDIT STUDENT');
        }
      })
    })
  }

  static delete(connection, id) {
    let db = connection;
    db.serialize(function() {
      db.run(DELETE_DATA, id, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('DELETE STUDENT');
        }
      })
    })
  }

  static findById(connection, id) {
    let db = connection;
    db.serialize(function() {
      db.each(FIND_DATA, id, function(err,row) {
        if (err) {
          console.log(err);
        } else {
          console.log(row);
        }
      })
    })
  }

  // Student.findAll(dbModel.connection, function(err,data) {
  //   if(!err) {
  //     for (var i = 0; i < data.length; i++) {
  //       console.log(data[i])
  //     }
  //   } else {
  //     console.log('Error')
  //   }
  // })

  static findAll(connection, cb) {
    let db = connection;
    db.serialize(function() {
      db.all(FIND_ALL, cb)
    })
  }

  // Student.where(dbModel.connection, "firstname = 'Windiana' ", function(err, data) {
  //   if(!err){
  //     for (var i = 0; i < data.length; i++) {
  //       console.log(data[i]);
  //     }
  //   } else{
  //     console.log(err);
  //   }
  // });

  static where(connection, val, cb) {
    let db = connection;
    db.serialize(function() {
      db.all(WHERE + val, cb)
    })
  }
}

export default Student
