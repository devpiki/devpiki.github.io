$(document).ready(function(){
    $('#header nav>ul>li').mouseover(function(){
        $(this).find('ul.submenu').stop().slideDown();
    });
    $('#header nav>ul>li').mouseout(function(){
        $(this).find('ul.submenu').stop().slideUp();
    });

    var idx = 0;
    setInterval(function(){
        $('#main .slide ul li').eq(idx).fadeOut();
        idx += 1;
        if(idx>2) idx = 0;
        $('#main .slide ul li').eq(idx).fadeIn();
    }, 3000);

    $('#main .contents .board h2').click(function(){
        $('#main .contents .board h2').removeClass('on');
        $('#main .contents .board ul').hide();
        $(this).addClass('on');
        $(this).next().show();
    });
    $('#main .contents .board ul.b01 li').eq(0).click(function(){
        $('.modal').show();
    });
    $('.modal button').click(function(){
        $('.modal').hide();
    });
});