$(()=>{
    $("#search-bar").load("search-bar.html")
})
// 搜索栏的滚动事件
$(()=>{
    $(window).scroll(()=>{
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if(scrollTop>=clientHeight){
            $("#search-bar").addClass("in")
        }else{
            $("#search-bar").removeClass("in")
        }
    })
})