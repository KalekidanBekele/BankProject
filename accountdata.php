<?php
    include('authenicate.php');  

    $myobj=new stdClass();

    $myobj->sqlid = "select id from data where username = '$username'";
    $myobj->sqlbalance = "SELECT `bankinfo`.balance FROM `data` INNER JOIN bankinfo ON `data`.id=bankinfo.id WHERE username = '$username';";
    $myobj->sqlacctype = "SELECT `bankinfo`.`accType` FROM `data` INNER JOIN bankinfo ON `data`.id=bankinfo.id WHERE username = '$username';";
    $myobj->sqlfname = "select firstNAME from data where username = '$username'";
    $myobj->sqllname = "select lastNAME from data where username = '$username'";
    $myobj->email = $username;
    $myobj->passwd = $password;

    //$myjson = json_encode($myobj);
    //echo $myjson;
?>