$(function(){
	// 下一步

	$("input").bind('input propertychange', function() {
	    var input1 = $(".input1").val();
		var input2 = $(".input2").val();
		var input3 = $(".input3").val();
		var input4 = $(".input4").val();
		var input5 = $(".input5").val();
		var input6 = $(".input6").val();
		var input7 = $(".input7").val();
		if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "" && input5 !== "" && input6 !== "" && input7 !== "") {
			$(".next").addClass("next-js");
			// 点击下一步的时候请用 next-js
		    $(".next-js").click(function(){
		    	// 跳转到下一页面
		    })
		} else {
        	$(".next").removeClass("next-js");
        }
    });
    // 点击继续借款 用null2


})