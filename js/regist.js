$(".regist").click(function () {
    axios.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
        params: {
            username: $(".username").val(),
            password: $(".password").val()
        }
    }).then((resData) => {
        let data = resData.data;
        console.log(data);
        if(data.code==0){
            $(".warning").show();
        } else{
            $(".warning").hide();
            location.href="login.html"
        }
    })
})
$(".login-title").click(function(){
    location.href="login.html"
})
$(".logo-warp").find("img").click(function(){
    location.href="index.html"
})