$(document).ready(function(){
	$("body").prepend('<div class="alert-info"><div class="alert-info-cont"></div></div>');
});
//提现金额大于100
$(".tixian-btn").click(function(){
    var money = $(".money-input").val();
    if (money < 2 || money == "") {
        // $(".roule1").css("color","red");
        $(".alert-info-cont").html('提现金额每次需大于2元');
        $(".alert-info").show().delay(1000).hide(0);
        return false;
    }else {
        $(".enter-money-num").html(" ¥ " + money);
        $(".yanzheng").css("display","block");
    }
});
//银行卡选择弹层出现
$(".enter-arrow").click(function(){
    $(this).parents(".main-width").siblings(".makesure-repay").css("display","block");
});
//清空输入
$(".clear-num").click(function(){
	$(this).siblings(".yanzheng-main").val("");
});
//关闭
$(".off").click(function(){
    $(this).parents(".yanzheng").css("display","none");
})
//
$(".money-btn").click(function(){
    var moneys = $(".lave span").html();
    // console.log(moneys);
    if (moneys < 2 || moneys == "") {
        // $(".roule1").css("color","red");
        $(".alert-info-cont").html('提现金额每次需大于2元');
        $(".alert-info").show().delay(1000).hide(0);
        return false;
    }else {
        $(".enter-money-num").html(" ¥ " + moneys);
        $(".yanzheng").css("display","block");
    }
});
//仿单选按钮效果
$(".click-radio").click(function(){
    $(this).find(".found-radio").addClass("radio-center");
    var index =  $(this).index();
    var imgsrc = $(this).find(".backcard-tit-left img").attr("src");
    var back = $(this).find(".back-info .back").html();
    var backid = $(this).find(".back-info .backid").html();
    $(this).parents(".makesure-repay").siblings(".main-width").find(".backcard-tit-left img").attr("src", imgsrc);
    $(this).parents(".makesure-repay").siblings(".main-width").find(".backcard-tit-left .back-info span").eq(0).html(back);
    $(this).parents(".makesure-repay").siblings(".main-width").find(".backcard-tit-left .back-info span").eq(1).html(backid);
    $(this).siblings(".click-radio").find(".found-radio").removeClass("radio-center");
});
//还款弹层消失
$(".close-click").click(function(){
    $(this).parents(".makesure-repay").css("display","none");
});
