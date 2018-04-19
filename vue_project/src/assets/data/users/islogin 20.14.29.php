<?php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid==null){
    echo '{"ok":0}';
}else{
    $sql = "SELECT uname FROM user WHERE uid=$uid";
    $result = mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    echo json_encode(["ok"=>1,"uname"=>$row[0]]);
}
?>