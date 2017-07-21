$(function(){
	$(".return span").click(function(){
   		window.history.go(-1);
	});

	function fixCon(img,con){
			//对-class1
			//错-class2
			//提示-class3
			var html='<div class="fix"><div class="fix-tishi"><div class="' + img + '"></div><div class="tishi-con">' + con +
			'</div></div></div>';
		$("body").append("html");
	}

})