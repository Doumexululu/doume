$(function(){
	$(".box-gray input").bind('input propertychange', function() {
        var _value = $(this).val();
        if (_value !== "") {
        	$(".box-gray").animate({marginTop:40},200);
        	$(".accout").show();
        }
        else {
        	$(".box-gray").animate({marginTop:150},200);
        	$(".accout").hide();
        }
    });
	$(".close").click(function(){
		$(".box-gray input").val("");
		$(".box-gray").animate({marginTop:150},200);
		$(".accout").hide();
	})
})