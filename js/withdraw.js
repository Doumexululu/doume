//提现金额大于100
$(".tixian-btn").click(function(){
    var money = $(".money-input").val();
    if (money < 100 || money == "") {
        $(".roule1").css("color","red");
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
    console.log(moneys);
    if (moneys < 100 || moneys == "") {
        $(".roule1").css("color","red");
        return false;
    }else {
        $(".enter-money-num").html(" ¥ " + moneys);
        $(".yanzheng").css("display","block");
    }
});
