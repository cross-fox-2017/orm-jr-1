"use strict"

class Student {
  create(connection, param){

  }
  update(connection, param){

  }
  delete(connection, id){

  }
  findById(connection, id){

  }
  findAll(connection, this.callback){

  }
  where(connection, param, this.callback){

  }
  callback(data, err){
    if(!err){
      for (let i = 0; i < data.length; i++){
        console.log(data[i]);
      }
    } else {
      console.log('Error');
    }
  }
}

export default Student
