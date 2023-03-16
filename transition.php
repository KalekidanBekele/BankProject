<?php
    include('authenicate.php');
    include('userdata.php');
    
    if($count == 1)
    {  
        if(isset($_POST['username']))
        {
        $data=$_POST['username'];
        $fp = fopen('userdata.txt', 'w');
        fwrite($fp, $data);
        fclose($fp);
        }

        header('Location: home.html');
    }  
    else
    {  
        //sleep(2);
  header("location: index.html");  

    } 
    
    sqlsrv_close($conn);
?>