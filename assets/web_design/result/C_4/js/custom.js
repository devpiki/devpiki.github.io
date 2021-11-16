$(document).ready(function(){
    $('#header nav > ul > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('#header nav > ul > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    var idx = 0;
    setInterval(function(){
        idx -= 800;
        if(idx < -1600) idx = 0;
        $('#main .slide ul').animate({left : idx + 'px'}, 1000);
    }, 3000);

    $('#main .content .board ul li').eq(0).click(function(){
        $('.modal').show();
    });
    $('.modal button').click(function(){
        $('.modal').hide();
    });

});