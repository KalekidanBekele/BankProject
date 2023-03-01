<?php
    include('connection.php');

    $get_data = "SELECT * FROM `data` WHERE email LIKE '%$uname%';";
    $result = $conn->query($get_data);

    if ($result->num_rows > 0)
    {
        while($row = $result->fetch_assoc() )
        {
            echo $row["uname"]."<br>";
        } 
    }
    else
    {
        echo "User Not Found";
    }
?>