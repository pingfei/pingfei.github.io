function loadPage(pageNo){
    let pageSize = 12
    let query = {pageNo , pageSize}
    let search = location.search
    if(search!==""){
		query.kw=decodeURI(search.split("=")[1]);
    }
    $.get("data/products/getProductsByKw.php",query).then(result=>{
        let {pageNo, pageCount, data}=result
        console.log({pageNo, pageCount, data})
        let html = ""
        for(var p of data){
            // console.log(p)
            html += `<li class="products-item">
                <a href="product-details.html?lid=${p.lid}">
                    <img src="images/products/products_1.jpg">
                </a>
                <p class="products-item-title">
                    <a href="product-details.html?lid=${p.lid}">
                        ${p.title}
                    </a>
                </p>
                <p class="products-price">
                    ¥<em>${p.price}</em>
                </p>
                <div calss="volume">
                    <span>销量数<em>0</em></span>
                    <span class="evaluation rt">评价数<em>0</em></span>
                </div>
                <p class="shop-name">
                    <a href="#">华开电脑专业店</a>
                </p>
                <p class="total-volume">
                    店铺总成交<em>0</em>笔
                </p>
                <span class="guanzhu">
                    <i class="iconfont icon-jiahao"></i>
                    关注
                </span>
            </li>`
        }
        // console.log($("#products-list"))
        $("#products-list").html(html)
        html = ` <a href="javascript:void(0)" class='${pageNo==1?"pages_prev disabled":"pages_prev"}'>
            <i class="iconfont icon-xiangzuojiantou"></i>
            上一页
            </a> `
        for(var i=1;i<=pageCount;i++){
                html+=` <a href="javascript:void(0);" class=${pageNo==i?"current":""}>${i}</a> `
            }
        html+=` <a href="javascript:void(0);" class='${pageNo==pageCount?"pages_next disabled":"pages_next"}'>
            下一页
            <i class="iconfont icon-xiangyoujiantou"></i>
        </a> `;
        $("#products-pages").html(html)
        $("#mini-page em").html(`${pageNo}/${pageCount}`)
        if(pageNo==pageCount){
            $("#mini-page .prev").removeClass("disabled")
            $("#mini-page .next").addClass("disabled")
        }else if(pageNo==1){
            $("#mini-page .next").removeClass("disabled")
            $("#mini-page .prev").addClass("disabled")
        }else{
            $("#mini-page .next").removeClass("disabled")
            $("#mini-page .prev").removeClass("disabled")
            
        }
    })
}
$(()=>{
    loadPage()
})
$(()=>{//分页
    $("#products-pages").on("click","a",function(){
        // console.log(1)
        var height = $(`main`).offset().top
        // console.log(height)
        let $tar = $(this)
        if(!$tar.is(".disabled")&&!$tar.is(".current")){
            let i = 1
            if($tar.is(".pages_prev")){
                i = parseInt($("#products-pages .current").html())-1
            }else if($tar.is(".pages_next")){
                i = parseInt($("#products-pages .current").html())+1
            }else{
                i = parseInt($tar.html())
            }
            loadPage(i)
            $("html").animate({scrollTop:`${height}px`},200);
        }
    })
    $("#mini-page").on("click","a",function(){
        // console.log(1)
        var height = $(`main`).offset().top
        // console.log(height)
        let $tar = $(this)
        if(!$tar.is(".disabled")){
            let i = parseInt($("#products-pages .current").html())
            if($tar.is(".prev")){
                i -= 1
            }else if($tar.is(".next")){
                i +=1
            }
            loadPage(i)
            $("html").animate({scrollTop:`${height}px`},200);
        }
    })
});