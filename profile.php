<?php
    include('authenicate.php');  
  
	$username = $_POST['username'];  
    $password = $_POST['password'];
    $fname = "";
    $lname = "";
	$bol = 0;
	
	$ctuser = "SELECT COUNT(username) as usersct FROM `data` WHERE username = '$username'";
	$res = mysqli_query($conn, $ctuser);
	$num = mysqli_fetch_array($res);
    $ct = $num["usersct"];

	if($password != ""  and $ct == 1)
	{
		$newusr = "UPDATE `data` SET `password`='$password' WHERE username = '$username';";		
		$bol = 1;
		if ($conn->query($newusr) === TRUE)
		{
			echo "New record created successfully";
		}
	
	}
    elseif($fname != ""  and $ct == 1)
	{
		$newusr = "UPDATE `data` SET `firstNAME`='$fname' WHERE username = '$username';";		
		$bol = 1;
		if ($conn->query($newusr) === TRUE)
		{
			echo "New record created successfully";
		}
	
	}
    elseif($lname != ""  and $ct == 1)
	{
		$newusr = "UPDATE `data` SET `firstNAME`='$fname' WHERE username = '$username';";		
		$bol = 1;
		if ($conn->query($newusr) === TRUE)
		{
			echo "New record created successfully";
		}
	
	}
	elseif ($ct == 0)
	{
		header("location: profile.html");
	}
	else
	{
		header("location: profile.html");
	}

	if($bol == 1)
	{
		header("location: profile.html");
	}
?>