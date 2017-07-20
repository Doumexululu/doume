$(function(){
	$(".return span").click(function(){
   		window.history.go(-1);
	});

	function fixCon(img,con){
		var html='<div class="fix"><div class="fix-tishi"><img src="' + img +'" alt=""><div class="tishi-con">' + con +
		'</div></div></div>'
	}

})