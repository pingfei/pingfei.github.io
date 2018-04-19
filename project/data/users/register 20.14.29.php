<?php
require_once("../init.php");
@$uname =$_REQUEST["register_phone_number"];
$uPattern = '/^[a-zA-Z0-9]{4,16}$/'; //创建正则表达式
if(!preg_match($uPattern,$uname)){   //判断用户输入格式
   echo '{"code":-3,"msg":"用户名格式不正确"}';
   exit; //停止php执行
}
@$upwd =$_REQUEST["register_pasword_phone"];
$uPattern = '/^[a-zA-Z0-9]{6,16}$/'; //创建正则表达式
if(!preg_match($uPattern,$upwd)){   //判断用户输入格式
    echo '{"code":-2,"msg":"密码格式不正确"}';
    exit; //停止php执行
 }
$sql = "INSERT INTO user(uname,upwd) VALUES('$uname',md5('$upwd'))";
$result = mysqli_query($conn,$sql);
if($result == false){
    echo '{"code":-1,"msg":"注册失败"}';
}else{
    echo '{"code":1,"msg":"注册成功"}';
}