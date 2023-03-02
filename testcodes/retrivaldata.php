<?php
    include('connection.php');

    $username = $_POST['username'];  
    $password = $_POST['password'];
    
    $sql = "select firstNAME, lastNAME, username, balance from data where firstNAME = '$username' and password = '$password' or username = '$username'"; 
    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_row($result);

    $fName = $row[0];
    $lName = $row[1];
    $email = $row[2];
    $bal = $row[3];

    $conn->close();
?>

<!DOCTYPE html>
<html>
    <body>
    <script type="text/javascript">
        var fn = "<?php echo"$fName"?>";
        var fn = "<?php echo"$lName"?>";
        var fn = "<?php echo"$email"?>";
        var fn = "<?php echo"$bal"?>";
        document.write(x);
    </script>
    </body>
</html>