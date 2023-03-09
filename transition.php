<?php
    include('authenicate.php');
    
    if($count == 1)
    {  
        //echo "<h1><center> Login successful </center></h1>";
        header('Location: home.php');
        echo "<h3><center> Hello, $username </center></h3>";
    }  
    else
    {  
        //sleep(2);
  header("location: index.html");  
  echo '<script>alert("Login failed. Invalid username or password.")</script>';

    } 
    
    sqlsrv_close($conn);
?>