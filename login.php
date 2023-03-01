<!DOCTYPE html>
<html lang = "en">
    <?php
        include('connection.php');
    ?>
    <head>
        <title>BSU Bank </title>
        <style>
            *{
                padding: 0px;
                margin: 0px;
            }
            body
            {
                font-family: 'Times New Roman', Times, serif;
                background-color: rgb(188, 188, 188);
            }
            .logo
            {
                height: 50px;
                width: 50px;
            }
            .imgcontainer
            {
                text-align: left;
                margin: 24px 0 12px 0;
            }
            img.avatar
            {
                width: 10%;
                border-radius: 50%;
            }
            form
            {
                border: 3px;
                float:left;
            }
            input[type=email],input[type=password]
            {
                width: 100%;
                padding: 12px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                box-sizing: border-box;
            }
            button
            {
                background-color: #248f68;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                cursor: pointer;
                width: 100%;
            }
            button:hover
            {
                opacity: 0.827;
            }
            .container
            {
                padding: 16px;
                max-width: 300px;
                margin: left;
            }
            .spaceheader
            {
                border: 1px solid #4b4b4b;
            }
            .textheading
            {
                text-align: center;
                font: 100px;
            }
            .space
            {
                margin: left;
                max-width: 44px;
                height: 40px;
                border: 40px solid;
            }
            span.psw
            {
                float: left;
                padding-top: 16px;
            }
            @media screen and (max-width: 300px)
            {
                span.psw
                {
                    display: block;
                    float: none;
                }
            }
        </style>
    <body>
    <h1 class=" textheading">BSU Bank</h1>
    <div class="spaceheader" ></div>
    <h2 style=" text-align:center" class= "container">Login</h2>

        <form action="welcome.php" method="get">
            <div class="container">
                <label for="uname"><b>Email </b></label>
                    <input type="email" placeholder="School Email" name="uname" required >
                    <br>

                <label for="psw"><b>Password </b></label>
                    <input type="password" placeholder="Password" name="psw" required >
                    <br>
                <button type="submit">Login</button>
                    <label>
                    <br>
                <input type="checkbox" checked="checked" name="remember">Remember me
                    </label>
                    <br>
                <span  class="psw">Forgot <a href="#">Password?</a></span>
            </div>
        </form>

            <script src = "[filename.js]">
                //alert('Page Loaded');
            </script>
    </body>
</html>