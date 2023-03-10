<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <meta name="format-detection" content="telephone=no">
    <title>Enerji sistemleri</title>
</head>
<body>




<div class="main_wrapper">

    <div class="header">

        <div class="left_col">
            <div class="logo">
                <img src="media/logo.png" alt="logo">
            </div>
            <!--<div class="text">
                <div>Yeni Doğal</div>
                <div>Enerji sistemleri</div>
            </div>-->
        </div>


        <div class="right_col">
            +90 541 480 80 33
        </div>

    </div>


    <div class="timer">
        <div class="clock days">
            <svg class="progress-ring" width="248" height="248">
                <circle class="progress-ring__circle" stroke="#A6C943" stroke-width="8" fill="transparent"
                stroke-dasharray="729 729" stroke-dashoffset="729" cx="124" cy="124" r="116"/>
            </svg>
            <div class="text">
                <div class="time">0</div>
                <div>GÜN</div>
            </div>
        </div>
        <div class="clock hours">
            <svg class="progress-ring" width="248" height="248">
                <circle class="progress-ring__circle" stroke="#A6C943" stroke-width="8" fill="transparent"
                        stroke-dasharray="729 729" stroke-dashoffset="729" cx="124" cy="124" r="116"/>
            </svg>
            <div class="text">
                <div class="time">0</div>
                <div>SAAT</div>
            </div>
        </div>
        <div class="clock minutes">
            <svg class="progress-ring" width="248" height="248">
                <circle class="progress-ring__circle" stroke="#A6C943" stroke-width="8" fill="transparent"
                        stroke-dasharray="729 729" stroke-dashoffset="729" cx="124" cy="124" r="116"/>
            </svg>
            <div class="text">
                <div class="time">0</div>
                <div>DAKİKA</div>
            </div>
        </div>
        <div class="description">Açılışa kaldı</div>
    </div>


    <div class="background-image">
        <div class="blackout"></div>
    </div>
</div>



</body>
<script src="libs/jquery/jquery.js"></script>
<script src="js/darth_vader.js"></script>
<script src="js/timer.js"></script>
<script src="js/date.js"></script>
<script src="js/circle.js"></script>
<script>$(document).ready(() => {new Timer('.timer')})</script>
<!--<script>$(document).ready(() => {new CircleClass('.days .progress-ring')})</script>-->
<!--<script>$(document).ready(() => {new DateClass()})</script>-->
</html>