var db = require('../db');



module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req, res) {
    	db.connect();
    	db.query('insert into messages (message) values ('+JSON.stringify(arguments[0].body.message)+');', function (err, results) {if (err) throw err; console.log('res is ' + res)});
    	// db.query('insert into rooms (roomname) values ('+JSON.stringify(arguments[0].body.username)+');', function (err, results) {if (err) throw err; console.log('solution is ' + results)});
    	// db.query('insert into messages (message) values ('+JSON.stringify(arguments[0].body.username)+');', function (err, results) {if (err) throw err; console.log('solution is ' + results)});
    	res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req,res) {
    	db.connect();
    	db.query('insert into users (username) values ('+JSON.stringify(arguments[0].body.username)+');', function (err, results) {if (err) throw err; console.log('solution is ' + results)});
    	res.end();
    }
  }
};

