<?php
    include('connection.php');  
    $username = $_POST['username'];  
    $password = $_POST['password'];  
      
        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $username = mysqli_real_escape_string($conn, $username);  
        $password = mysqli_real_escape_string($conn, $password);  
      
        $sql = "select *from data where firstNAME = '$username' and password = '$password' or username = '$username'";  
        $result = mysqli_query($conn, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  


        if($count == 1)
        {  
            //echo "<h1><center> Login successful </center></h1>";
            header('Location: home.php');
            echo "<h3><center> Hello, $username </center></h3>";
        }  
        else
        {  
            echo '<script>alert("Login failed. Invalid username or password.")</script>';
            //sleep(2);
            header("location: index.html");  
        }
?>