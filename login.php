<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Log In</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap" rel="stylesheet">

</head>
<body class="blue auth-body">
<?php
if (isset($_GET["email"])){
    if ($_GET["email"] == "successful") {
        echo "<div class='warning success'><h4'>Successfully added user!</h4></div>";
    }
}if (isset($_GET["user"])){
    if ($_GET["user"] == "wrong") {
        echo "<div class='warning alert'><h4'>Wrong email or password!</h4></div>";
    }
    else if ($_GET["user"] == "none"){
        echo "<div class='warning alert'><h4'>There is no such user!</h4></div>";
    }
}
?>

<div class="signup-form card card-body auth-1">
    <form method="POST" action="check_login.php">
        <h1>Log In</h1>
        <div class="header-underline"></div>
        <div class="form-group">
            <label class="hidden" for="exampleInputEmail1">Email address</label>
            <input type="username" class="form-control" id="exampleInputEmail1" placeholder="email"
                   name="username"
                   aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label class="hidden" for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="password"
                   placeholder="password" >
        </div>

<!--        <div class="form-group form-check">-->
<!--            <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
<!--            <label class="form-check-label" for="exampleCheck1">Remember me</label>-->
<!--        </div>-->

        <button type="submit" class="btn btn-primary submit">Submit</button>
        <div class="form-group" style="margin-top:30px">
            <h5>Don't have an account?<a  href="signup.php"> Sign up</a></h5>
        </div>
    </form>
</div>
<div class="auth-2">
    <a class="signup-icon" href="home.php">
        <figure>
            <figcaption><b class="whitey">TO DO LIST</b></figcaption>
            <img src="images/security-icon-white.png" alt="icon">
        </figure>
    </a>
</div>
</div>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

<script src="js/main.js"></script>
<script>
$(document).ready(function () {
    let auth2 = $("#auth-2");
    let home_link = $("#home-link")

    auth2.on("mouseenter", function () {
        home_link.css({
            "opacity": "1"
        })
    }).on('mouseleave', function () {
        home_link.css({
            "opacity": "0"
        })
    })
});
</script>
</body>
</html>
