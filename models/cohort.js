"use strict"

import Student from "./student.js";

class Cohort {
  constructor(cohortname, id) {
    this.cohortname = cohortname,
    this.id = id
  }

  static create(connection, data){
    let CREATE_COHORT = `INSERT INTO cohort (cohortname) VALUES ('${data.cohortname}');`

    connection.serialize(function() {
        connection.run(CREATE_COHORT, function(err) {
          if(err) {
              console.log(err)
          } else {
            console.log('.:: SUCCESS CREATE DATA COHORT ::.')
          }
      })
    })
  }

  static update(connection, data){
    let UPDATE_COHORT = `UPDATE cohort SET cohortname = '${data.cohortname}' WHERE id = '${data.id}';`

    connection.serialize(function() {
        connection.run(UPDATE_COHORT, function(err) {
          if(err) {
              console.log(err)
          } else {
            console.log('.:: SUCCESS UPDATE DATA COHORT ::.')
          }
      })
    })
  }

  static delete(connection, id){
    let DELETE_COHORT = `DELETE FROM cohort WHERE id = ${id};`

    connection.serialize(function() {
        connection.run(DELETE_COHORT, function(err) {
          if(err) {
              console.log(err)
          } else {
            console.log('.:: SUCCESS DELETE DATA COHORT ::.')
          }
      })
    })
  }

  static findById(connection, id){
    let FIND_ID_COHORT = `SELECT * FROM cohort WHERE id = ${id};`

    connection.serialize(function() {
        connection.all(FIND_ID_COHORT, function(err, rows) {
          if(err) {
              console.log(err)
          } else {
            console.log(`TABLE COHORT\n_________________\n`)
            console.log("ID|\t\tName|")
            for(let i = 0;i < rows.length;i++){
              console.log(rows[i].id+"\t\t"+rows[i].cohortname)
            }
         }
      })
    })
  }

  static findAll(connection, cb){
    let FIND_ALL_COHORT = `SELECT * FROM cohort;`

    connection.serialize(function() {
        connection.all(FIND_ALL_COHORT, cb)
    })
  }

  static where(connection, value, cb){
    let WHERE_COHORT = `SELECT * FROM cohort WHERE ${value};`

    connection.serialize(function() {
        connection.all(WHERE_COHORT, cb)
    })
  }

  static help() {
		let menu = `create(connection, data)\nupdate(connection, data)\ndelete(connection, id)\nfindById(connection, id)\nfindAll(connection, cb)\nwhere(connection, value, cb)`
		console.log(menu)
	}

}
export default Cohort

// Cohort.create(dbModel.connection, new Cohort("Cross Fox"))
// Cohort.create(dbModel.connection, new Cohort("Bland Fox"))
// Cohort.update(dbModel.connection, new Cohort("Cross Fox 2016", 1))
// Cohort.delete(dbModel.connection, 2)
