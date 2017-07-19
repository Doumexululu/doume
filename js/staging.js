$(function(){
	$(".close").click(function(){
		$(this).parents("li").find("input").val("");
		$(".next").removeClass("next-js");
	})
	// 清空
	$(".null").click(function(){
		$("input").val("");
		$(".next").removeClass("next-js");
	})
	// 下一步

	$("input").bind('input propertychange', function() {
	    var input1 = $(".input1").val();
		var input2 = $(".input2").val();
		var input3 = $(".input3").val();
		var input4 = $(".input4").val();
		if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
			$(".next").addClass("next-js");
			// 点击下一步的时候请用 next-js
		    $(".next-js").click(function(){
		    	$(".fix-box").slideDown();
		    })
		    $(".null2").click(function(){
		    	$(".fix-box").slideUp();
		    })
		} else {
        	$(".next").removeClass("next-js");
        }
    });
    // 点击继续借款 用null2


})