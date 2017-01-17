"use strict"
const sqlite = require("sqlite3").verbose();


class Student {
  constructor(firstname, lastname, telepon, cohort_id, id){
    this.firstname  = firstname;
    this.lastname   = lastname;
    this.telepon    = telepon;
    this.cohort_id  = cohort_id;
    this.id         = id;
  }

  static create(db, dataStudent){
    let insertStudent   = `INSERT INTO students(firstname, lastname, telepon, cohort_id) VALUES ('${dataStudent.firstname}','${dataStudent.lastname}',${dataStudent.telepon},${dataStudent.cohort_id});`
    db.serialize(function(){
      db.run(insertStudent, function(err){
        if(err){console.log(err);
        }else{console.log("SEED INSERT SUCCSESS!!")
        }
      });
    });
  }

  static update(db, dataStudent){
    let updateStudent  = `UPDATE students SET firstname = '${dataStudent.firstname}', lastname = '${dataStudent.lastname}', telepon = '${dataStudent.telepon}', cohort_id = '${dataStudent.cohort_id}' WHERE id = '${dataStudent.id}';`
    db.serialize(function(){
      db.run(updateStudent, function(err){
        if (err) {console.log(err);
        }else{console.log("SEED UPDATE SUCCSESS!!")}
      });
    });
  }

  static delete (db, id){
    let deleteStudent  = `DELETE FROM students WHERE id = ${id};`
    console.log(deleteStudent);
    db.serialize(function(){
      db.run(deleteStudent, function(err){
        if (err) {console.log(err);
        }else{console.log(`SEED DELETE SUCCSESS!! ${id}`)}
      });
    });
  }

  //Driver code untuk test case
  // Student.findAll(dbModel.connection, function(err, data){
  // if(!err){
  // for(var i = 0; i < data.length; i++){
  // console.log(data[i])
  // }
  // }else{
  // console.log(err)
  // }
  // })

  static findAll(db, callBack){
    let viewStudent = "SELECT * FROM students";
    db.serialize(function(){
      db.all(viewStudent, callBack)
    });
  }

//Driver code untuk test case
  // Student.where(dbModel.connection, "firstname = 'Eri'", function(err, data){
  // if(!err){
  // for(var i = 0; i < data.length; i++){
  // console.log(data[i])
  // }
  // }else{
  // console.log(err)
  // }
  // })

  static where(db, val, callBack){
   let whereStudent = "SELECT * FROM students WHERE ";
   db.serialize(function(){
     db.all(whereStudent + val, callBack)
   });
 }
}

export default Student
