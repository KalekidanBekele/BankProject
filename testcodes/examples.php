<!DOCTYPE html>
<html>
    <?php
    //searching account
        include('connection.php');

         $get_data = "SELECT * FROM `data`;";
        $query_data = mysqli_query($conn, $get_data);
        // $get_data = "SELECT * FROM `data` WHERE email LIKE '%$uname%';";
        //$result = $conn->query($get_data);

        if  ($query_data->num_rows > 0)
        {
            while($row_data = mysqli_fetch_array($query_data))
            {
                $email = $row_data['email'];
                $pass = $row_data['password'];

                echo $email; //. '&nbsp;&nbsp;'. $id .'<br>';
            }
        }
        else "0 results";
    ?>
    <?php
    //creating account
        include ('connection.php');
        error_reporting(0);

        $uemail = $_POST['uname'];
        $upass = $_POST['psw'];

        if(!$_POST['submit'])
        {
            //echo "All fields are required";
        }
        else

        $result = mysqli_query($conn,"INSERT into Data (Email, Password)
        values('$uemail','$upass')");        

        if ($result)
        {
            echo "Data creation successful";
        }

        
    ?>

</html>