<?php

session_start();//启动会话
$code=$_REQUEST["code"];
if( $code == $_SESSION["code"]){
	echo json_encode(["ok"=>1]);
}else{
	echo json_encode(["ok"=>1]);
}

?>
