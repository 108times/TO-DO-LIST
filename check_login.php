<?php
session_start();
require_once 'crypt.php';
if (!empty($_POST["username"]) && !empty($_POST["password"])) {
    $DBHOST = "localhost";
    $DBUSER = "root";
    $DBPWD = "";
    $DBNAME = "todo-db";
    $conn = new mysqli($DBHOST, $DBUSER, $DBPWD, $DBNAME);
    /* проверка соединения */
    if ($conn->connect_error) {
        die("Connection failed:" . $conn->connect_error);
    }
//    echo "Connected successfully";
    $username = $_POST["username"];
    $statement = "SELECT * FROM user WHERE username=?";
    $stmt = $conn->prepare($statement); /* создаем подготавливаемый запрос */
    $stmt->bind_param("s", $username); /* связываем параметры с метками */
    $stmt->execute();  /* запускаем запрос */
    $result = $stmt->get_result();
    if ($result->num_rows >= 1) {
        $row = $result->fetch_assoc();
        $hash = $row["password"];
        if (password_verify($_POST["password"], $hash)) {
            $_SESSION["username"] = $_POST["username"];
            // F***ing session doesn't work!
            $_SESSION["user_id"] = $row["user_id"];
            $hashed_username =$row['hashed_user'];
            $conn->close();
            header("Location:display_task.php?user=$hashed_username ");
            die();
        } else {
            session_abort();
            $conn->close();
            $user = "wrong";
            header("Location:login.php?user=$user");
            die();
        }
    } else {
        session_abort();
        $conn->close();
        $user = "none";
        header("Location:login.php?user=$user");
        die();
    }
} else {
    session_abort();
    $conn->close();
    header("Location:login.php");
    die();
}