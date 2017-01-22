"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name, year,id){
    this.name   = name;
    this.year   = year;
    this.id     = id;
  }

  static create(db, dataCohort){
    let insertCohort  = `INSERT INTO cohorts(name, year) VALUES ('${dataCohort.name}',${dataCohort.year});`
    db.serialize(function(){
      db.run(insertCohort, function(err){
        if(err){console.log(err);
        }else{console.log("SEED INSERT SUCCSESS!!")
        }
      });
    });
  }

  static update(db, dataCohort){
    let updateCohort  = `UPDATE cohorts SET name = '${dataCohort.name}', year = ${dataCohort.year} WHERE id = '${dataCohort.id}';`
    db.serialize(function(){
      db.run(updateCohort, function(err){
        if (err) {console.log(err);
        }else{console.log("SEED UPDATE SUCCSESS!!")}
      });
    });
  }

  static delete (db, id){
    let deleteCohort  = `DELETE FROM cohorts WHERE id = ${id};`
    db.serialize(function(){
      db.run(deleteCohort, function(err){
        if (err) {console.log(err);
        }else{console.log(`SEED DELETE SUCCSESS!! ${id}`)}
      });
    });
  }


  // Cohort.findAll(dbModel.connection, function(err, data){
  //   if(!err){
  //     for(var i = 0; i < data.length; i++){
  //       console.log(data[i])
  //     }
  //   }else{
  //     console.log(err)
  //   }
  // })

  static findAll(db, callBack){
    let viewCohort = "SELECT * FROM cohorts";
    db.serialize(function(){
      db.all(viewCohort, callBack)
    });
  }

  //Cohort.findById(dbModel.connection, id)
  static findById(connection, id){
   let db = connection
  let find = `SELECT * FROM cohorts WHERE id LIKE '${id}';`;
   db.serialize(function() {
     db.each(find, function (err,row) {
       if (err) {
         console.log(err);
       }
       else {
         console.log(row);
       }
     })
   })
 }

  // Cohort.where(dbModel.connection, "name = 'ke 3'", function(err, data){
  //   if(!err){
  //     for(var i = 0; i < data.length; i++){
  //       console.log(data[i])
  //     }
  //   }else{
  //     console.log(err)
  //   }
  // })

  static where(db, val, callBack){
   let whereCohort = "SELECT * FROM cohorts WHERE ";
   db.serialize(function(){
     db.all(whereCohort + val, callBack)
   });
 }
}

export default Cohort
