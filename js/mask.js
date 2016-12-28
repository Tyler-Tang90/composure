//关闭
function removeElement(colse){
    document.getElementById(colse).style.display="none";
}
//Home/Exclusive Topics 点击左右滚动
$(function(){

	$li1 = $(".exc_nav .exc_array");
	$window1 = $(".exc .exc_w");
	$left1 = $(".exc .prv");
	$right1 = $(".exc .next");

	$window1.css("width", $li1.length*407);

	var lc1 = 0;
	var rc1 = $li1.length-3;

	$left1.click(function(){
		if (lc1 < 1) {
			// alert("已经是第一张图片");
			return 0;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=407px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			// alert("已经是最后一张图片");
			return 0;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=407px'}, 1000);
	});

})

$(function(){  // 遮罩层向上滑动
	$('#exc .exc_array').hover(function(){
		$('.lycos',this).stop().animate({
			height:'223px'
		});
	},function(){
		$('.lycos',this).stop().animate({
			height:'0'
		});
	});
});

//Home/Environment 点击左右滚动
$(function(){

	$li2 = $(".env_nav .env_array");
	$window2 = $(".env .env_w");
	$left2 = $(".env .prv");
	$right2 = $(".env .next");

	$window2.css("width", $li2.length*880);

	var lc2 = 0;
	var rc2 = $li2.length-1;

	$left2.click(function(){
		if (lc2 < 1) {
			// alert("已经是第一张图片");
			return 0;
		}
		lc2--;
		rc2++;
		$window2.animate({left:'+=880px'}, 1000);
	});

	$right2.click(function(){
		if (rc2 < 1){
			// alert("已经是最后一张图片");
			return 0;
		}
		lc2++;
		rc2--;
		$window2.animate({left:'-=880px'}, 1000);
	});

})

//Home/Hot Topics 点击左右滚动
$(function(){

	$li3 = $(".topics_nav .topics_array");
	$window3 = $(".topics .topics_w");
	$left3 = $(".topics .prv");
	$right3 = $(".topics .next");

	$window3.css("width", $li3.length*880);

	var lc3 = 0;
	var rc3 = $li3.length-1;

	$left3.click(function(){
		if (lc3 < 1) {
			// alert("已经是第一张图片");
			return 0;
		}
		lc3--;
		rc3++;
		$window3.animate({left:'+=880px'}, 1000);
	});

	$right3.click(function(){
		if (rc3 < 1){
			// alert("已经是最后一张图片");
			return 0;
		}
		lc3++;
		rc3--;
		$window3.animate({left:'-=880px'}, 1000);
	});

})

//Services/Recent Posts 点击左右滚动
$(function(){

	$li4 = $(".posts_nav .posts_array");
	$window4 = $(".posts .posts_w");
	$left4 = $(".posts .prv");
	$right4 = $(".posts .next");

	$window4.css("width", $li4.length*1118);

	var lc4 = 0;
	var rc4 = $li4.length-1;

	$left4.click(function(){
		if (lc4 < 1) {
			// alert("已经是第一张图片");
			return 0;
		}
		lc4--;
		rc4++;
		$window4.animate({left:'+=1118px'}, 1000);
	});

	$right4.click(function(){
		if (rc4 < 1){
			// alert("已经是最后一张图片");
			return 0;
		}
		lc4++;
		rc4--;
		$window4.animate({left:'-=1118px'}, 1000);
	});

})

// Services/Recent Projects 遮罩层向上滑动
$(function(){
	$('#projects li').hover(function(){
		$('.text',this).stop().animate({
			height:'240px'
		});
	},function(){
		$('.text',this).stop().animate({
			height:'75px'
		});
	});
});
