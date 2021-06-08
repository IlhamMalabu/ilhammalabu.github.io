$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 20){
            $('.nav-bar').css ("background" , "#fff");
            $('.menu-btn').css("color", "#333")
            $('.nav-bar .brand a').css("color", "#333")
            $('.nav-bar .menu li a').css("color", "#333")
        }else{
            $('.nav-bar').css ("background" , "none");
            $('.menu-btn').css("color", "#fff")
            $('.nav-bar .brand a').css("color", "#fff")
            $('.nav-bar .menu li a').css("color", "#fff")
        }
    })
    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.nav-bar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
});

