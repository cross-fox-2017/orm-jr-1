"use strict"

const sqlite = require('sqlite3').verbose()

class DBModel {
	constructor(file) {
		this.connection = new sqlite.Database(file)
	}

	setup() {
		let db = this.connection
		let CREATE_TABLE_STUDENT = "CREATE TABLE student (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT, cohort_id INTEGER);"
		let CREATE_TABLE_COHORT = "CREATE TABLE cohort (id INTEGER PRIMARY KEY AUTOINCREMENT, cohort_name TEXT NOT NULL);"

		db.serialize(function(){
	   		db.run(CREATE_TABLE_STUDENT, function(err) {
	    		if(err) {
	        		console.log(err);
	      		} else {
	        		console.log('CREATE TABLE STUDENT: SUCCESS!');
	      		}
	    	});
	  	});

	  	db.serialize(function(){
	   		db.run(CREATE_TABLE_COHORT, function(err) {
	    		if(err) {
	        		console.log(err);
	      		} else {
	        		console.log('CREATE TABLE COHORT: SUCCESS!');
	      		}
	    	});
	  	});
	}

}

export default DBModel
