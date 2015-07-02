/**
 * 本地校验邮箱用户名
 * 
 * @param obj
 * @return
 */
function validateEmailLocal(obj){
	var returnArray = ['true','呦！还没有输入常用邮箱呢','呦！您输入的常用邮箱不正确哦','呦！已经有人使用这个邮箱了哦','雅虎将停止邮件服务，请使用其他邮箱'];
    var removeEmail = ["yahoo.com.cn","yahoo.cn","yahoo.com"];  // 需要排除的邮箱
	var emailPattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/;
	if(obj.value==''){
		showInputWrong(obj.id);
		showWrong(obj.id+'_info',returnArray[1]);
		
		return false;
	}
	if(obj.value.length<3||obj.value.length>49){
		showInputWrong(obj.id);
		showWrong(obj.id+'_info',returnArray[2]);
		
		return false;
	}
	if(!emailPattern.test(obj.value)){
		showInputWrong(obj.id);
		showWrong(obj.id+'_info',returnArray[2]);
		transformInterface(obj.value,'email',gametype,0,returnArray[2]);
		return false;
}
if (emailPattern.test(obj.value)) {
    if (validateEmailAjax(obj.value)) {
        showInputWrong(obj.id);
        showWrong(obj.id + '_info', returnArray[3]);
        transformInterface(obj.value, 'email', gametype, 0, returnArray[3]);
        return false;
    }
}
	
	
		showInputRight(obj.id);
		showRight(obj.id+'_info');
	return true;
}

function isInBanEmails(str){
	str = str.toLowerCase();
	for(var i=0;i<banEmailsArray.length;i++){if(banEmailsArray[i]==str){return true;}}
	return false;
}

/**
 * Ajax校验邮箱用户名
 */
function validateEmailAjax(obj){
	var cn = obj.value;
	var returnArray = ['true','呦！已经有人使用这个邮箱了哦','系统繁忙，请稍后再试！'];
	var emailValidate = false;
	$.ajax({
		url:'/emailReg/canReg.do',
		data:'email='+cn,
		method:'post',
		async:false,
		success:function(msg){
			msg = $.trim(msg);
			if(msg=='fail1'||msg=='fail2'||msg=='fail3'){
				showWrong(obj.id+'_info', returnArray[1]);
				showInputWrong(obj.id);
				transformInterface(obj.value,'email',gametype,0,returnArray[1]);
				emailValidate = false;
			}else if(msg=='exception'){
				showWrong(obj.id+'_info', returnArray[2]);
				showInputWrong(obj.id);
				transformInterface(obj.value,'email',gametype,0,returnArray[2]);
				emailValidate = false;
			}else{
				showRight(obj.id+'_info');
				emailValidate = true;
				transformInterface(obj.value,'email',gametype,1,"");
			}
		}
	});
		return emailValidate;
}


	    $(document).ready(function(){
	            if(document.getElementById('emailwrap')){
	                PassportSC_modifyed2.emailValidate = function(emailInput){
	                    //本地校验邮箱
	                    if(validateEmailLocal(emailInput)){
	                        validateEmailAjax(emailInput);
	                    };
	                };
	                PassportSC_modifyed2.showNumbers = 6;
	                PassportSC_modifyed2.emailInputID = "email";
	                PassportSC_modifyed2.drawPassport(document.getElementById('emailwrap'));
	            }
	        });

	    
	    /**
	     * 邮箱注册验证并提交表单
	     * 
	     * @param form
	     * @return
	     */

	    function tosubmitEmailReg(){ 
			var obj = $('#read_email').attr('checked');
			var emaiObj = document.getElementById('email');
			if(!obj){
				alert('您还没有阅读《乐游用户协议》');
				return false;
			}else if(!validateEmailLocal(emaiObj)){//本地格式校验邮箱
				return false;
			}else if(!validatePasswordForReg('passwd_email','email','passwd_info_email')) {//密码
				return false;
			}else if(!checkSnNotNull('sn_email','sn_info_email')){
				return false;
			}else if(!checkIdcardNotNull('certNumber_email','certNumber_info_email')){
				return false;
			}else if(!validataYZM('checkPasswd_email','checkPasswd_info_email')){
				return false;
			}else if(!validateEmailAjax(emaiObj)){ //ajax校验邮箱是否被占用
				return false;
			}else {
					var personflag = "";
					var cookies = document.cookie.split(';'); 
			        for (var i = 0; i < cookies.length; i++) { 
			        var cookie = $.trim(cookies[i]); 
			     	if (cookie.substring(0, 7) == 'tongji=') { 
			     		personflag = 1;
			            $("#emailTongji").val("normal," + cookie.substring(7, cookie.length));
			   			} 
					} 
					if(1 != personflag){
						$("#emailTongji").val("normal,");
					}
					return true;
			}	
			
		}
	    
	    