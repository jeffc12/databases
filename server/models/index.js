var db = require('../db');



module.exports = {
  messages: {
    get: function () {
        db.connect();
        console.log('MESSAGES GET')
        db.query('SELECT * FROM messages', [], function (err, results) {if (err) throw err; console.log('solution is ' + results)});
        res.end();
    }, // a function which produces all the messages
    post: function (req, res) {
    	db.connect();
        // console.log('HERE');
        console.log('object!!!!', req.body);

    	db.query('insert into messages (message) values ('+JSON.stringify(req.body.message)+');', 
            function (err, results) {
                if (err) throw err;
                 console.log(' Message solution is ' + results)});


    	db.query('insert into users (username) values ('+JSON.stringify(req.body.username)+');', 
            function (err, results) {
                if (err) throw err; 
                console.log(' User solution is ' + results)});
        // console.log('AFTER', req.body.message)

        // db.query('insert into users (username) values ('+JSON.stringify(req.body.username)+');', function (err, results) {if (err) throw err; console.log('solution is ' + results)});
    	res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
        db.connect();
        console.log('USERS GET')
        db.query('SELECT * FROM users', [], function (err, results) {if (err) throw err; console.log('solution is ' + results)});

        res.end();
    },
    post: function (req,res) {
    	db.connect();
    	db.query('insert into users (username) values ('+JSON.stringify(req.body.username)+');', function (err, results) {if (err) throw err; console.log('solution is ' + results)});
    	res.end();
    }
  }
};

