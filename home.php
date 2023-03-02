<?php
    session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Home Page</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer">
	</head>
	<body class="loggedin">
		<nav class="navtop">
			<div>
				<h1>BSU Bank</h1>
				<a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a>
			</div>
		</nav>
		<div class="content">
			<h2>Home Page</h2>
			<h3>Welcome back!</h3>            
		</div>
        <link href="stylebank.css" rel="stylesheet" type= "text/css">
        <div class= "ContainUserData">
        <div class="flex">
        <div class="element-center">
    
        <div id="acctBalance"> <span class="wrap"></span>
            </a>
                <h1> Total Balance </h1>
                    <label id="acctBalanceLbl"></label>
        </div>

        <div id="inputs">
        <h2> Deposit </h2> <input type="text" id="userDeposit" required>
            <button id="btnDeposit">Deposit</button>

        <h2> Withdraw </h2> <input type="text" id="userWithdraw" required>
            <button id="btnWithdraw">Withdraw</button>
    </div>
  
</div>
</div>
</div>
    <script type="text/javascript" src="userbanking.js"></script>
</body>
</body>
</html>