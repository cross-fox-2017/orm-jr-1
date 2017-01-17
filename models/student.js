"use strict"

class Student {
  constructor(firstname, lastname, cohort_id, id) {
    this.firstname = firstname
    this.lastname = lastname
    this.cohort_id = cohort_id
    this.id = id
  }

  static create(connection, input){
    let db = connection
    let add = `INSERT INTO students (firstname, lastname, cohort_id) VALUES ('${input.firstname}','${input.lastname}','${input.cohort_id}');`
    db.serialize(function() {
      db.run(add, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('new student has been created');
        }
      })
    })
 }

 static update(connection, input){
   let db = connection
   let update = `UPDATE students SET firstname = '${input.firstname}', lastname = '${input.lastname}', cohort_id = '${input.cohort_id}' WHERE id = '${input.id}';`
   db.serialize(function() {
     db.run(update, function (err) {
       if (err) {
         console.log(err);
       }
       else {
         console.log('student has been updated');
       }
     })
   })
 }

 static delete(connection, input){
   let db = connection
   let remove =`DELETE FROM students WHERE id = '${input}';`;
   db.serialize(function() {
     db.run(remove, function (err) {
       if (err) {
         console.log(err);
       }
       else {
         console.log('student has been removed');
       }
     })
   })
 }

 static findById(connection, id){
   let db = connection
  let find = `SELECT * FROM students WHERE id LIKE '${id}';`;
   db.serialize(function() {
     db.each(find, function (err,row) {
       if (err) {
         console.log(err);
       }
       else {
         console.log(`student found : \n\nID : ${row.id}\nFirst Name : ${row.firstname}\nLastName : ${row.lastname}\nCohort ID : ${row.cohort_id}`);
       }
     })
   })
 }

 static findAll(connection, cb){
   let db = connection
   let find_all = "SELECT * FROM students"
   db.serialize(function() {
     db.all(find_all, cb)
   })
 }

 static where(connection, val, cb){
   let db = connection
   let where = `SELECT * FROM students WHERE `
   db.serialize(function() {
     db.all(where + val, cb)
     console.log(where);
   })
 }

//   static update(connection, input){
//     let db = connection
//     let add = `INSERT INTO students (firstname, lastname, cohort_id) VALUES ('${this.firstname}',`${this.lastname}`,`${this.cohort_id}`);`
//     console.log(this.firstname);
//     db.serialize(function() {
//       db.run(add, function (err) {
//         if (err) {
//           console.log(err);
//         }
//         else {
//           console.log('new student has been created');
//         }
//       })
//     })
//  }
//
//  static delete(connection, input){
//    let db = connection
//    let add = "INSERT INTO students (firstname, lastname, cohort_id) VALUES (`'${this.firstname}'`,`'${this.lastname}'`,`'${this.cohort_id}'`);"
//    console.log(this.firstname);
//    db.serialize(function() {
//      db.run(add, function (err) {
//        if (err) {
//          console.log(err);
//        }
//        else {
//          console.log('new student has been created');
//        }
//      })
//    })
// }

}

export default Student
