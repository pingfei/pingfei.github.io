$(()=>{
    $("header").load("header.html",()=>{
        // console.log("header")
        var url = window.location.pathname;
        var reg = /.*index\.html.*/;
        if(!reg.test(url)){
            $(".stand-nav").addClass("fade");
            $(".nav").addClass("border_bottom")
        }
    })
})