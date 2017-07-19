$(function(){
	// 倒计时
	var countdown=60;
	$(".huoqu").click(function(){
		$(this).hide();
		$(".daoshu").show();
		time();
	})
	function time(){
		setInterval(function(){
			if (countdown !== 0) {
			countdown--;
			$(".daoshu").text(countdown + "s");
			}
			else {
				$(".huoqu").show();
				$(".daoshu").hide();
				clearInterval();
				return;
			}
		},1000);
	}

})