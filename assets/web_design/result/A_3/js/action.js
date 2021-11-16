$(document).ready(function(){
    $('#header nav>ul>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('#header nav>ul>li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    var idx = 0;
    setInterval(function(){
        $('#main .slide ul li').eq(idx).fadeOut();
        idx += 1;
        if(idx>2)idx = 0;
        $('#main .slide ul li').eq(idx).fadeIn();
        
    },3000);

    $('#main .contents section.board h2').click(function(){
        $('#main .contents section.board h2').removeClass('on');
        $('#main .contents section.board ul').hide();
        $(this).addClass('on');
        $(this).next().show();
    });
    $('#main .contents section.board ul.bo01 li').eq(0).find('a').click(function(){
        $('.modal').show();
    });
    $('.modal .modal-pop button').click(function(){
        $('.modal').hide();
    });

});

