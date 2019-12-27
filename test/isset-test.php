<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
session_start();
$_SESSION["a"] =0;
if (isset($_SESSION["a"])) {
    echo " is set ";
}
else
{
    echo " is not set ";
}
echo "<br>";
if (!empty($a)) {
    echo " but is not empty ";
} else {
    echo " but is empty ";
}
?>
</body>
</html>