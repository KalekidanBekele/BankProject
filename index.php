<!DOCTYPE html>
<html>
    <head>
    <?php
        include ('connection.php');
    ?>
        <title> BSU Bank </title>
        <style>
            body
            {
                margin: 0px;
                border: 0px;
            }
            p
            {
                font-size: 20px;
                font-family: 'Times New Roman', Times, serif;
            }
            h4
            {
                font-size: 30px;
                font-family: 'Times New Roman', Times, serif;

            }
            #header
            {
                background: black;
                color: white;
                height: 110px;
                width: 100%;
            }
            #sidebar
            {
                height: 900px;
                width: 25%;
                background: #ccc;
                float: right;
                margin: 8px;
            }
            #main
            {
                padding-left: 8px;
                width: 70%;
                height: 900px;
                background: #ccc;
                float: left;
                margin: 8px;
            }
        </style>
    <body>
        <div id ="header">
            
            <c> Heading </c>
        </div>

        <div id = "sidebar">
            <h3> Extra information to test the sidebar </h3>
            <p> Still test the code and styling </p>
            <h6> This is using h6 </h6>
        </div>

        <div id ="main">
        <h4> Hello World </h4>
        <p>This is a resonse to test </p>

        <?php
            $get_data = "SELECT * FROM `data`;";
            $query_data = mysqli_query($conn, $get_data);

            while($row_data = mysqli_fetch_array($query_data))
            {
                $email = $row_data['email'];
                $pass = $row_data['password'];

                echo $email; //. '&nbsp;&nbsp;'. $id .'<br>';
            }
        ?>

        </div>
    </body>
    </head>
</html>
    
