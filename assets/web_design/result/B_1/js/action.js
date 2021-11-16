$(document).ready(function(){
    $('#header nav>ul>li').mouseover(function(){
        $('#header nav .submenu').stop().slideDown();
    });
    $('#header nav>ul>li').mouseout(function(){
        $('#header nav .submenu').stop().slideUp();
    });

    var idx = 0;
    setInterval(function(){
        idx -= 1200;
        if(idx < -2400) idx = 0;
        $('#main .slide ul').animate({left:idx+'px'}, 1000);
    }, 3000);

    $('#main .contents .board h2').click(function(){
        $('#main .contents .board h2').removeClass('on');
        $('#main .contents .board ul').hide();
        $(this).addClass('on');
        $(this).next().show();
    });

    $('#main .contents .board ul.b01 li').eq(0).find('a')
    .click(function(){
        $('.modal').show();
    });

    $('.modal button').click(function(){
        $('.modal').hide();
    });
});