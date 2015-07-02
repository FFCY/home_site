// JavaScript Document
$(function(){
  $(".newlist:not(.default)").hide();

    $(".newsBlock .block-title .ti").each(function (index) {
        
var i=index;
$(this).click(function () {
         
              
                $(".newlist").hide();
				  $(".newlist:eq(" + i + ")").show();
				  $(".newsBlock .block-line .flag").stop().animate({"left":i*75},500);
				   $(this).addClass("select").siblings().removeClass("select");
           
        })
    })
	/*news*/
 $(".w-s:not(.default)").hide();
$(".w_screenBlock .block-title .ti").each(function (index) {        
var i=index;
$(this).click(function () {     
$(".w-s").hide();
  $(".w-s:eq(" + i + ")").show();
$(".w_screenBlock .block-line .flag").stop().animate({"left":i*75},500);
$(this).addClass("select").siblings().removeClass("select");
           
        })
    })
/*wallpaper*/
 $(".s-m:not(.default)").hide();
$(".s_mediaBlock .block-title .ti").each(function (index) {        
var i=index;
$(this).click(function () {     
$(".s-m").hide();
  $(".s-m:eq(" + i + ")").show();
$(".s_mediaBlock .block-line .flag").stop().animate({"left":i*75},500);
$(this).addClass("select").siblings().removeClass("select");
           
        })
    })
/*role*/
 $('#role-banner').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 8000,
        auto: true,
        pager: true,
        controls: false

    })	
/*banner*/
$('#banner-banner').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 5000,
        auto: true,
        pager: true       

    })	
/*tes*/
$('#features-banner').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 2000,
        auto: true,
        pager: true,
        controls: true

    })

	$(".featuresBlock .bx-next,.featuresBlock .bx-prev").hide();
$(".featuresBlock").hover(function(){$(".featuresBlock .bx-next,.featuresBlock .bx-prev").fadeIn('fast');},function(){$(".featuresBlock .bx-next,.featuresBlock .bx-prev").fadeOut('fast');})


$(".roleBlock .pager-1 span").html("力士");
$(".roleBlock .pager-2 span").html("幽冥");
$(".roleBlock .pager-3 span").html("侠客");
$(".roleBlock .pager-4 span").html("舞姬");


$("#role-banner li a").hover(function(){$(this).animate({'left':'-320px'},300)},function(){$(this).animate({'left':0},100)})

})


/* 友情*/
/* 友情链接*/
      var speed = 20;
      var wait = 2500;
      var list = 1;
      var myT;
      var step = 2;
      demo2.innerHTML = demo1.innerHTML;
      var h = parseInt(demo1.getElementsByTagName("li")[0].offsetHeight);
      var dis = h * 2;
      function Marquee() {
          if (demo2.offsetTop - demo.scrollTop <= 0) {
              demo.scrollTop -= demo1.offsetHeight; list = 1;
          }
          else {
              demo.scrollTop += step;
              dis -= step;
              if (dis <= 0) {
				//  console.log(dis);
				  
                  list++;
                  clearInterval(MyMar);
                  myT = setTimeout(again, wait);
                  dis = h * 2;
              }

          }
      }
      function again() {
          MyMar = setInterval(Marquee, speed)
      }
      var MyMar = setInterval(Marquee, speed)
      demo.onmouseover = function () { clearInterval(MyMar); clearTimeout(myT); }
      demo.onmouseout = function () { MyMar = setInterval(Marquee, speed) }