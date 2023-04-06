conn = require("./connection");

var name = "sam@sampleemail.com";
var pass ="aaa";
var passrp = "aaa";

var bol = 0;

//var username = document.getElementById("username").value;
//var password = document.getElementById("password").value;
//var passrepeat = document.getElementById("pass-repeat").value;

//var sqlstmt = 'SELECT COUNT(username) as usersct FROM `data` WHERE username =' + conn.mysql.escape(name);

var sqlstmt = 'SELECT * FROM `data` WHERE `username` = ' + conn.mysql.escape(name);
var compare = "[]";


conn.connection.query(sqlstmt, function (err,res){
  if (err) throw err;
    console.log(res);
  stmt = res > compare;
    console.log(stmt);
    
    if(stmt == true && pass == passrp)
    {
        var newpass = 'UPDATE `data` SET `password`='+ conn.mysql.escape(pass)+ ' WHERE username = '+ conn.mysql.escape(name);
      //conn.connection.query(newuser);
      
      if(conn.connection.query(newpass) == true)
      {
        console.log("successfully");
      }
      bol = 1;
    }
    else if(stmt == false)
    {
        console.log("failed: account does not exist");
        //alert("Username/Password invalid");
    }
    else
    {
        console.log("failed");
    }
    if(bol == 1)
    {
        console.log("returned");
    }
    conn.connection.end();
});


