// JavaScript Document
var myi=0;
$(function () {


    $(".navigation").bind('mouseover', function () {

        $('ul.subNavse').show();
    }).bind('mouseleave', function () {

        $('ul.subNavse').hide();
    });

    $(".subNavse").bind('mouseover', function () {

        $('ul.subNavse').show();
    }).bind('mouseleave', function () {

        $('ul.subNavse').hide();
    });


    $("<span>|</span>").insertAfter(".blockg_con a");
    var hash = document.location.hash;
    hash = hash.substring(1);
    //alert(hash);
    if ($(".newsInfo_title") && hash != ""&& hash!="###") {

        $(".newsInfo_title li a.select").removeClass("select");
        $("." + hash + " a").addClass("select");

        $(".newsInfo_title li a:not(.more a,.vi_ti)").each(function (index) {
            var i = index;
            if ($(this).text() == $(".newsInfo_title li a.select").text()) {
                $(".newsInfo>div").removeClass("default");
                $(".newsInfo>div:eq(" + i + ")").addClass("default");
            }
        });
    }

    $(".newsInfo>div:not(.default,#audio .newsInfo>div)").hide();

    $(".newsInfo_title li a:not(.more a,.vi_ti)").each(function (index) {
        var i = index;


        $(this).mouseover(function () {
            if ($(".newsInfo_title .ch").length > 0) {
            } else {
                $(this).addClass("select").parent().siblings().find("a").removeClass("select");
                $(".newsInfo>div").hide();
            }
            $(".newsInfo>div:eq(" + i + ")").show();
        })
    })


  

    $(".Acc_navi h3").each(function (index) {
        var i = index;
        $(this).click(function () {
            if (!$(".Acc_navi .subn:eq(" + i + ")").hasClass("select")) {
                $(".select").slideUp().removeClass("select");
				
                $(".Acc_navi .subn:eq(" + i + ")").slideDown().addClass("select");
            }
        })

    })

    $(".sw h3>a").each(function (index) {
        var i = index;
		$(".sw>div:eq(" + 1 + ")").hide();
        $(this).mouseover(function () {
            $(this).addClass("select").siblings().removeClass("select");
            $(".sw>div").hide();
            $(".sw>div:eq(" + i + ")").show();
        })
    })

    $(".role ul li").hover(function () { $(this).find(".r_txt,.r_bg").show(); }, function () { $(this).find(".r_txt,.r_bg").hide(); })
    $(".h_fast_con>div:not(.default,.hf_down)").hide();
    $(".fl_reg_title li").each(function (index) {
        var i = index;
        $(this).click(function () {

            $(this).addClass("select").siblings().removeClass("select");
            $(".h_fast_con>div:not(.hf_down)").hide();
            $(".h_fast_con>div:eq(" + i + ")").show();
        })
    })
    $(window).resize(function () {
        if ($(document).width() > 1440) {

            $(".fastreg_small").hide();
            $("#h_fastReg").show();
        } else {
            $("#h_fastReg").hide();
            $(".fastreg_small").show();
        };

    })
    $(document).ready(function () {
        if ($(document).width() > 1440) {

            $(".fastreg_small").hide();
            $("#h_fastReg").show();
        } else {
            $("#h_fastReg").hide();
            $(".fastreg_small").show();
        };
    });
    /*if($(window).width()>1480){
    $(".fastreg_small").show();
    $("#h_fastReg").hide();
    }else{
    $("#h_fastReg").show();
    $(".fastreg_small").hide();				
    }*/

    $(document).scroll(function () {

        var wstop = $(document).scrollTop();
        var mtop = $("#gnavi").offset().top;
        var mleft = $("#gnavi").offset().left;

        if (wstop > mtop + 55) {
            $("#info_navi").fadeIn();
            $("#info_navi").css({ "left": mleft });

        } else {
            $("#info_navi").fadeOut();

        }

        if ($(document).scrollTop() > 380 && myi < 1) {
            $("#h_fastReg").fadeIn();
            $(".fastreg_small").fadeOut();
            myi++;
        }
    })
    $(window).scroll(function () {

        if ($(window).scrollTop() > 380 && myi < 1) {
            $("#h_fastReg").fadeIn();
            $(".fastreg_small").fadeOut();
            myi++;
        }
    })

    $(".hf_close").click(function () {


        $(".fastreg_small").show();
        $("#h_fastReg").fadeOut();

    })
    $(".fastreg_small").click(function () {
        $("#h_fastReg").fadeIn();
        $(".fastreg_small").fadeOut();

    })
    $("#info_navi").html($("#gnavi").html());
    $(window).scroll(function () {




        if ($(window).scrollTop() > 200) {
            $("#up").fadeIn();
        } else {
            $("#up").fadeOut();
        }

    })
    $("#up").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);

    })





    $("#h_v1").click(function () {

        getVcastr().videoPlay();
        getVcastr().gotoVideoAt(0)
    })
    $("#h_v2").click(function () {


        getVcastr().videoPlay();

        getVcastr().gotoVideoAt(1)
    })
    $("#h_v3").click(function () {
        getVcastr().videoPlay();
        getVcastr().gotoVideoAt(2)
    })
    $("#h_v4").click(function () {
        getVcastr().videoPlay();
        getVcastr().gotoVideoAt(3);
    })

    var vnum = $(".list li").length;
    $(".list li").each(function (index) {
        var i = index;

        $(this).click(function () {
            $(".v_head").text($(this).find("span").text());
            if (i < vnum / 2) {
                getVcastr().videoPlay();
                getVcastr().gotoVideoAt(i);
            } else {
                getVcastr().videoPlay();
                getVcastr().gotoVideoAt(i - vnum / 2);
            }
        });
    });



})
	
function doZoom(size){
document.getElementById('article_content').style.fontSize=size+'px';
}	


 function getVcastr() {
            if (navigator.appName.indexOf("Microsoft") != -1) {
                return window["vcastr3"];
            } else {
                return document["vcastr3"];
            }
        }


   
