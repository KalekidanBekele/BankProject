conn = require("./connection");

//var name = "sam@sampleemail.com";
//var pass ="12345";
//var passrp = "12345";
var bol = 0;

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var passrepeat = document.getElementById("pass-repeat").value;


var sqlstmt = 'SELECT * FROM `data` WHERE `username` = ' + conn.mysql.escape(username);
var compare = "[]";


conn.connection.query(sqlstmt, function (err,res){
  if (err) throw err;
    console.log(res);
  stmt = res > compare;
    console.log(stmt);
    
    if(stmt == true && pass == passrp)
    {
        var deluser = 'DELETE FROM `data` WHERE `username` = '+ conn.mysql.escape(username) +' and password =' + conn.mysql.escape(password);
      //conn.connection.query(newuser);
      
      if(conn.connection.query(deluser) == true)
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
        console.log("failed: issue with password match");
    }
    if(bol == 1)
    {
        console.log("returned: Complete");
    }
    conn.connection.end();
});



