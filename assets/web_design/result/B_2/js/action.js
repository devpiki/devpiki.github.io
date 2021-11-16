$(document).ready(function(){
    $('#header nav>ul>li').mouseover(function(){
        $('#header nav .submenu').stop().slideDown();
        $('#header .nav-bg').stop().slideDown();
    });
    $('#header nav>ul>li').mouseout(function(){
        $('#header nav .submenu').stop().slideUp();
        $('#header .nav-bg').stop().slideUp();
    });
    //#main .slide ul
    var idx = 0;
    setInterval(function(){
        idx -= 300;
        if(idx<-600)idx=0;
        $('#main .slide ul').animate({top:idx+'px'},1000);
    },3000);

    $('#main .contents .board ul li').eq(0).find('a').click(function(){
        $('.modal').show();
    });
    $('.modal button').click(function(){
        $('.modal').hide();
    });
});