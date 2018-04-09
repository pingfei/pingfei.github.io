// 图片验证码验证
function code_check(){
    var code = $("[data-id=user-c]").val().toLowerCase();
    // console.log(code)
    $.get("data/code_check.php",{code:code},function(res){
        // console.log(res)
        if(!res.ok==1){
            $(".login-wrong-tips").addClass("in");
        }else{
            $(".login-wrong-tips").removeClass("in");
        }
    },"json");
}
// 点击图片，刷新验证码
$(()=>{
    $(".code_pic").click(e=>{
        var $tar = $(e.target);
        $tar.attr("src","data/code.php");
    });
});
// 登陆
$(()=>{
	$("[data-id=user-btn]").click(()=>{
        var u = $("[data-id=user-u]").val();
        var p = $("[data-id=user-p]").val();
        var c = $("[data-id=user-c]").val();
        var $tips = $(".login-wrong-tips");
        var uReg = /^[a-zA-Z0-9]{4,16}$/;
        if(!uReg.test(u)){
            $tips.html("用户名错误，请重输");
            $(".login-wrong-tips").addClass("in");
            return;
        }
        var pReg = /^[a-zA-Z0-9]{6,16}$/;
        if(!pReg.test(p)){
            $tips.html("密码错误，请重输");
            $(".login-wrong-tips").addClass("in");
            return;
        }
        var codeReg = /^[a-z]{4}$/i;
        if(!codeReg.test(c)){
            $tips.html("验证码错误，请重输");
            $(".login-wrong-tips").addClass("in");
            return;
        }
        // code_check()
        // var isHas = $(".login-wrong-tips").is(".in");
        // console.log(isHas)
        var $form=$("form");
        // console.log($form.serialize());
        $.ajax({
            type:"POST",
            url:"data/users/login.php",
            data:$form.serialize(),
            success:function(data){
                // console.log(data);
                if(data=="false"){
                    $form[0].reset();
                    $(".login-content").prepend(`<div           class='login-wrong-tips'>
                        用户名或密码有误，请重试
                        </div>`);
                }else{
                    alert("登录成功!");
                    if(location.search!==""){
                        var back=location.search.slice(6);
                        location=back;
                    }else{
                        location="index.html";
                    }
                }
            },
            error:function(){
                console.log("网路故障，请检查");
            }
        });
    });
})
// $(window).keyup(e=>{
	// 	if(e.keyCode==13) $("[data-id=user-btn]").click();
	// })


// 点击‘登陆Z商城’、‘商家登陆’按钮，切换登陆框
// $(()=>{
    // 点击‘登陆Z商城’
    // $("#login-user").click(e=>{
    //     var $tar = $(e.target);
    //     if(!$tar.hasClass("curLogin")){
    //         $tar.addClass("curLogin").siblings().removeClass("curLogin");
    //         $("[data-id=login-user]").attr("style","display:block;").next().attr("style","display:none;");
    //     }
    // });
    // 点击‘商家登陆’按钮
    // $("#login-seller").click(e=>{
    //     var $tar = $(e.target);
    //     if(!$tar.hasClass("curLogin")){
    //         $tar.addClass("curLogin").siblings().removeClass("curLogin");
    //         $("[data-id=login-seller]").attr("style","display:block;").prev().attr("style","display:none;");
    //     }
    // });
    // 点击‘手机动态登陆’按钮
    // $(".mobileLogin-bar").click(()=>{
    //     $(".mobileLogin-content").attr("style","display:block;").prev().attr("style","display:none;");
    // });
// });
// 用户登陆
// $(()=>{
//     $("[data-id=user-btn]").click(()=>{
//         获取用户名，密码，验证码
//         var uname = $("[data-id=user-u]").val();
//         var upwd = $("[data-id=user-p]").val();
//         var code = $("[data-id=user-c]").val();
//         console.log(uname,upwd,code)
//         创建正则并验证
//         var uReg = /a/;
//     });
// });
// 商家登陆
// $(()=>{
//     $("[data-id=seller-btn]").click(()=>{
//         获取用户名，密码
//         var uname = $("[data-id=seller-u]").val();
//         var upwd = $("[data-id=seller-p]").val();
//         console.log(uname,upwd)
//     });
// });
