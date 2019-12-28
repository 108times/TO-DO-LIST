<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Latest compiled and minified CSS -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
    <title>To Do List</title>
</head>
<body>
    <?php
     require_once 'crypt.php';
     if(!empty($_GET["user"])) {

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
     $user_id = $row["user_id"];


     $statement = "SELECT * FROM task WHERE user_id=?";
     $stmt = $conn->prepare($statement);
     $stmt->bind_param("s", $user_id);
     $stmt->execute();
     $result = $stmt->get_result();

    ?>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark custom-nav sticky-top">
            <a class="navbar-brand logo" href="#">
                <img src="images/security-icon-white.png">
                TO DO LIST
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-fill header">
                    <li class="nav-item ">
                        <a href="home.php?user=<?=$_GET['user']?>" class="nav-link " id="home-link">Home</a>
                    </li>
                    <li class="nav-item active">
                        <!-- Modal toggle -->
                        <a href="#" class="nav-link active" id="pricing-modal-toggle" data-toggle="modal"
                           data-target="#pricingModal">To Do List
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="signup.php"  id="authorization-link" class="nav-link" >Authorization</a>
                    </li>
                    <li class="nav-item">
<!--                        --><?php
                        echo "<a href='#' class='nav-link '>{$username}</a>";
                        ?>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main>

        <div class="content card card-body">
            <div class="to-do-list">
                <div class="headers d-flex ">
                    <div>Task</div>
                    <div>Completion Date</div>
                    <div>Completion Time</div>
                    <div>Actions</div>
                </div>
                <div id="list">
                    <!--                <div class="lines">-->
                    <!--                    <div class="vertline num1"></div>-->
                    <!--                    <div class="vertline num2"></div>-->
                    <!--                    <div class="vertline num3"></div>-->
                    <!--                </div>-->

                    <?php
                   
                    while ($row = $result->fetch_assoc()) {
//                    echo "<script>console.log(" . var_dump($row) . ")</script>";

                    echo '<div class="headers d-flex">';
                        echo "<div>{$row["task"]}</div>";
                        echo "<div>{$row["date"]}</div>";
                        echo "<div>{$row["time"]}</div>";

                        $delete_task = "delete_task.php?task_id=";
                        $task_id = $row["task_id"];
                        $delete_task .= $task_id;

                        $update_task = "update_task.php?task_id=";
                        $task_id = $row["task_id"];
                        $update_task .= $task_id;

                        echo "<div class='buttons' 
style='padding-top:0 !important'><a href='{$update_task}'>update</a><a href='{$delete_task}'>delete</a></div> 
</div>";
                    }
                    $conn->close();
                    ?>
                </div>
            </div>

        </div>
        <form class="add-task" action="task_added.php?user=<?=$_GET['user']?>" method="POST">
            <div class="add-task__part-1">
                <div class="task-group-form">
                    <label for="month">Month</label>
                    <select name="month" id="month">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div class="task-group-form">
                    <label for="day">Day</label>
                    <select name="day" id="day">
                    </select>
                </div>
                <div class="task-group-form">
                    <label for="year">Year</label>
                    <select name="year" id="year">
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div class="task-group-form" id="add-task-text">
                    <label for="task">Text</label>
                    <input id="task" name="task" type="text">
                </div>
            </div>


            <div class="add-task__part-2">
                <div class="task-group-form">
                    <label for="hour">Hour</label>
                    <select id="hour" name="hour">
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
                <div class="task-group-form">
                    <label for="minute">Minute</label>
                    <select id="minute" name="minute">
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                    </select>
                </div>

                <div class="task-group-form">
                    <label for="am">Second</label>
                    <select id="am" name="am">
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                    </select>
                </div>
                <button type="submit">Add task</button>
            </div>


        </form>


    </main>
    <?php
} else {
   echo "<script>location.href='login.php'</script>";
}
?>
</body>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

<script src="js/main.js"></script>
</html>