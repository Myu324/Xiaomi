let id=localStorage.getItem("id")
$(function(){
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php",{
        params:{
            pagesize:20,
            pagenum:0,
            uid:id
        }
    }).then((resData)=>{
        let data=resData.data;
        let str="";
        data.data.forEach(item=>[
            str+=`
            <li class="items">
            <a href="detail.html?pid=${item.pid}">
            <div class="item-img"><img src="${item.pimg}"></div>
            <div class="item-name">${item.pname}</div>
            <div class="item-price">${item.pprice}元</div>
            <div class="small-img"><img src="${item.pimg}"></div>
            </a>
            </li>
            `
        ])
        $(".list-inner").html(str);
    })

    $(".entercart").click(function(){
        location.href="cart.html"
    })
})

$(function () {
    $(".header-nav").hover(function () {
        $(".nav-menu").stop().slideDown();
        $(".nav-list>li").hover(function () {
            let index = $(this).index();
            $(".nav-menu>li").eq(index).show().siblings().hide();
        })
    }, function () {
        $(".nav-menu").stop().slideUp();
    })
})