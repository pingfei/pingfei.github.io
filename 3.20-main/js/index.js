// banner 图 轮播
$(()=>{
    var nowimg = 0,timer=null;
    var $ul = $(".banner-pages");
    var $li = $(".banner-pages-item");
    $(".maonimen p").each(
        function(){
            var WIDTH = document.body.clientWidth / 12;
            var a = $(this).index() % 12 * WIDTH;
            var b = parseInt($(this).index() / 12) * 100;
            $(this).css({
                "left":a,
                "top": b,
                "background-position":(-a) + "px " + (-b) + "px"
            });
        }
    );
     function dong(){
        //加过渡：
        $(".maonimen p").css("transition","all 2s ease");
        $(".maonimen").addClass("fei");
        
        $(".zhentu img").attr("src","images/index/banner_" + nowimg + ".jpg");
        // console.log(nowimg)
        $ul.children(`:eq(${nowimg})`).addClass('current').siblings().removeClass('current');

        setTimeout(()=>{
            //去掉过渡
            $(".maonimen p").css("transition","none");
            $(".maonimen p").css("background-image","url(images/index/banner_" + nowimg + ".jpg)");
            //我们准备下一张图
            $(".maonimen").removeClass("fei");
        },2000);
    }
    function move(){
        if(nowimg < 3){
            nowimg ++;
        }else{
            nowimg = 0;
        }
        dong();
    }
    timer = setInterval(move,4000);
    $(".banner-next").click(()=>{
        if(!$(".maonimen").hasClass("fei")){
            clearInterval(timer);
            if(nowimg < 3){
                nowimg ++;
            }else{
                nowimg = 0;
            }
            dong();
            timer = setInterval(move,4000);
        }
        
    });

    $(".banner-prev").click(()=>{
        if(!$(".maonimen").hasClass("fei")){
            clearInterval(timer);
            if(nowimg > 0 ){
                nowimg --;
            }else{
                nowimg = 3;
            }
            dong();
            timer = setInterval(move,4000);
        }
    });
    $li.hover(function(){
            clearInterval(timer);
            nowimg = $(this).index();
            // console.log(nowimg)
            dong();
    },function(){
        timer = setInterval(move,4000);
    });
    // var WIDTH = 1920,moved=0,timer=null,duration=500, 
    // wait=3000;
    // var $img = $(".banner-imgs");
    // console.log($img)
    // function move(){
    //     console.log(1)
    //     $img.animate({
    //         left:-WIDTH*moved
    //     },duration,function(){
    //         if(moved==4){
    //             moved=0
    //             $img.css('left',-WIDTH*0);
                
    //         }
    //     })
    // }
    // timer = setInterval(()=>{
    //     moved++
    //     move()
    // },wait);
});
// 团购倒计时
$(()=>{
    // 模拟从数据库获取的数据
    var arr = [
        ["媚蓝 note6 64GB",3678.00,1521188820000],
        ["华为 P10 64GB",4174.00,1522398420000],
        ["iphone 6 64GB",4100.00,1523780820000],
    ];
    // 倒计时函数
    function countDown(targetTime){
        var result,s,days,hours,mins,seconds,arr=[];
        var now = new Date().getTime();
        var target = new Date(targetTime).getTime();
        // console.log(target)
        if(target>now){
            s = parseInt( target - now ) / 1000;
            days = parseInt( s / ( 3600 *24 ) );
            hours = parseInt(s/3600%24);
            mins = parseInt(s/60%60);
            seconds = parseInt(s%60);
            return `<span class="tuan-red-color" >
                ${days}</span>天
                <span class="tuan-red-color">${hours}</span>小时
                <span class="tuan-red-color">${mins}</span>分
                <span class="tuan-red-color">${seconds}</span>秒`;
        }else{
            return `<span class="tuan-red-color">正在热卖中....</span>`
        }
    };
    // 遍历数据，导入页面
    var html = "";
    for(var tmp of arr){
        html += `<div class="tuan-slide tuan-first">
        <!-- 显示层 -->
        <div class="tuan-pro-top">
            <div class="tuan-top-left">
                <h4 class="tuan-title">${tmp[0]}</h4>
                <p class="tuan-subtitle">官方正品</p>
                <div class="tuan-price">
                    ¥<em>${tmp[1]}</em>
                </div>
                <div class="tuan-time" endtime="">
                    剩余：
                    <em>
                    <script>
                    
                    </script>
                    </em>
                </div>
            </div>
            <div class="tuan-top-right">
                <a href="javascript:void(0)" class="tuan-bgimg">
                    <img src="images/index/tuan_2.jpg">
                </a>
            </div>
        </div>
        <!-- 隐藏层 -->
        <div class="tuan-pro-intro">
            <div class="tuan-pro-picside">
                <div class="tuan-pro-pic">
                    <img src="images/index/tuan_2.jpg">
                </div>
                <p class="ware-detail">
                    <a href="javascript:void(0)">评测</a>
                    <span class="line">|</span>
                    <a href="javascript:void(0)">视频</a>
                    <span class="line">|</span>
                    <a href="javascript:void(0)">点评</a>
                </p>
            </div>
            <div class="tuan-intro-text">
                <h4>魅蓝 note6 64GB</h4>
                <div class="tuan-intro-price">
                    团购价：<span class="tuan-red-color">¥--</span>
                </div>
                <div class="tuan-intro-price">
                    电商参考价：¥1299.00
                </div>
                <a href="" target="_blank" class="tuan-go-btn">去团购</a>
            </div>
        </div>
    </div>`  
    }
    $(".tuan-details").html(html)
    // 不同的倒计时
    setInterval(()=>{
        $(".tuan-time em").each(
            function(i,el){
                // console.log(el,i)
                $(el).html(countDown(arr[i][2]))
            }
        );
    },1000)
});

//智选
$(()=>{
    var $li = $(".noopsyche-focus_tab li");
    $li.mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active")
        var i = $(this).index();
        // console.log(i)
        $(".noopsyche-focus_slide_list").children(`:eq(${i})`).addClass("active").siblings().removeClass("active")
    })
})