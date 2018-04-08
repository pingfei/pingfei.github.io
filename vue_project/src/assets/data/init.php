<?php
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
$conn = mysqli_connect("127.0.0.1","root","","z_shopping",3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
?>