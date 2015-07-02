
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


	/*滑动调用*/      
	
	    $('#h_video').bxSlider({
                infiniteLoop: true,
                mode: 'horizontal',
                pause: 2000,
                auto: false,
                pager: false,
                controls: true

            })

    $('#bz').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 2000,
        auto: false,
        pager: false,
        controls: true

    })

    


    $('#jt').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 2000,
        auto: false,
        pager: false,
        controls: true

    })

    $(function () {

        $('#h_role').bxSlider({
            infiniteLoop: true,
            mode: 'horizontal',
            pause: 5000,
            auto: true,
            pager: false,
            controls: true

        })
    })

    $(".cxScroll").bxSlider({
        infiniteLoop: true,
        mode: 'vertical',
        pause: 2000,
        auto: false,
        pager: false,
        controls: true

    })




//延迟加载图片
$(function(){
	$(".lazyImg").lazyload({
effect : "fadeIn"
});
$(".lazyImgC").lazyload({
effect : "fadeIn",
failure_limit : 20
});
$(".lazyImgR").lazyload({
effect : "fadeIn",
skip_invisible : false,
failure_limit :20
});	
var str=$("#banners img:eq(0)").attr("data-original");
$("#banners img:eq(0)").attr("src",str);
	})

    /**---------------------延迟加载--------------------------*/


        var $$ = function (func) {
            var oldOnload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = func;
            } else {
                window.onload = function () {
                    oldOnload();
                    func();
                }
            }
        }
        //调用
        $$(function () {
/*--------------幻灯延迟-----------------------*/	
$("#head_news").attr("src",$("#head_news").attr("data-original"));
	
		//还原src
			$(".bannerImg").each(function () {
    var that = $(this);    
    href = that.attr("data-original");    
     that.attr("src",href);   
})
		//启动banners滑动	
		$('#banners').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 3000,
        auto: true,
        pager: true,
        controls: false

    })
 /*--------------top延迟-----------------------*/  
 var iframeT=$('<iframe  src="http://user.uu661.com/Account/Top.aspx" id="frameTop" height="30" width="1376" scrolling="no" frameborder="0"  ></iframe>')
 $("#leyou_top").append(iframeT);
  var iframeR=$('<iframe src="http://user.uu661.com/Account/Reg.aspx" width="250" height="450" scrolling="no" frameborder="0" allowtransparency="yes"  ></iframe>');
  $("#reg_i").append(iframeR);   

  var homeVideo=$('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="197" height="163" title="新隋唐风云视频"><param name="movie" value="swf/video_home.swf" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed src="swf/video_home.swf" quality="high" wmode="transparent" pluginspage="http：//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="197" height="163"></embed></object>');
  $("#video_home").append(homeVideo); 
 
  });
  /**---------------------延迟加载ed--------------------------*/ 

  
  <!-- <script type="text/javascript">
$(function(){
	
	countDown("2014/6/20 14:00:00",".hour",".minute",".second");


function countDown(time,hour_elem,minute_elem,second_elem){
	
	//if(typeof end_time == "string")
	var end_time = new Date(time).getTime(),//月份是实际月份-1
	
	//current_time = new Date().getTime(),
	sys_second = (end_time-new Date().getTime())/1000;
	var timer = setInterval(function(){
		if (sys_second > 0) {
			sys_second -= 1;
			var day = Math.floor((sys_second / 3600) / 24);
			var hour = Math.floor((sys_second / 3600) % 24);
			var minute = Math.floor((sys_second / 60) % 60);
			var second = Math.floor(sys_second % 60);
			//day_elem && $(day_elem).text(day);//计算天
			$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
		
			$(minute_elem).text(minute<10?"0"+minute:minute);//计算分
			$(second_elem).text(second<10?"0"+second:second);// 计算秒
		} else { 
			clearInterval(timer);
		}
	}, 1000);
}

});


      $("#frameTop").attr('width', $(window).width());
      $(function () {

          var ofTop = $(".content").offset().top;
          if (ofTop < 300) {

              $(".content").css({ "width": "770px", "margin-top": "300px", "float": "left", "height": "970px" });
              $(".left_side").css({ "margin-top": "300px", "background-color": "rgb(248,248,248)", "width": 215, "height": "800px", "position": "relative", "padding-top": "110px" });
          }
          $(".footer").css({ "clear": "both" })
      })


/*弹窗js*/
var flagT=false;
function showDialog(width,height,str){
	var str='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="822" height="392" id="navi3" align="middle" id="vcastr3"><param name="movie" value="swf/vcastr3.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="opaque" /><param name="scale" value="showall" /><param name="menu" value="true" /><param name="devicefont" value="false" /><param name="salign" value=""/><param name="allowScriptAccess" value="sameDomain" /><param name="FlashVars" value="xml=../swf/h_video_auto.xml" /><param name="allowFullscreen" value="true"><!--[if !IE]>--> <object type="application/x-shockwave-flash" data="swf/vcastr3.swf" width="822" height="392"id="vcastr3"><param name="movie" value="vcastr3.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="opaque" /><param name="scale" value="showall" /><param name="menu" value="true" /><param name="devicefont" value="false" /> <param name="salign" value="" /><param name="allowScriptAccess" value="sameDomain" /><param name="FlashVars" value="xml=../swf/h_video_auto.xml" /><param name="allowFullscreen" value="true"><!--<![endif]--><!--[if !IE]>--></object><!--<![endif]--> </object>'
		$(".pop_con").html(str);
		$(".lay").show();
		$(".pop").show();
		flagT=true;
		$("#pop").css({"width":width,"height":height});
		
		resize($(".pop"),$(".lay"));
		
		}

function resize(elemA,elemB){
	
	var brsW=$(window).width();
		var brsH=$(window).height();
		
		//var sclL=$(window).scrollLeft();
		var sclT=$(window).scrollTop();
	
		var curW=elemA.width();
		var curH=elemA.height();
		var left=(brsW-curW)/2;
		var top=(brsH-curH)/2+sclT;
		var doH=$(document.body).height();
		var doW=$(document.body).width();
		elemB.css({"width":doW,"height":doH});
	
			elemA.css({"left":left,"top":top});
		
		elemA.css({"z-index":10000000});
		elemB.css({"z-index":1000000});
	}
$(function(){

	$(document).unbind("keydown.spgl_sp_esc").bind("keydown.spgl_sp_esc",function(e){
			var keyCode = window.event?e.keyCode:e.which;
			if(keyCode==27){  //esc按钮
			$(".pop_con").html('');
							$(".lay").hide();$(".pop").fadeOut();
							flagT=false;
			}
		});
		
	$(".pop a.cl").click(function(){
	$(".lay").hide();$(".pop").fadeOut();
	})
	$(window).scroll(function(){
		resize($(".pop"),$(".lay"));
		})

	
	})	

       