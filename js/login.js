//点击提交登录
	$("#submit").click(function(){
		// console.log("fdsafd");
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
			alert("请输入手机号");
			return false;
		}

		var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

		if (!reg.test(mobile)) {
			alert("手机号码格式不对！");
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
    			alert("请输入验证码");
    			return;
    		}
    		if(code.length!=6){
    			alert("请输入正确的验证码");
    			return;
    		}


    	};
        
