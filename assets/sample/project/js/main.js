
/*주메뉴*/
var $devWidth;
var $limitSize=768;
var $bnnNum=0;
var $book_w;
$(document).ready(function() {
/* 디바이스 사이즈 체크 */
$devWidth=$("body").width();
$(window).resize(function(){
	$devWidth=$("body").width();
})

	$(".gnblist > li > a").on("mouseover focus",function() {
		  if($devWidth <$limitSize) return false;
			$(".gnblist ul").hide();
			$(this).next().show();

			$(".gnblist > li > a").css({
				'height':'29px',
				'background':'none'
			});

			$(this).css('height','32px');
			$(this).css('background','url("images/over_icon.gif") no-repeat center bottom');
	});

	$("#gnb").mouseleave(function(){
			if($devWidth <$limitSize) return false;
			$(".gnblist ul").stop().slideUp(50);
			$(".gnblist > li > a").css({
				'height':'29px',
				'background':'none'
			});
	})

	/*전체메뉴*/
	$(".allmenu_view a").click(function(e){
		e.preventDefault();
		$(".allmenu_view").slideUp(10,function(){
			$("#allMenu_box").slideDown("slow");
		})
	});

	$(".all_close").click(function(e){
		e.preventDefault();
		$("#allMenu_box").slideUp("slow",function(){
			$(".allmenu_view").slideDown(50);
		})
	});

	
	/*탭메뉴*/
	$(".t1 a, .t2 a").on("focus click",function(e) {
		e.preventDefault();
		$(".item1, .item2").hide();
		$(this).parent().next().show();

		$("#newbooks-news h2 img").each(function(){
			$(this).attr("src",$(this).attr("src").replace("_over.gif",".gif"));
		});
		$btnImg=$(this).children("img");
		$btnImg.attr("src",$btnImg.attr("src").replace(".gif","_over.gif"));
	})

	

/*click&touch 슬라이드 배너*/
	
	
	$(".prev").click(function(){
		if($bnnNum<=0) return false;
		$bnnNum--;
			$book_w=$("#recomm_book").width();
			$("#book_frame").animate({left:-$book_w*$bnnNum},300,function(){
					$("#book_roll img").attr("src","images/state_out.png");
					$("#book_roll img").eq($bnnNum).attr("src","images/state_over.png");	
			});
	})
	$(".next").click(function(){
		if($bnnNum>=1) return false;
		$bnnNum++;
			$book_w=$("#recomm_book").width();
			$("#book_frame").animate({left:-$book_w},300,function(){
				$("#book_roll img").attr("src","images/state_out.png");
				$("#book_roll img").eq($bnnNum).attr("src","images/state_over.png");	
			});
	})

	$("#recomm_book").on("swipeleft",function(){$(".next").click();});
	$("#recomm_book").on("swiperight",function(){$(".prev").click();});

	$(window).on("orientationchange",function(e){
		setTimeout(function(){
			$book_w =$("#recomm_book").width();
			console.log($book_w);
			$("#book_frame").animate({left:-$book_w*$bnnNum},300);
		}, 1);
			
	});
});
