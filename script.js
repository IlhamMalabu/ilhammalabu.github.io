$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 20){
            $('.nav-bar').css ("background" , "#fff");
            $('.nav-bar .brand a').css("color", "#333")
            $('.nav-bar .menu li a').css("color", "#333")
        }else{
            $('.nav-bar').css ("background" , "none");
            $('.nav-bar .brand a').css("color", "#fff")
            $('.nav-bar .menu li a').css("color", "#fff")
        }
    })
});