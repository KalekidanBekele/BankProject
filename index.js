// http://localhost:3000/ is the website locally

const conn = require('./connection');
const express = require('express');
const session = require('express-session');
const path = require('path');
//const bodyParser = require('body-parser');
const fs = require('fs/promises');
//var passport = require('passport');
//const fs = require('fs')

var compare = "[]";
var bol = 0;
counter = 0;

const app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(__dirname));
//app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		conn.connection.query('SELECT * FROM data WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
                //writeStream.write('a',request.session.username);
                //console.log(request.session.username);
                async function example(input) {
                    try {
                      await fs.writeFile('username.txt', input);
                    } catch (err) {
                      console.log(err);
                    }
                  }
                  example(request.session.username);

                  fs.readFile('username.txt', (err, inputD) => {
                    if (err) throw err;
                        document.getElementById("username").innerHTML = inputD;
                })
                  
				// Redirect to home page
                
				response.redirect('home.html');
                
			} else {
				counter = 1;
                console.log('inside: '+counter);
                response.redirect('/');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
        //writeStream.end();
	}
    
});
console.log('outside: '+counter);


app.get('/home', function(request, response) {
// If the user is loggedin
if (request.session.loggedin) {
    // Output username
    username = request.session.username;
    response.send(username);
    console.log(username);

    res.render(__dirname + "/views/layouts/main.html", {username:username});

    res.render(__dirname + "/home.html", {username:username});
    //document.getElementById("username").innerHTML = request.session.username;
    
} else {
    // Not logged in
    response.send('Please login to view this page!');
}
response.end();
});

app.post("/signup", function(request, response){

    // checks if account already exists
    let firstname = request.body.firstname;
	let lastname = request.body.lastname;
    let username = request.body.username;
	let password = request.body.password;
    let repeatpass = request.body.repeatpass;

    if (username && password ) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		conn.connection.query('SELECT * FROM data WHERE username = ?', [username], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
            console.log(results);
            //console.log(results.length);
            var statement = results > 0;
            console.log(statement);
            console.log (firstname);

			// If the account exists;
			if(statement == false && password == repeatpass)
            {
                var insertnew = 'INSERT INTO data (firstNAME,lastNAME,username, password) VALUES ( ?, ?, ?, ?)';
                //conn.connection.query(insertnew, [firstname, lastname, username, password]);
                if (conn.connection.query(insertnew, [firstname, lastname, username, password]) == true )
                {
                    console.log("successfully");
                }
                bol = 1;
                
            }
            else if(results.length == 1)
            {
                console.log("failed: account exist");
                response.redirect('signup.html');
            }
            else if(results.length == 0 && password != repeatpass)
            {
                console.log("failed: password not match");
                response.redirect('signup.html');
            }
            else
            {
                console.log("failed: unknown error");
                response.redirect('signup.html');
            }
            if(bol == 1)
            {
                response.redirect('/');
            }		
			response.end();
		});
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
});

app.post("/bal", function(req, res){

    var updatedBalance;

    if (req.body.transactiontype === 'deposit') {
        updatedBalance = parseFloat(req.body.balance) + parseFloat(req.body.amount);
    } else {
        updatedBalance = parseFloat(req.body.balance) - parseFloat(req.body.amount);
        if (updatedBalance < 0) updatedBalance = 0.0;
    }

    var name = toUsername(req.body.firstname, req.body.lastname);

    Bank.findOneAndUpdate({username: name}, {balance: updatedBalance}, {new: true}, function(err, data){
        if (err) throw err;

        res.render('profile', {account: data});
    })


})

app.listen(3000);