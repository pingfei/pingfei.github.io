<?php
//1:加载数据库连接
require_once('../init.php');
//2:获取二个参数 pno  pageSize
//当前页码
$pno = $_REQUEST['pno'];
//页大小
$pageSize = $_REQUEST['pageSize'];
//3:正则表达式验证
$pnoPattern = '/^[0-9]{1,5}$/';
//判断用户输入格式
if(!preg_match($pnoPattern,$pno)){
    echo '{"code":-1,"msg":"页码格式不正确"}';
    //停止php执行
    exit;
}
if($pno<1){$pno = 1;}
if(!preg_match($pnoPattern,$pageSize)){
    echo '{"code":-2,",msg":"页大小格式不正确"}';
    exit;
}
if($pageSize<1){$pageSize = 8;}
//4:获取当前产品数据记录数 laptop
$sql = "SELECT COUNT(lid) AS c FROM laptop";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
//总页数
$pageCount = ceil($row[0]/$pageSize);
//5:获取当前页产品内容    lid,lname,title,price
$offset = ($pno - 1) * $pageSize;
$sql = "SELECT lid,lname,title,price FROM laptop ORDER BY lid LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
//6:创建json数据发送 
$output = [
    "pno" => $pno,
    "pageSize" => $pageSize,
    "pageCount" => $pageCount,
    "data" => $rows
];
echo json_encode($output);
?>