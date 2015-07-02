/**
 * else if(!checkPhoneNumber('securityPhone','checkCode','code_info')) {//短信验证码
		return false;
	}
 * 
 */

var canCheckCodeInput = false;
function tosubmitPhoneReg(){
	var obj = $('#read_phone').attr('checked');
	if(!obj){
		alert('您还没有阅读《畅游用户协议》');
		return false;
	}else if(!verifyMobile('securityPhone','mobile_info')){//验证手机
		return false;
	}else if(!validatePasswordForReg('passwd_phone','securityPhone','passwd_info_phone')) {//密码
		return false;
	}else if(!checkSnNotNull('sn_phone','sn_info_phone')){	//姓名
		return false;
	}else if(!checkIdcardNotNull('certNumber_phone','certNumber_info_phone')){ //身份证
		return false;
	}else if(!validataYZM('checkPasswd','span_checkPasswd_phone')){
		return false;
	}else {
			var phoneflag = "";
			var cookies = document.cookie.split(';'); 
        	for (var i = 0; i < cookies.length; i++) { 
       	 		var cookie = $.trim(cookies[i]); 
     			if (cookie.substring(0, 7) == 'tongji=') { 
     				phoneflag = 1;
           			$("#phoneTongji").val("normal," + cookie.substring(7, cookie.length));
   				} 
			} 
			if(1 != phoneflag){
				$("#phoneTongji").val("normal,");
			}
			return true;
	}
}

function sendMessage(){	
	var phoneNum = $("#securityPhone").val();
	var token = $("#phoneToken").val();
	if(verifyMobile('securityPhone','mobile_info')){ //验证手机

		//将短信验证码输入框设置为可输入
	    $('#checkCode').removeAttr("readonly");
	    canCheckCodeInput = true;
	  //将按钮置灰
        $('#theHref').removeClass("get-new-code");
        $('#theHref').addClass("get-code");
        document.getElementById("getMessage").innerHTML = "重新获取验证码";
		
		var postData = {securityPhone:phoneNum,phoneToken:token};
		//异步请求
		$.ajax({   
		type: "POST",
		url: "/register/sendPhoneNumber.do",
		data: postData,
		success: function(data){
			eval("var json ="+data);
			if(json.msg == 'ok'){
				showNormal('code_info','短信已发送,可能会有1分钟延迟,请注意查收！');
	        }else if(json.msg == 'error'){
	        	showWrong('code_info','该手机号码已超过短信限制,请稍后重新点击获取！');
	        }else if(json.msg == 'invalid'){
	        	alert('因业务调整，手机短信服务暂停，请您采用其他方式注册');
	        } else{
	        	showWrong('code_info','系统繁忙,请稍后获取！');
	        }
			countDown(60);
		}     
	    });
		//60秒倒计时
	    function countDown(num){
	        var n = num;
	        document.getElementById("theHref").onclick = function (){return false;};
	        function btnShow(){
	            n--;
	            if(n<=0){
	            	document.getElementById("getMessage").innerHTML = "免费获取验证码";
	            	window.clearInterval(timer1);
	            	document.getElementById("theHref").onclick = sendMessage;
	            	//将按钮置回原来的颜色
                    $('#theHref').removeClass("get-code");
                    $('#theHref').addClass("get-new-code");
	            }else{
	            	document.getElementById("getMessage").innerHTML = "重新获取验证码("+n+"s)";
	            }
	        }
	        var timer1 = window.setInterval(btnShow,1000);
	    }
	}
}

function checkCodeMesg(id,megId){   
    var returnArray = ['请先获取短信验证码'];
    if(!canCheckCodeInput){
    	$('#'+id).attr("readonly","true");
        showInputRight(id);
        showNormal(megId,returnArray[0]);
        return false;
    }  
    return true;     
}