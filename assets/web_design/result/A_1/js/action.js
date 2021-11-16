$(document).ready(function(){
    $('#header nav > ul > li').mouseover(function(){
        $('.submenu').stop().slideDown();
    });
    $('#header nav > ul > li').mouseout(function(){
        $('.submenu').stop().slideUp();
    });

    var idx = 0;
    setInterval(function(){
        idx -= 300;
        if(idx<-600) idx = 0;
        $('#main .slide ul').animate({top:idx + 'px'},1000);
    },3000);

    $('#main .contents .board h2').click(function(){
        $('#main .contents .board h2').removeClass('on');
        $(this).addClass('on');
        $('#main .contents .board ul').hide();
        $(this).next().show();
    });

    $('#main .board ul.b01 li').eq(0).click(function(){
        $('.modal').show();
    });
    $('.modal button').click(function(){
        $('.modal').hide();
    });
});