import DBModel from "../models/db_model.js";
import Student from "../models/student.js";

var db = new DBModel("./db/test.db")


function Testing(){

    var mockup = {
        firstname: "Iqbal",
        lastname: "CUTE",
        cohort_id:2
    }

    Student.create(db.connection, new Student(mockup.firstname,mockup.lastname,mockup.cohort_id))
    cek(mockup)


}


function cek(mockup){

    let QUERY = `SELECT * FROM students
                  WHERE firstname = '${mockup.firstname}' AND lastname = '${mockup.lastname}' AND cohort_id = ${mockup.cohort_id}`


    db.connection.serialize(function(){

          db.connection.all(QUERY, function(err,results){

              if(!err && results.length > 0)
              {
                  console.log(`Test Create Student : Success`);
              } else {
                console.log(`Test Create Student : Fail`);
              }


          })
    })

}

db.setup()
Testing()
