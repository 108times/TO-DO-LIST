<?php
if (isset($_POST['task']) && $_POST['task'] !="" && isset($_POST['month']) && isset($_POST['day']) && isset($_POST['year']) && !empty($_GET['user'])) {
    $DBHOST = "localhost";
    $DBUSER = "root";
    $DBPWD = "";
    $DBNAME = "todo-db";

    $conn = new mysqli($DBHOST, $DBUSER, $DBPWD, $DBNAME);

    /* проверка соединения */
    if ($conn->connect_error) {
        die("Connection failed:" . $conn->connect_error);
    }

    $hashed_username = $_GET['user'];
    $task = $_POST["task"];
    $day = $_POST["day"];
    $month = $_POST["month"];
    $year = $_POST["year"];
    $am = $_POST["am"];
    $minute = $_POST["minute"];
    $hour = $_POST["hour"];
    $date = $day . "." . $month . "." . $year;
    $time = $hour . ":" . $minute . "&nbsp" . $am;

    $user = $_GET["user"];
    $statement = "SELECT * FROM user WHERE hashed_user=?";
    $stmt = $conn->prepare($statement); /* создаем подготавливаемый запрос */
    $stmt->bind_param("s", $user); /* связываем параметры с метками */
    $stmt->execute();  /* запускаем запрос */
    $result = $stmt->get_result();
    if ($result->num_rows >= 1) {
        $row = $result->fetch_assoc();
        $username = $row['username'];
        $user_id = $row['user_id'];
    } else {
      echo 'Error';
    }

    $statement = "INSERT INTO task(user_id,task,date,time) VALUES(?,?,?,?)";
    $stmt = $conn->prepare($statement); /* создаем подготавливаемый запрос */
    $stmt->bind_param("ssss", $user_id,$task,$date,$time); /* связываем параметры с метками */
    $stmt->execute();  /* запускаем запрос */
    $stmt->close();
    $conn->close();
    $field = 'complete';
    header("Location:display_task.php?field=$field&user={$_GET['user']}");
} else if($_POST["task"] == "") {
   $field = 'incomplete';
   header("Location:display_task.php?field=$field&user={$_GET['user']}");
} else if($_POST["day"] == "") {
   $field = 'incomplete';
   header("Location:display_task.php?field=$field&user={$_GET['user']}");
} else {
       header("Location:display_task.php?user={$_GET['user']}");
};