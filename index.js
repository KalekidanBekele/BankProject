// http://localhost:3000/ is the website locally

const conn = require('./connection');
const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs/promises');

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

app.get('/index', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/auth', function(request, response) {
	let username = request.body.username;
	let password = request.body.password;

    if (username && password) {
		conn.connection.query('SELECT * FROM data WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;

                async function example(input) {
                    try {
                      await fs.writeFile('username.txt', input);
                    } catch (err) {
                      console.log(err);
                    }
                  }
                  example(request.session.username);

                //console.log(results[0]['balance']);
                balance = results[0]['balance'];
                strbal = balance.toString()

                async function example2(input) {
                    try {
                      await fs.writeFile('balance.txt', input);
                    } catch (err) {
                      console.log(err);
                    }
                  }
                  example2(strbal);
                
				response.redirect('home.html');
                
			} else {
				counter = 1;
                console.log('inside: '+counter);
                response.redirect('index.html');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
    
});
console.log('outside: '+counter);

app.get('/home', function(request, response) {
if (request.session.loggedin) {
    username = request.session.username;
    
    response.send(username);
    console.log(username);

    res.render(__dirname + "/home.html", {username:username});
    
} else {
    response.send('Please login to view this page!');
}
response.end();
});

app.post("/signup", function(request, response){

    let firstname = request.body.firstname;
	let lastname = request.body.lastname;
    let username = request.body.username;
	let password = request.body.password;
    let repeatpass = request.body.repeatpass;

    if (username && password ) {
		conn.connection.query('SELECT * FROM data WHERE username = ?', [username], function(error, results, fields) {
			if (error) throw error;
            console.log(results);

            var statement = results > 0;
            console.log(statement);
            console.log (firstname);

			if(statement == false && password == repeatpass)
            {
                var insertnew = 'INSERT INTO data (firstNAME,lastNAME,username, password) VALUES ( ?, ?, ?, ?)';
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
                response.redirect('/index');
            }		
			response.end();
		});
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
});
app.post("/forgotpass", function(request, response){
    
    let username = request.body.username;
	let password = request.body.password;
    let repeatpass = request.body.repeatpass;
  
    if (username && password ) {
		conn.connection.query('SELECT * FROM data WHERE username = ?', [username], function(error, results, fields) {
			if (error) throw error;
            console.log(results);

            var statement = results > 0;
            console.log(statement);

			if(results.length ==  1 && password == repeatpass)
            {
                var resetpass = 'UPDATE `data` SET `password`= ? WHERE `username` = ?';
                if (conn.connection.query(resetpass, [password, username]) == true )
                {
                    console.log("successfully");
                }
                bol = 1;
                
            }
            else if(results.length == 0)
            {
                console.log("failed: account does not exist");
                response.redirect('forgotpass.html');
            }
            else if(results.length == 0 && password != repeatpass)
            {
                console.log("failed: password not match");
                response.redirect('forgotpass.html');
            }
            else
            {
                console.log("failed: unknown error");
                response.redirect('forgotpass.html');
            }
            if(bol == 1)
            {
                response.redirect('/index');
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