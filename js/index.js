$(".entercart").click(function(){
    location.href="cart.html"
})
//下拉选择框
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
//轮播图

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//手机列表
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 0,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-phone-list").html(str);
        $(".brick-phone-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})

//智能穿戴模块
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 1,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-watch-list").html(str);
        $(".brick-watch-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})

//笔记本模块
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 2,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-pad-list").html(str);
        $(".brick-pad-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})

//家电模块
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 3,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-appliance-list").html(str);
        $(".brick-appliance-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})
//生活电器模块
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 4,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-domele-list").html(str);
        $(".brick-domele-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})

//厨房电器模块
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 5,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-cook-list").html(str);
        $(".brick-cook-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})

//智能家居模块
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 6,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-automation-list").html(str);
        $(".brick-automation-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})

//运动出行模块
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        params: {
            uid: 119306,
            pagesize: 7,
            pagenum: 7,
        }
    }).then((resData) => {
        let data = resData.data;
        let str = "";
        data.data.forEach(item => {
            str += `
                <li>
                <a href="detail.html?pid=${item.pid}">
                <div class="item-img"><img src="${item.pimg}"></div>
                <div class="item-name">${item.pname}</div>
                <div class="item-desc">${item.pdesc}</div>
                <div class="item-price">${parseInt(item.pprice)}元</div>
                </a>
                </li>
                `
        })
        $(".brick-vehicle-list").html(str);
        $(".brick-vehicle-list").append("<li class='item-more'><a><em class='iconfont icon-youjiantou1'></em><div class='more'>浏览更多<p>热门</p></div></a></li>");
    })
})

$(function(){
    $(window).scroll(function () {
        let st = $(this).scrollTop();
        if (st > 300) {
            $(".goTop").fadeIn();
        } else {
            $(".goTop").fadeOut();
        }
    });
    $(".toolbar a:last").click(function () {
        $(window).scrollTop(0);
    });
})
