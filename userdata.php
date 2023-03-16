<?php
    include('connection.php');

    $username = "sample@sample.com";
    $password = "abcd";
    $fname = "";
    $lname = "";
    $bal = "";
    $id = "";

    //echo $username. "<br>";
    //echo $password. "<br>";

    $datasql = "select firstNAME from data where username = '$username' and password = '$password' ";  
    $ans = mysqli_query($conn,$datasql);
    if ($ans->num_rows > 0)
    {
        // output data of each row
        while($row = $ans->fetch_assoc())
        {
          $fname = $row["firstNAME"];
          //echo $fname;
        }
    }
    else
    {
        echo "0 results";
    }

    $datasql = "select lastNAME from data where username = '$username' and password = '$password' ";  
    $ans = mysqli_query($conn,$datasql);
    if ($ans->num_rows > 0)
    {
        // output data of each row
        while($row = $ans->fetch_assoc())
        {
            $lname= $row["lastNAME"];
            //echo $lname;
        }
    }
    else
    {
        echo "0 results";
    }

    $datasql = "select id from data where username = '$username' and password = '$password' ";  
    $ans = mysqli_query($conn,$datasql);
    if ($ans->num_rows > 0)
    {
        // output data of each row
        while($row = $ans->fetch_assoc())
        {
            $id = $row["id"];
            //echo $id;
        }
    }
    else
    {
        echo "0 results";
    }


    $datasql = "select balance from data where username = '$username' and password = '$password'"; 
    $ans = mysqli_query($conn,$datasql);

    if ($ans->num_rows > 0)
    {
        // output data of each row
        while($row = $ans->fetch_assoc())
        {
          $bal = $row["balance"];
          //echo $bal;
        }
      }
      else
      {
        echo "0 results <br>";
      }


    $array = Array
    (
        "0" => Array
        (
            "id" => $id,
            "username" => $username,
            "password" => $password,
            "fname" => $fname,
            "lname" => $lname,
            "balance" => $bal,
        )
    );

    $json = json_encode($array);
    echo "$json";
    file_put_contents("banking_data.json", $json);

?>