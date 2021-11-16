$(document).ready(function(){
    $('#header nav>ul>li').mouseover(function(){
        $('#header nav ul.submenu').stop().slideDown();
        $('#header .nav-bg').stop().slideDown();
    });
    $('#header nav>ul>li').mouseout(function(){
        $('#header nav ul.submenu').stop().slideUp();
        $('#header .nav-bg').stop().slideUp();
    });

    var idx = 0;
    setInterval(function(){
        idx -= 1200;
        if(idx<-2400) idx = 0;
        $('#main .slide ul').animate({left:idx+'px'},1000);
    }, 3000);

    $('#main .board ul li').eq(0).click(function(){
        $('.modal').show();
    });
    $('.modal button').click(function(){
        $('.modal').hide();
    });
});