<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Courier+Prime&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<header>
        <nav class="navbar navbar-expand-md navbar-dark custom-nav sticky-top">
            <a class="navbar-brand logo" href="#">
                <img src="images/security-icon-white.png">
                <b class="whitey light">TO DO LIST</b>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-fill header">
                    <li class="nav-item active ">
                        <a href="#" class="nav-link active" id="home-link">Home</a>
                    </li>
                    <li class="nav-item ">
                        <a href="display_task.php<?php if (!empty($_GET['user'])){echo "?user={$_GET['user']}";} ?>" class="nav-link " id="pricing-modal-toggle"">To Do List</a>
                    </li>
                    <li class="nav-item">
                        <a href="signup.php"  id="authorization-link" class="nav-link" >Authorization</a>
                    </li>
                    <li class="nav-item">
    <?php
     require_once 'crypt.php';
     
     $DBHOST = "localhost";
     $DBUSER = "root";
     $DBPWD = "";
     $DBNAME = "todo-db";
     $conn = new mysqli($DBHOST, $DBUSER, $DBPWD, $DBNAME);
     /* проверка соединения */
     if ($conn->connect_error) {
         die("Connection failed:" . $conn->connect_error);
     }

     $opened = $_GET["user"];
     $statement = "SELECT * FROM user WHERE hashed_user=?";
     $stmt = $conn->prepare($statement);
     $stmt->bind_param("s", $opened);
     $stmt->execute();
     $result = $stmt->get_result();
     $row = $result->fetch_assoc();
     $username = $row["username"];
                        echo "<a href='#' class='nav-link '>{$username}</a>";
                        $stmt->close();
                        $conn->close();
                        ?>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main id="homepage-main">
    <div id="homepage-content-2" class=" card">
        <h2><b>TO DO LIST</b> lets you work more collaboratively and get more done.</h2>
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <!-- <div class="dot dot-3"></div> -->
        <!-- <div class="dot dot-4"></div> -->
    </div>
    <div id="homepage-content-3" class=" card">
        <h3><b>TO DO LIST</b> enable you to organize and prioritize your life in a fun, flexible, and rewarding way.</h3>
        <figure class="home-img">
            <figcaption></figcaption>
            <img src="images/security-icon.png" alt="">
        </figure>
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div> 
        <!-- <div class="dot dot-3"></div> -->
        <!-- <div class="dot dot-4"></div>    -->
    </div>
    <div id="homepage-content" class="card ">
        <h1 id='homepage-h1'>Organize it all
        </h1>
        <a id='begin' href="display_task.php?user=<?=$_GET['user']
        ?>">Begin<img src='images/right-arrow.png'></a>
      <!-- <div class="dot dot-1"></div> -->
        <!-- <div class="dot dot-2"></div> -->
        <div class="dot dot-3"></div>
        <div class="dot dot-4"></div>
    </div>
    </main>
</body>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</html>