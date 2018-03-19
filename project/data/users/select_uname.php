<?php
require_once("../init.php");
@$uname =$_REQUEST["uname"];
$uPattern = '/^[a-zA-Z0-9]{4,16}$/'; //创建正则表达式
if(!preg_match($uPattern,$uname)){   //判断用户输入格式
   echo '{"ok":-3,"msg":"用户名格式不正确"}';
   exit; //停止php执行
}
$sql = "SELECT uid FROM user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if(!$row){
    echo '{"ok":1,"msg":"用户名可以使用"}';
}else{
    echo '{"ok":-1,"msg":"用户名已被注册"}';
}