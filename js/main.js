$(function(){

    $(".select_language").click(function(){
        $(this).toggleClass("show");
    })//click

    $(".sub").hide();

    $(".gnb_menu>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(".gnb_menu").stop().animate({height: "70px"}, 500)
    }, function(){
        $(this).find(".sub").stop().slideUp();
        $(".gnb_menu").stop().animate({height: "50px"}, 500)
    })

    // visual_wrap 영역

    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:true
    })//

    $(".recommend_tab a").click(function(e){
        e.preventDefault();
        $(".recommend_tab a").removeClass("on");
        $(this).addClass("on");

        n = $(this).index();
        console.log("n :", n )

        $(".recommend_list_wrap > ul").removeClass("act");
        $(".recommend_list_wrap > ul").eq(n).addClass("act");
    
    })//click



})//jqeury