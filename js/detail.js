let pid = location.search.split("=")[1];
let uid=localStorage.getItem("id")
$(function () {
    $(".entercart").click(function(){
        location.href="cart.html"
    })
    axios.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        params: {
            id: pid,
        }
    }).then((resData) => {
        let data = resData.data.data;
        console.log(data.pdesc);
        $(".container h2").text(data.pname);
        $(".inner-left").html(`<img src='${data.pimg}'>`)
        $(".product-name").text(data.pname);
        $(".product-desc").text(data.pdesc);
        $(".product-price").text(parseInt(data.pprice) + "元")
    })
    let count=1;
     $(".addcart").click(function(){
        axios.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
            params:{
                uid:uid,
                pid:pid,
                pnum:count
            }
        }).then((resData)=>{
            let data=resData.data;
            console.log(data);
        })
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