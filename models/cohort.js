"use strict"

import Student from "./student.js";

class Cohort {

  constructor(group_name,id){
    this.group_name = group_name,
    this.id = id,
    this.is_deleted = 0
  }

  static create(con,data){

      let db = con

      let QUERY = "INSERT INTO cohorts (group_name,is_deleted) VALUES ($groupname,$is_deleted);";

      db.serialize(function(){
        db.all(QUERY,{

          $groupname: data.group_name,
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

    let QUERY = "UPDATE cohorts SET group_name = $groupname WHERE id = $id;";


    db.serialize(function(){

      db.all(QUERY,{

        $groupname: data.group_name,
        $id: data.id


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

    let QUERY = "UPDATE cohorts SET is_deleted = 1 WHERE id = $id;";

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

    let QUERY = "SELECT * FROM cohorts WHERE is_deleted = 0;";

    db.serialize(function(){
      db.all(QUERY,callback)
    });

  }

  static show(con){

    let db = con

    let QUERY = "SELECT * FROM cohorts WHERE is_deleted = 0;";

    db.serialize(function(){
      db.all(QUERY,function(err,result){
        if(err){
          console.log(err);
        }else{

            console.log("DATA GROUP\n");
            console.log("ID\t\t|GroupName\n");
          for(let j = 0; j < result.length;j++){

              console.log(`${result[j].id}\t\t|${result[j].group_name}`);
          }
        }
      });
    });

  }

  static findById(con,data){

    let db = con

    let QUERY = "SELECT * FROM cohorts WHERE id = $id;";

    db.serialize(function(){
      db.all(QUERY,{

            $id: data

      },function(err,result){
        if(err){
          console.log(err);
        }else{
            console.log("DATA GROUP\n");
            console.log("ID\t\t|GroupName\n");
          for(let j = 0; j < result.length;j++){

              console.log(`${result[j].id}\t\t|${result[j].group_name}`);
          }
        }
      });
    });

  }

  static where(con,str,callback){

    let db = con

    let QUERY = "SELECT * FROM cohorts WHERE ";

    db.serialize(function(){
      db.all(QUERY+str,callback)
    });


  }

}

export default Cohort
