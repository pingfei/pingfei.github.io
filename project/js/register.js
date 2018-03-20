// 用户名验证
function uname_check(){
    var uname = $("[data-num=num]").val()
    var unameReg = /^[a-zA-Z0-9]{4,16}$/;
    if(!unameReg.test(uname)){
        $("#uname-tips").removeClass("in");
        $("#phone-tips").addClass("in");
        return false;
    }else{
        // console.log(uname)
        $("#phone-tips").removeClass("in");
        $("#uname-tips").removeClass("in");
        $.get("data/users/select_uname.php",{uname:uname},function(data){
            // console.log(data)
            if(data.ok==1){
                $("#uname-tips").removeClass("in");
            }else{
                $("#uname-tips").addClass("in");
            }
        },"json");
        return true;
    }
}
// 密码验证
function upwd_check(){
    var upwd = $("[data-upwd=upwd]").val();
    var upwdReg = /^[a-zA-Z0-9]{6,16}$/;
    if(!upwdReg.test(upwd)){
        $("#upwd-tips").addClass("in");
        return false;
    }else{
        $("#upwd-tips").removeClass("in");
        return true;
    }
}
// 确认密码验证
function cpwd_check(){
    var cpwd = $("[data-cpwd=cpwd]").val();
    var upwd = $("[data-upwd=upwd]").val();
    if(!(cpwd && cpwd==upwd)){
        $("#cpwd-tips").addClass("in");
        return false;
    }else{
        $("#cpwd-tips").removeClass("in");
        return true;
    }
}
// 切换图片验证码
$(()=>{
    $(".captcha-img").click(()=>{
        $(".captcha-img img").attr("src","data/code.php")
    })
})
// 图片验证码验证
function code_check(){
    var code = $("[data-code=code]").val().toLowerCase();
    var isTrue;
    // console.log(code)
    $.get("data/code_check.php",{code:code},function(res){
        // console.log(res)
        if(!res.ok==1){
            $("#code-tips").addClass("in");
        }else{
            $("#code-tips").removeClass("in");
        }
    },"json");
}
// 手机号注册处理
function register(){  
    var isChecked = $(".agreement input").is(':checked');
    var isHas = $("#code-tips").is(".in");
    // console.log("ishas="+isHas)
    if(uname_check() && upwd_check() && cpwd_check() && isChecked && !isHas){
        var data = $("form").serialize();
        // console.log(data)
        $.ajax({
            type:"POST",
            url:"data/users/register.php",
            data:data,
            success:function(){
                // console.log(1)
                alert("注册成功");
                $("form")[0].reset()
                location="index.html";
            },
            error:function(){
                console.log("网路故障，请检查")
            }
        })
    }else{
        console.log(-2);
        // console.log(uname_check())
        // console.log(upwd_check())
        // console.log(cpwd_check())
        // console.log(isChecked)
        // console.log(isHas)
        uname_check();
        upwd_check();
        cpwd_check();
        code_check();
    }
}
// 邮箱注册
// 手机验证码
$(()=>{
    $(".get-captcha").click(()=>{
        phone_check();
        code_check();
        if(!($("#phone-tips").hasClass("in")||$("#code-tips").hasClass("in"))){
            $(".loading")
                .addClass("in")
                .siblings()
                .removeClass("in")
                .parent()
                .next()
                .addClass("in");
            var time = 10;
            function timeCountDown(){
                if(time==0){
                    clearInterval(timer);
                    $('.getcode')
                        .addClass('in')
                        .siblings()
                        .removeClass("in")
                        .parent()
                        .next()
                        .removeClass("in");
                    time=10;
                }
                $('.loading em').html(time);
                time--;
            }
            timeCountDown()
            var timer = setInterval(timeCountDown,1000);
            return true;
        }else{
            $("#code-tips").addClass("in");
            $("#phone-tips").addClass("in");
            return false;
        }
    })   
})
// 点击按钮，切换注册方式
// 手机
// $(()=>{
//     $(".phone-number").click(e=>{
//         var $tar = $(e.target)
//         if(!$tar.hasClass("current")){
//             $tar.addClass("current").siblings().removeClass("current");
//             $(".register-phone-number").attr("style","display:block;").next().attr("style","display:none;");
//         }
//     });
// });
// 邮箱
// $(()=>{
//     $(".register-by-email").click(e=>{
//         var $tar = $(e.target)
//         if(!$tar.hasClass("current")){
//             $tar.addClass("current").siblings().removeClass("current");
//             $(".register-email").attr("style","display:block;").prev().attr("style","display:none;");
//         }
//     });
// });
