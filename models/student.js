"use strict"

class Student {
	constructor(firstname, lastname, cohort_id, id_student) {
		this.firstname = firstname,
		this.lastname = lastname,
		this.cohort_id = cohort_id,
		this.id_student = id_student
	}

	static create(connection, data){
		let CREATE_STUDENT = `INSERT INTO student (firstname, lastname, cohort_id) VALUES ('${data.firstname}','${data.lastname}','${data.cohort_id}');`

		connection.serialize(function() {
  			connection.run(CREATE_STUDENT, function(err) {
   				if(err) {
      				console.log(err)
   				} else {
     				console.log('.:: SUCCESS CREATE DATA STUDENT ::.')
    			}
 			})
		})
	}

	static update(connection, data){
		let UPDATE_STUDENT = `UPDATE student SET firstname = '${data.firstname}', lastname = '${data.lastname}', cohort_id = '${data.cohort_id}' WHERE id = '${data.id_student}';`

		connection.serialize(function() {
  			connection.run(UPDATE_STUDENT, function(err) {
   				if(err) {
      				console.log(err)
   				} else {
     				console.log('.:: SUCCESS UPDATE DATA STUDENT ::.')
    			}
 			})
		})
	}

	static delete(connection, id_student){
		let DELETE_STUDENT = `DELETE FROM student WHERE id = ${id_student};`

		connection.serialize(function() {
  			connection.run(DELETE_STUDENT, function(err) {
   				if(err) {
      				console.log(err)
   				} else {
     				console.log('.:: SUCCESS DELETE DATA STUDENT ::.')
    			}
 			})
		})
	}

	static findById(connection, id_student){
		let FIND_ID_STUDENT = `SELECT * FROM student WHERE id = ${id_student};`

		connection.serialize(function() {
  			connection.all(FIND_ID_STUDENT, function(err, rows) {
   				if(err) {
      				console.log(err)
   				} else {
						console.log(`TABLE STUDENT\n_________________\n`)
	          console.log("ID|\t\tFirstName|\tLastName|\tCohort")
	          for(let i = 0;i < rows.length;i++){
	            console.log(rows[i].id+"\t\t"+rows[i].firstname+"\t\t"+rows[i].lastname+"\t\t"+rows[i].cohort_id)
	          }
			   }
 			})
		})
	}

	// static findAll(connection, cb){
	// 	let FIND_ALL_STUDENT = `SELECT * FROM student;`
	//
	// 	connection.serialize(function() {
  // 			connection.all(FIND_ALL_STUDENT, cb)
	// 	})
	// }
	//
	// static where(connection, value, cb){
	// 	let WHERE_STUDENT = `SELECT * FROM student WHERE ${value};`
	//
	// 	connection.serialize(function() {
  // 			connection.all(WHERE_STUDENT, cb)
	// 	})
	// }

	static findAll (connection, cb) {
    let allData = `SELECT student.*, cohort.cohortname FROM student LEFT JOIN cohort ON student.cohort_id = cohort.id;`
    connection.serialize(function () {
      connection.all(allData, function (err, rows) {
        if (err) {
          cb(null,err);
        }
        else {
          cb(rows);
        }
      });
    });
  }

  static where (connection, value, cb) {
    let whereData = `SELECT * FROM student WHERE ${value};`
    connection.serialize(function () {
      connection.all(whereData, function (err, rows) {
        if (err) {
          cb(null,err);
        }
        else {
          cb(rows);
        }
      });
    });
  }

	static help() {
		let menu = `create(connection, data)\nupdate(connection, data)\ndelete(connection, id)\nfindById(connection, id)\nfindAll(connection, cb)\nwhere(connection, value, cb)`
		console.log(menu)
	}

}
export default Student

// Student.create(dbModel.connection, new Student("Isumi", "Karinaningsih", 1))
// Student.create(dbModel.connection, new Student("Isumi", "Karina", 1))
// Student.update(dbModel.connection, new Student("Isumi", "zumi", 1, 1))
// Student.delete(dbModel.connection, 2)
// Student.findById(dbModel.connection, 1)
// Student.findAll(dbModel.connection, function(data, err) {if(!err) {for(var i=0; i<data.length; i++) {console.log(data[i]);}} else {console.log('Error');}})
// Student.where(dbModel.connection, "firstname = 'Isumi'", function(data, err) {if(!err) {for(var i=0; i<data.length; i++) {console.log(data[i]);}} else {console.log('Error');}})
