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

	if($password == $passrepeat and $ct == 1)
	{
		$newusr = "UPDATE `data` SET `password`='$password' WHERE username = '$username';";		
		$bol = 1;
		if ($conn->query($newusr) === TRUE)
		{
			echo "New record created successfully";
		}
	
	}
	elseif ($ct == 0)
	{
		header("location: forgotpass.html");
	}
	else
	{
		header("location: forgotpass.html");
	}

	if($bol == 1)
	{
		header("location: index.html");
	}
?>