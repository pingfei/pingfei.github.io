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

    });
});