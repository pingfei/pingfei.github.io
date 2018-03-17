$(()=>{
    $("#nav-bar").load("nav-bar.html");
})
// 页面滚动事件
$(()=>{
    $(window).scroll(()=>{
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if(scrollTop>=clientHeight){
            $("#fixedNavBar").addClass("in");
        }else{
            $("#fixedNavBar").removeClass("in");
        }
    });
});
$(()=>{
    $("#nav-bar").on("click",".floor",function(){
        var sub = $(this).index();
        var height = $(`.index-section:eq(${sub})`).offset().top -100
        // console.log(sub);
        // console.log("heihgt="+height)
        $("html").animate({scrollTop:`${height}px`},800);
    })
    $("#nav-bar").on("click",".back-top",function(){
        $("html").animate({scrollTop:0},800);
    })
});