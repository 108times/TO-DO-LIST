<?php

require_once 'crypt.php';

if (!empty($_POST["email"]) && !empty($_POST["password"])) {
    $DBHOST = "localhost";
    $DBUSER = "root";
    $DBPWD = "";
    $DBNAME = "todo-db";
    $conn = new mysqli($DBHOST,$DBUSER,$DBPWD,$DBNAME);
    /* проверка соединения */
    if ($conn->connect_error) {
        die("Connection failed:" . $conn->connect_error);
    }
//    echo "Connected successfully";
    $username = $_POST["email"];
    $password = $_POST["password"];
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $hashed_username = my_simple_crypt( $username , 'e' );
    $statement = "SELECT * FROM user WHERE username=?";
    $stmt = $conn->prepare($statement); /* создаем подготавливаемый запрос */
    $stmt->bind_param("s", $username); /* связываем параметры с метками */
    $stmt->execute();  /* запускаем запрос */
    $result = $stmt->get_result();
    if ($result->num_rows>=1){
        $value = "duplicate";
        header("Location:signup.php?email=$value");
    }
    else{
        $statement = "INSERT INTO user(username,password,hashed_user) VALUES(?,?,?)";
        $stmt = $conn->prepare($statement);
        $stmt -> bind_param("sss", $username, $hashed,$hashed_username);
        $stmt -> execute();
        $value = "successful";
        header("Location:login.php?email=$value");
    }
    $conn->close();
} else {
    header("Location:signup.php?empty=1");
}
