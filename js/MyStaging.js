//顶部状态选项栏未读消息中屏适应
// var itemWidth = $(".staging-item").width();
// var readRight = itemWidth * ;
// console.log(readRight);
// $(".staging-item").children(".unread").css({right:readRight});
$(".close-uninfo").click(function(){
    $('body').css("overflow","scroll");
    $(this).parents(".uninfo").css("display","none");
});
$(".staging-detail-foo").click(function(){
    $('body').css("overflow","hidden");
    $(this).parents(".staging-list").siblings(".uninfo").css("display","block");
});
$(".repayment").click(function(){
    $('body').css("overflow","hidden");
    $(this).parents(".staging-list").siblings(".makesure-repay").css("display","block");
});
