<?php
    include('connection.php');  
  
	$username = $_POST['username'];  
    $password = $_POST['password'];
	$passrepeat = $_POST['pass-repeat'];
	$bol = 0;
	
	$ctuser = "SELECT COUNT(username) as usersct FROM `data` WHERE username = '$username'";
	$res = mysqli_query($conn, $ctuser);
	$num = mysqli_fetch_array($res);
    $ct = $num["usersct"];

	if($password == $passrepeat and $ct == 0)
	{
		$newusr = "INSERT INTO data (username, password) VALUES ('$username','$password')";		
		$bol = 1;
		if ($conn->query($newusr) === TRUE)
		{
			echo "New record created successfully";
		}
	
	}
	elseif ($ct == 1)
	{
		header("location: signup.html");
	}
	else
	{
		header("location: signup.html");
	}

	if($bol == 1)
	{
		header("location: index.html");
	}
?>