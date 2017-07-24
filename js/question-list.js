$(".questions").click(function(){
    $(this).find(".flex1").toggleClass("fontcolor-green");
    $(this).find(".enter-arrow").toggleClass("trans");
    $(this).siblings(".answer").fadeToggle();
});
