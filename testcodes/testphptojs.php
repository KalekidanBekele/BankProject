<?php
    $fruits = ['orange' => 'mango', 'yellow' => 'banana', 'red' => 'apple'];
    $json_fruits = json_encode($fruits);
?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP variable to JavaScript</title>
</head>
<body>
    <h1>PHP variable to JavaScript</h1>    
    <script type="text/javascript">
        var fruits = <?php echo($json_fruits)?>;
        alert(fruits.yellow);
    </script>
</body>
</html>