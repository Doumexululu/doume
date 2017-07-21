$(".js-send").click(function(){
	$(this).css("display","none").siblings(".js-num").removeClass("show-hide");
});
$(".clear-num").click(function(){
	$(this).siblings(".tel-num").val("");
});
// 倒计时
$(function(){
var countdown=60;
$(".js-send").click(function(){
	$(this).hide();
	$(".js-num").show();
	time();

})
function time(){

	var f = setInterval(function(){
	if (countdown !== 0) {
		countdown--;
		$(".js-num").text(countdown + "s");
		}
		else {
			$(".js-send").show();
			$(".js-num").hide();
			clearInterval(f);
			$(".js-num").text(60 + "s");
			countdown = 60;
			return;
		}
	},1000);
}
})
//点击提交登录
	$("#submit").click(function(){
		login();
	});

	//全局获取手机号
	function getMobile(){
		var mobile = $.trim($("#telnumber").val());
		return mobile;
	};

	//校验手机号
	function validateMobile(){

		var mobile = getMobile();

		if (mobile == null || mobile == "") {
			// alert("请输入手机号");
			$(".login-message").children(".login-mess-cont").html("请输入手机号");
			$(".login-message").css({display:"block"}).delay(1000).hide(0);

			return false;
		}

		var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

		if (!reg.test(mobile)) {
			// alert("手机号码格式不对！");
			$(".login-message").children(".login-mess-cont").html("手机号码格式不对！");
			$(".login-message").css({display:"block"}).delay(1000).hide(0);
			$(".tel-num").val("");
			return false;
		}
		return true;
	};
    //登录
    	function login(){

    		if(!validateMobile()){
    			return;
    		}

    		var mobile = getMobile();

    		var code = $("#verifycode").val();


    		if (code == null || code == "") {
    			// alert("请输入验证码");
				$(".login-message").children(".login-mess-cont").html("输入验证码");
				$(".login-message").css({display:"block"}).delay(1000).hide(0);
    			return;
    		}
    		if(code.length!=6){
    			// alert("请输入正确的验证码");
				$(".login-message").children(".login-mess-cont").html("输入正确的验证码");
				$(".login-message").css({display:"block"}).delay(1000).hide(0);
    			return;
    		}


    	};
