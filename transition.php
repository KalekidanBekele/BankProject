<?php
    include('authenicate.php');
    
    if($count == 1)
    {  
        //echo "<h1><center> Login successful </center></h1>";
        header('Location: home.html');
    }  
    else
    {  
        //sleep(2);
  header("location: index.html");  

    } 
    
    sqlsrv_close($conn);
?>