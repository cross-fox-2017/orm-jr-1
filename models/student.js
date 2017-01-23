"use strict"

const sqlite = require('sqlite3').verbose();

class Student {
  constructor(firstname,lastname,cohort_id){
    this.firstname = firstname;
    this.lastname = lastname;
    this.cohort_id = cohort_id;
  }

  static create(db, dataStudent){
    let createquery = `INSERT INTO students (firstname, lastname, cohort_id)VALUES('${dataStudent.firstname}','${dataStudent.lastname}','${dataStudent.cohort_id}');`;
    db.serialize(function(){
      db.run(createquery, function(err){
        if(err){console.log(err);
        }else{
          console.log("Create Sucsess!!")
        }
      });
    });
  }

  static update(db, dataStudent){
    let updatequery = `INSERT INTO students (firstname, lastname, cohort_id)VALUES('${dataStudent.firstname}','${dataStudent.lastname}','${dataStudent.cohort_id}');`;
    db.serialize(function(){
      db.run(updatequery, function(err){
        if(err){console.log(err);
        }else{
          console.log("Update Sucsess!!")
        }
      });
    });
  }

  static delete(db, dataStudent){
     let deletequery = `DELETE FROM students WHERE id = ? ;`;
     db.serialize(function(){
       db.run(deletequery, function(err){
         if(err){console.log(err);
         }else{
           console.log("Delete Sucsess!!")
         }
       });
     });
   }

   static findById(db, id){
     let findquery = `SELECT * FROM students WHERE id LIKE '${id}';`;
      db.serialize(function(){
        db.each(findquery, function(err,row){
          if(err){console.log(err);
          }else{
            console.log(`ID : ${row.id}, Name : ${row.firstname}, Lastname : ${row.lastname}`)
          }
        });
      });
    }


   static findAll(db, name){
     let allquery = `SELECT * FROM students;`;
      db.serialize(function(){
        db.all(allquery, name);
      });
    }

    static where(db, val, callback){
      let wherequery = `SELECT * FROM students WHERE `;
       db.serialize(function(){
         db.all(wherequery + val, callback)
       });
     }

}

export default Student

//Student.create(dbModel.connection, new Student("aaa","bbb",1))
//Student.update(dbModel.connection, new Student("aaa","bbb",1))
//Student.delete(dbModel.connection, 1)
//Student.findById(dbModel.connection, 1)

// Student.findAll(dbModel.connection, function (err, data){
//   if(!err){
//     for(var i=0; i<data.length; i++){
//       console.log(data[i]);
//     }
//     } else {
//       console.log('Error!');
//     }
//   })

// Student.where(dbModel.connection, "firstname = 'xxx' ", function(err, data){
//   if(!err){
//     for(var i=0; i<data.length; i++){
//       console.log(data[i]);
//     }
//   }else {
//     console.log('Error!');
//   }
// })
