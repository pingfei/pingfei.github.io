<?php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid==null){
    echo json_encode(["ok"=>0]);
}else{
    $sql = "SELECT uname FROM z_shopping WHERE uid=$uid";
    $result = mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    echo json_encode(["ok"=>0,"uname"=>$row[0]]);
}
?>