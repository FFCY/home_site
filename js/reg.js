/*!
 * Reg Page Javascript
 * Author：
 * Create Date: 2013.07.15
 * Last Date: 2013.07.16
 */

$(function(){
	var $tab = $("#sidebar ul li");
	var $content = $("#content > div");
	regType="email";
	$tab.click(function(){
		var index = $tab.index($(this));
		$(this).find('a').addClass("current").parent('li').siblings().find('a').removeClass("current");
		$($content.get(index)).show().siblings().hide();
		return false; 
	})
	if(regType=='person') {
		$("#regPersonal").click();
	}else if(regType=='email'){
		$("#regEmail").click();
	}else {
		$("#regPhone").click();
	}
	//验证码
	$('.close').click(function(){
		$('.pop-msg').hide();
	})

	$('#msg-info').click(function(){
		$('.pop-msg').show();
	})
	reloadCheckCode();
	
})