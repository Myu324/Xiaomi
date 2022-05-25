let id = localStorage.getItem("id")
let username=localStorage.getItem("username")
$(".username").text(username)
if(username==null){
    $(".username").html(`<em>您好,请登录</em>`)
}
$(".username").click(function(){
    location.href="login.html"
})
$(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        params: {
            id: id
        }
    }).then((resData) => {
        let data = resData.data;
        console.log(data);
        let str = ""
        data.data.forEach(item => {
            str += `
            <li data-id="${item.pid}">
              <input type="checkbox" class="check">
              <div class="item-img"><img src="${item.pimg}"></div>
              <div class="item-name">${item.pname}</div>
              <div class="item-price"><span>${item.pprice}</span><i>元</i></div>
              <div class="sub">-</div>
              <input type="text" class="item-num" value="${item.pnum}">
              <div class="add">+</div>
              <div class="product-price"><span>${item.pnum * item.pprice}</span><i>元</i></div>
              <div class="delete">x</div>
            </li>
            `
        })
        $(".cartList").html(str);
        //全选
        $("#checkAll").change(function () {
            $(".check").prop("checked", $("#checkAll").prop("checked"))
            let sum=0;
            $(".check:checked").each(function(){
                sum+=Number($(this).parent().find(".product-price span").text());
                $(".totalPrice span").text(sum)
            })
            if($(".check:checked").length==0){
                $(".totalPrice span").text(0)
            }
        })
        //单选
        $(".check").change(function () {
            if ($(".check:checked").length == $(".check").length) {
                $("#checkAll").prop("checked", true)
            } else {
                $("#checkAll").prop("checked", false)
            }
            if($(".check:checked").length==0){
                $(".totalPrice span").text(0)
            }
            let sum=0;
            $(".check:checked").each(function(){
                sum+=Number($(this).parent().find(".product-price span").text());
                $(".totalPrice span").text(sum)
            })
        })
        //加
        $(".add").click(function () {
            let count = $(this).parent().find(".item-num").val();
            count++;
            $(this).parent().find(".item-num").val(count);
            let price=count*$(this).parent().find(".item-price span").text()
            $(this).parent().find(".product-price span").text(price);
            $(".product-price span").val()
            axios.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                params: {
                    uid: id,
                    pid: $(this).parent().data("id"),
                    pnum: count
                }
            }).then((resData) => {
                let data = resData.data;
                console.log(data);
            })
            let sum=0;
            $(".check:checked").each(function(){
                sum+=Number($(this).parent().find(".product-price span").text());
                $(".totalPrice span").text(sum)
            })
        })

        //减
        $(".sub").click(function () {
            let count = $(this).parent().find(".item-num").val();
            count--;
            if (count == 0) {
                count = 0;
            }
            $(this).parent().find(".item-num").val(count)
            let price=count*$(this).parent().find(".item-price span").text()
            $(this).parent().find(".product-price span").text(price);
            $(".product-price span").val()
            axios.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                params: {
                    uid: id,
                    pid: $(this).parent().data("id"),
                    pnum: count
                }
            }).then((resData) => {
                let data = resData.data;
                console.log(data);
            })
            let sum=0;
            $(".check:checked").each(function(){
                sum+=Number($(this).parent().find(".product-price span").text());
                $(".totalPrice span").text(sum)
            })
        })

        //删除
        $(".delete").click(function(){
            $(this).parent().remove();
            axios.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",{
                params:{
                    uid:id,
                    pid: $(this).parent().data("id"),
                }
            }).then((resData)=>{
                let data=resData.data;
                console.log(data);
            })
            let sum=0;
            $(".check:checked").each(function(){
                sum+=Number($(this).parent().find(".product-price span").text());
                $(".totalPrice span").text(sum)
            })
            if($(".check:checked").length==0){
                $(".totalPrice span").text(0)
                $("#checkAll").prop("checked", false)   
            }
        })
    })
})