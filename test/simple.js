import DBModel from "../models/db_model.js";
import Student from "../models/student.js";

var db = new DBModel("./db/test.db")

function testStudentCreate() {
  var mockup = {
    firstname : 'Achmad',
    lastname  : 'Kamil',
    cohort_id : 1
  }

  Student.createStudent(db.connection, new Student(mockup.firstname, mockup.lastname, mockup.cohort_id))
  cek(mockup)
}

function cek(mockup) {
  var query = `SELECT * FROM students WHERE firstname = '${mockup.firstname}' AND lastname = '${mockup.lastname}' AND cohort_id = '${mockup.cohort_id}'`

  db.connection.serialize(function() {
    db.connection.all(query, function(err, students) {
      if(!err && students.length > 0) {
        console.log('test create student : success');
      } else {
        console.log('test student : failed');
      }
    })
  })
}

testStudentCreate()
