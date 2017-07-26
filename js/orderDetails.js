//仿单选按钮效果
$(".click-radio").click(function(){
    // alert(123);
    $(this).find(".found-radio").addClass("radio-center");
    $(this).siblings(".click-radio").find(".found-radio").removeClass("radio-center");
});
//还款弹层消失
$(".close-click").click(function(){
    $(this).parents(".makesure-repay").css("display","none");
});
//还款弹层出现
$(".repayment-liji").click(function(){
    $(this).parents(".order-detail-list").siblings(".makesure-repay").css("display","block");
});
$(".close-makesure").click(function(){
    $(this).parents(".makesure-repay").css("display","none");
    $(".jumping").css("display","block");
});
