<!DOCTYPE html>
<html>
    <?php
        include('connection.php');

         $get_data = "SELECT * FROM `data`;";
        $query_data = mysqli_query($conn, $get_data);

         while($row_data = mysqli_fetch_array($query_data))
        {
            $email = $row_data['email'];
            $pass = $row_data['password'];

            echo $email; //. '&nbsp;&nbsp;'. $id .'<br>';
        }
    ?>
</html>