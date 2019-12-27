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
$DBHOST = "localhost";
$DBUSER = "root";
$DBPWD = "";
$DBNAME = "todo-db";
$conn = new mysqli($DBHOST,$DBUSER,$DBPWD,$DBNAME);

if ($conn->connect_error)
{
    die("Connection failed:" . $conn->connect_error);
}
echo "Connected successfully";

//      SQL
//  =========================
// CRUD ( Create Read Update Delete )
//  =========================
//SELECT * FROM table WHERE column1=value1, column2=value2,column3=value3
//INSERT INTO table_name(column1, column2, ... ) VALUE(value1, value2, ...)
//UPDATE table_name SET column1=value1, column2=value2, ... WHERE condition
//DELETE FROM table_name WHERE condition
?>

</body>
</html>