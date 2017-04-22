var db = require('../db');



module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
    	db.connect();
    	console.log(arguments[0].body)
    	db.query('insert into users (username) values ('+JSON.stringify(arguments[0].body.username)+');', function () {console.log('worked')});
    	db.query('insert into rooms (roomname) values ('+JSON.stringify(arguments[0].body.username)+');', function () {console.log('worked')});
    	db.query('insert into messages (message) values ('+JSON.stringify(arguments[0].body.username)+');', function () {console.log('worked')});
    	db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
    	db.connect();
    	db.query('insert into users (username) values ('+JSON.stringify(arguments[0].body.username)+');', function () {console.log('worked')});
    	db.end();
    }
  }
};

