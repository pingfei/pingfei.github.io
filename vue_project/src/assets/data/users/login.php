<?php
require("../init.php");
//4:获取二个参数 uname upwd
@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upwd"];

//4.1 创建二个变量保存正则表达式验证用户名密码格式
//4.2 创建用户名正则表达式  字母数字3,12
$uPattern = '/^[a-zA-Z0-9]{4,16}$/';
//4.3 验证用户名
if(!preg_match($uPattern,$uname)){
  //4.4 输出出错提示
  echo '{"code":-2,"msg":"用户名格式不正确"}';
  exit; //停止php执行
}
$pPattern = '/^[a-zA-Z0-9]{6,16}$/';
if(!preg_match($pPattern,$upwd)){
  //4.4 输出出错提示
  echo '{"code":-2,"msg":"密码格式不正确"}';
  exit; //停止php执行
}
//5:创建sql语句##注意大小写
//如果出现如下错误:原因sql语法写错了!
//expects parameter 1 to be mysqli_result
$sql = "SELECT uid FROM  user WHERE uname = '$uname' AND upwd = md5('$upwd')";
//6:发送sql语句
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
//6.1 判断sql语句是否有错
if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
//7:获取数据库返回结果
//8:判断返回结果
//9:依据结果发送json格式数据
//10:向操作日志表添加一条记录
//11:创建sql INSERT

//客户编号，如果操作用户不存在值为0
$uid = ($row[0] == null) ? 0 : $row[0];

if($row==null){
  echo '{"code":-1,"msg":"用户名或密码有误"}';
}else{
  echo '{"code":1,"msg":"登录成功"}';
}
?>