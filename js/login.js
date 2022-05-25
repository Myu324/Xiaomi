$(".regist-title").click(function(){
    location.href="regist.html"
})
$(".regist").click(function(){
    axios.get("http://jx.xuzhixiang.top/ap/api/login.php",{
        params:{
            username:$(".username").val(),
            password:$(".password").val(),
        }
    }).then((resData)=>{
        let data=resData.data;
        console.log(data);
        if(data.code==0){
            $(".warning").show()
        } else{
            $(".warning").hide();
            localStorage.setItem("id", data.data.id)
            localStorage.setItem("username", data.data.username)
            localStorage.setItem("token",data.data.token)
            location.href="index.html"
        }
    })
})
$(".logo-warp").find("img").click(function(){
    location.href="index.html"
})