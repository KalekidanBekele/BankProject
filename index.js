// http://localhost:3000/index.html is the website locally
const readline = require('readline')
const conn = require('./routes/connection');
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


                let user = { 
                    id: results[0]['id'],
                    fname: results[0]['firstNAME'],
                    lname: results[0]['lastNAME'], 
                    username: results[0]['username'],
                    password: results[0]['password'],
                    balance: results[0]['balance'] 
                };
                 
                let data = JSON.stringify(user, null, 2);
                
                fs.writeFile('./user_data/user.json', data, (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                });
                //
                //
                async function example(input) {
                    try {
                      await fs.writeFile('./user_data/username.txt', input);
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
                      await fs.writeFile('./user_data/balance.txt', input);
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
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
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

app.post("/bal", function(request, response){    
    if (request.session.loggedin) {
		// Output username
		//response.send('Welcome back, ' + request.session.username + '!'); 
        var updatedBalance;

        const formatter = new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });
           
        conn.connection.query('SELECT `balance` FROM data WHERE username = ?', [request.session.username], function(error, results, fields) {
			if (error) throw error;
            console.log(results);

            const acctBalanceLbl = document.getElementById("balance");
            const deposits = [];
            const withdrawals = [];
            let totalBalance = results;
            const userDeposit = document.getElementById("userDeposit");
            const btnDeposit = document.getElementById("btnDeposit");
            const userWithdraw = document.getElementById("userWithdraw");
            const btnWithdraw = document.getElementById("btnWithdraw");

            var statement = results > 0;
            console.log(statement);
            var userbal = 'UPDATE `data` SET `balance`= ? WHERE `username` = ?';

            btnDeposit.addEventListener('click', () =>
            {
                if (isNaN(userDeposit.value))
                {
                    alert("Please enter a number.");
                    return userDeposit.value = '';
                }
                else
                {
                if (userDeposit.value < 0.01 || userDeposit.value > 10000)
                {
                    alert("You can only deposit between $0.01 and $10,000.")
                    return userDeposit.value = '';
                }
                else
                {
                    deposits.push(Number(userDeposit.value));
                    totalBalance += (Number(userDeposit.value));
                    let totalBalanceFormatted = formatter.format(totalBalance);
                    document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
                    
                    if (conn.connection.query(userbal, [totalBalance, request.session.username]) == true )
                    {
                        console.log("successfully");
                    }

                    console.log("$" + userDeposit.value);
                    return userDeposit.value = '';
                }
                }
    
            });
            btnWithdraw.addEventListener('click', () =>
            {
                if (isNaN(userWithdraw.value))
                {
                    alert("Please enter a number.");
                    return userWithdraw.value = '';
                }
                else
                {
                if (userWithdraw.value > totalBalance - 5)
                {
                    alert("Your total balance cannot drop below $5.");
                    return userWithdraw.value = '';
                }
                else
                {
                    withdrawals.push(Number(userWithdraw.value));
                    totalBalance -= (Number(userWithdraw.value));

                    if (conn.connection.query(userbal, [totalBalance, request.session.username]) == true )
                    {
                        console.log("successfully");
                    }
                    let totalBalanceFormatted = formatter.format(totalBalance);
                    document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

                    console.log("$" + userWithdraw.value);
                    return userWithdraw.value = '';
                }
            }
        });   
        });
    }

    let totalBalanceFormatted = formatter.format(totalBalance);
    document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

     /*if (request.body.transactiontype === 'deposit') {
        updatedBalance = parseFloat(request.body.balance) + parseFloat(request.body.amount);
    } else {
        updatedBalance = parseFloat(request.body.balance) - parseFloat(request.body.amount);
        if (updatedBalance < 0) updatedBalance = 0.0;
    }

    var name = toUsername(request.body.firstname, request.body.lastname);

    Bank.findOneAndUpdate({username: name}, {balance: updatedBalance}, {new: true}, function(err, data){
        if (err) throw err;

        response.render('profile', {account: data});
    })*/

	response.end();

})

app.listen(3000);