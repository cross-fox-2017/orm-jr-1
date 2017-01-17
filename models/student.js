"use strict"

class Student {

    constructor(firstname,lastname,cohort_id,id){
      this.firstname = firstname,
      this.lastname = lastname,
      this.cohort_id = cohort_id,
      this.id = id,
      this.is_deleted = 0
    }


    static create(con,data){

        let db = con

        let QUERY = "INSERT INTO students (cohort_id,firstname,lastname,is_deleted) VALUES ($cohort_id,$firstname,$lastname,$is_deleted);";

        db.serialize(function(){
          db.all(QUERY,{

            $firstname: data.firstname,
            $lastname: data.lastname,
            $cohort_id: data.cohort_id,
            $is_deleted: data.is_deleted

          },function(err,result){
            if(err){
              console.log(err);
            }else{
              console.log("DATA INPUT SUCCESS");
            }
          });
        });
    }

    static update(con,data){

      let db = con

      let QUERY = "UPDATE students SET firstname = $firstname,lastname = $lastname,cohort_id = $cohort_id WHERE id = $id;";


      db.serialize(function(){

        db.all(QUERY,{

          $firstname: data.firstname,
          $lastname: data.lastname,
          $id: data.id,
          $cohort_id: data.cohort_id

        },function(err,result){
          if(err){
            console.log(err);
          }else{
            console.log("DATA UPDATED !");
          }
        });
      });

    }

    static delete(con,data){

      let db = con

      let QUERY = "UPDATE students SET is_deleted = 1 WHERE id = $id;";

      db.serialize(function(){
        db.all(QUERY,{

          $id: data

        },function(err,result){
          if(err){
            console.log(err);
          }else{
            console.log("DATA DELETED !");
          }
        });
      });

    }

    static findAll(con,callback){

      let db = con

      let QUERY = "SELECT * FROM students WHERE is_deleted = 0;";

      db.serialize(function(){
        db.all(QUERY,function(err,result){
          if(err){

            callback(null,err)

          }else{

            callback(result,null)
          }
        });
      });

    }

    static show(con){

      let db = con

      let QUERY = "SELECT * FROM students WHERE is_deleted = 0;";

      db.serialize(function(){
        db.all(QUERY,function(err,result){
          if(err){
            console.log(err);
          }else{

              console.log("DATA STUDENT\n");
              console.log("ID\t\t|FirstName\t|LastName\t|GROUP_ID");
            for(let j = 0; j < result.length;j++){

                console.log(`${result[j].id}|${result[j].firstname}\t|${result[j].lastname}\t|${result[j].cohort_id}`);
            }
          }
        });
      });

    }

    static findById(con,data){

      let db = con

      let QUERY = "SELECT * FROM students WHERE is_deleted = 0;";

      db.serialize(function(){
        db.all(QUERY,function(err,result){
          if(err){
            console.log(err);
          }else{
              console.log("DATA STUDENT\n");
              console.log("ID\t\t|FirstName\t|LastName\t|GROUP_ID");
            for(let j = 0; j < result.length;j++){

                console.log(`${result[j].id}\t\t|${result[j].firstname}\t|${result[j].lastname}\t|${result[j].cohort_id}`);
            }
          }
        });
      });

    }

    static where(con,str,callback){

      let db = con

      let result = str.split(" ")

      let QUERY = "SELECT * FROM students WHERE $key = %$value%;";

      db.serialize(function(){
        db.all(QUERY,{

              $key: result[0],
              $value: result[2]

        },function(err,result){
          if(err){

            callback(null,err)

          }else{

            callback(result,null)
          }
        });
      });




    }

}

export default Student
