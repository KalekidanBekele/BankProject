<?php
  $dbhost = "localhost";
  $dbuser = "root";
  $password = "";
  $db = "bankproject";

  // Create connection
  $conn = new mysqli($dbhost, $dbuser, $password, $db);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

?>