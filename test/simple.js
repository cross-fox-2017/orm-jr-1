import DBModel from "../models/db_model.js";
import Student from "../models/student.js";

var db = new DBModel("../db/test.db")

function tesStudentCreate(){
  var tes ={
    firstname: 'heylo',
    lastname: 'ceylo',
    cohort_id : 1
  }

  Student.create(db.connection, new Student(tes.firstname,tes.lastname,tes.cohort_id))
  cek(tes)
}

function tesStudentUpdate(){
  var tesi ={
    id : 5,
    firstname: 'caylo',
    lastname: 'cewlo',
    cohort_id : 2
  }

  Student.update(db.connection, new Student(tesi.firstname,tesi.lastname,tesi.cohort_id,tesi.id))
  cek(tesi)
}

function cek(tes){
  var query= `SELECT * FROM students
              WHERE firstname ='${tes.firstname}' AND lastname='${tes.lastname}'
              AND cohort_id = '${tes.cohort_id}'`

  db.connection.serialize(function(){
    db.connection.all(query,function(err,students){
      if(!err && students.length>0){
        console.log('tes create/update student: sucess')
      }
      else{
        console.log('tes gagal');
      }
    })
  })

}

tesStudentCreate();
tesStudentUpdate();
