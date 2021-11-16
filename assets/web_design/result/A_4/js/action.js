$(document).ready(function(){
    $('#header nav>ul>li').mouseover(function(){
        $('#header ul.submenu').stop().slideDown();
        $('#header .nav-bg').stop().slideDown();
    });
    $('#header nav>ul>li').mouseout(function(){
        $('#header ul.submenu').stop().slideUp();
        $('#header .nav-bg').stop().slideUp();
    });
    //#main .slide ul li a img
    var idx = 0;
    setInterval(function(){
        $('#main .slide ul li').eq(idx).fadeOut();
        idx += 1;
        if(idx>2)idx = 0;
        $('#main .slide ul li').eq(idx).fadeIn();
    }, 3000);
    $('#main .contents .board ul li').eq(0).find('a').click(function(){
        $('.modal').show();
    });
    $('.modal button').click(function(){
        $('.modal').hide();
    });
});