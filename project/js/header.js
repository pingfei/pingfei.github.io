$(()=>{
    $("header").load("header.html",()=>{
        // console.log("header")
        var url = window.location.pathname;
        var reg = /.*index\.html.*/;
        // 根据是否是首页来添加数导航的显示与隐藏
        if(!reg.test(url)){
            $(".stand-nav").addClass("fade");
            $(".nav").addClass("border_bottom");
        }
        console.log(1)
        // 登陆
        $(document.body||body).on("click","[data-name=login]",function(){
            location="login.html?back="+location.href
        })
        //登陆状态
        function isLogin(){
            console.log(2)
            $.ajax({
                url:"data/users/islogin.php",
                type:"get",
                dataType:"json",
                success:function(data){
                    console.log(data)
                    if(data.ok==0){
                        $("[data-toggle=loginList]").show()
                            .next().hide();
                    }else{
                        $("[data-toggle=loginList]").hide()
                            .next().show()
                                .find("[data-name=uname]")
                                    .html(`你好，
                                    <a href="javascript:void(0)">${data.uname}</a>`);
                    }
                },
                error:function(){
                    console.log(444)
                }
            })
            console.log(4)
        }
        isLogin();
        
    });
});
$(()=>{
    $(document.body||body).on(
        "click",
        "[data-trigger=search]",
        function(){
            var $txtSearch = $(this).prev().children("#keyword")
            // console.log($txtSearch.val())
            if($.trim($txtSearch.val())!==""){
                location = "products.html?kws=" + $.trim($txtSearch.val());
            }else{
                location = "products.html";
            }
    })
});
$(()=>{
     // 退出
     $(document.body).on("click",".logout",function(){
         $.get("data/users/logout.php",function(){
            $("[data-toggle=loginList]").show()
            .next().hide();
         })
     })
});