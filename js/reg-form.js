

var email_Flag = false;
var phone_Flag = false;
var mobile_Flag = false;
var qq_Flag = false;
var syt_Flag = false;

String.prototype.endWith=function(s){
	  if(s==null||s==""||this.length==0||s.length>this.length)
	     return false;
	  if(this.substring(this.length-s.length)==s)
	     return true;
	  else
	     return false;
	  return true;
	 }

String.prototype.startWith=function(s){
	  if(s==null||s==""||this.length==0||s.length>this.length)
	   return false;
	  if(this.substr(0,s.length)==s)
	     return true;
	  else
	     return false;
	  return true;
	 }



//验证是否为空
function verifyIsNull(info_span, str) {
	var flag = false;
	str = TrimStr(str);//去掉空格
	if (str == "") {
		//info_span.innerHTML = "\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u5185\u5bb9\u4e3a\u7a7a\u3002";
		flag = true;
	}
	return flag;
}

//去除空格
function TrimStr(str){
	if (str == null) {
		return str
	}
	return str = str.replace(/^\s+|\s+$/g,"");
}

//验证手机号码（必填注册）
function verifyMobile(id,tipid,emid) {
	var strMobile = $('#'+id+'').val();
	if (verifyIsNull(tipid, strMobile)) {//验证
		//showInputWrong(tipid);
		showWrong(tipid,'还没有输入手机号呢',id);
		showSpanWrong(emid);
		return false;
	}
	var reg0 =/^1(3|4|5|8)\d{9}$/;
	if (reg0.test(strMobile)) {
		//ajax条用后台方法验证是否被注册。 
		 showInputRight(id);
		showSpanRight(emid);
		return true;
		//var flag = AjaxPhone(id,msgId,strMobile);
	}else{
		showWrong(tipid,'格式错误',id);
		showSpanWrong(emid);
		return false;
	}
	
}


//验证用户名（必填注册）
function verifyUname(id,tipid,msgId) {
	var strUname = $('#'+id+'').val();
	if (verifyIsNull(msgId, strUname)) {//验证用户为空
		//showInputWrong(tipid);
		showWrong(tipid,'还没有输入用户名呢',id);
		showSpanWrong(msgId);
		return false;
	}

   var reg0 = /^[a-zA-Z0-9_]{6,16}$/
    if (reg0.test(strUname)) {
       showInputRight(id);
		showSpanRight(msgId);
		return true;
    }
    else {
		showWrong(tipid,'格式错误，6-22位字符',id);
		showSpanWrong(msgId);
		return false;
    }
	
	
}


/**
 * 判断注册的时,账号安全资料是否都为null
 * 都是null 返回 true
 */
function regIsNotAllNull(){
	var sn = $('#sn').val();
	var certNumber = $('#certNumber').val();
	var securityQuestion = $('#securityQuestion').val();
	var securityAnswer = $('#securityAnswer').val();
	if(TrimStr(sn) == '' && TrimStr(certNumber) == '' && TrimStr(securityQuestion) == '' && TrimStr(securityAnswer) == ''){
		return true;
	}else{
		return false;
	}
}
/**
 *  通行证占用后自由选取（不显示显示）
 *  
 */
function unShowRegNote(){
	$('#cn_info').empty();
	$('#cn_info').removeClass();
	$('#cn_note').css('display','none');
	$('#cn_infos').empty();
}

/**
 * 显示错误信息
 * @param id
 * @param msg
 * @return
 */
function showWrong(tipid,msg,id){

		$('#'+tipid+'').empty();
		$('#'+tipid+'').removeClass();
		$('#'+tipid+'').addClass('tiperr').show();
		$('#'+tipid+'').val(msg);
		$('#'+id+'').hide();
		
		
	}
/**
 * input 错误样式
 */
function showInputWrong(id){
	if('securityQuestion' != id){
		$('#'+id+'').empty();
		$('#'+id+'').removeClass();
		$('#'+id+'').addClass('input error_input').show();
	}else{
		$('#'+id+'').removeClass();
		$('#'+id+'').addClass('option error_input').show();
	}
}
/**
 * 显示正确信息 (带文字描述)
 * @param id
 * @param msg
 * @return
 */
function showRightText(id,msg){
	$('#'+id+'').empty();
	$('#'+id+'').removeClass();
	$('#'+id+'').addClass('note note-right').show();
	var spannew = $('<span>'+msg+'</span>');
	spannew.appendTo($('#'+id+''));
}
/**
 * 显示正确信息 (不带文字描述)
 * @param id
 * @return
 */
function showRight(id){
	$('#'+id+'').empty();
	$('#'+id+'').removeClass();
	$('#'+id+'').addClass('note note-right').show();
	var spannew = $('<span>&nbsp;</span>');
	spannew.appendTo($('#'+id+''));
}
/**
 * input正确样式
 */
function showInputRight(id){
			
		$('#'+id+'').removeClass();
		//$('#'+id+'').addClass('input').show();
	
}
/**

/**
 * 显示input
 */
function showHideInput(id,id2){
	$('#'+id+'').hide();
	$('#'+id2+'').show().focus();
}
/**

 * 显示null
 * @param id
 * @return
 */
function removeShow(id){
	$('#'+id+'').empty();
	$('#'+id+'').removeClass();
	var spannew = $('');
	spannew.appendTo($('#'+id+''));
}

function showNote(id,meg){
	$('#'+id+'').empty();
	$('#'+id+'').removeClass();
	$('#'+id+'').addClass('note').show();
	var spannew = $('<span>'+meg+'</span>');
	spannew.appendTo($('#'+id+''));
}
/**
 * showNormal
 * @param id
 * @return
 */
function showNormal(id,msg){
	$('#'+id+'').empty();
	$('#'+id+'').removeClass();
	$('#'+id+'').addClass('note note-normal').show();
	var spannew = $('<span>'+msg+'</span>');
	spannew.appendTo($('#'+id+''));
}


function showSpanWrong(id){
$('#'+id+'').removeClass();
$('#'+id+'').addClass('err');
	
	}
function showSpanRight(id){
$('#'+id+'').removeClass();
$('#'+id+'').addClass('cor');
	
	}


/**
 * 密码验证
 * @param id
 * @return
 */
function validatePasswordForRegR(pwId,thisId,repwTipid){
	var password= $('#'+pwId+'').val();
	var pass= $('#'+thisId+'').val();
	if($.trim(pass)==''){
		showInputWrong(thisId);
		showWrong(repwTipid,'呦！不能为空哦！');
		return false;
	}
if($.trim(pass)!=$.trim(password)){
	showInputWrong(thisId);
		showWrong(repwTipid,'呦两次密码不一致哦！');
		return false;
	}else{
		showInputRight(thisId);
	showRight(repwTipid);
	return true;
		}
	}
 
 
function validatePasswordForReg(thisId,tipid,msgId){
	var returnArray = ['true','呦！还没有输入密码哦','呦！密码位数不对哦','呦！密码格式不对哦','呦！密码不能和用户名相同哦','呦！密码太简单啦'];
	var password = $('#'+thisId+'').val();

	//var cn = $('#'+cnId+'').val();
	var passwordPattern = /^[^, '"]+$/;
	if($.trim(password)==''){
		
		showWrong(tipid,returnArray[1],thisId);
		showSpanWrong(msgId);
		
		return false;
	}
	if(password.length<4||password.length>16){
		showWrong(tipid,returnArray[2],thisId);
		showSpanWrong(msgId);		
		return false;
	}
	if(!passwordPattern.test(password)){
		
		showWrong(tipid,returnArray[3],thisId);
		showSpanWrong(msgId);		
		return false;
	}/*
	if(password==cn){
		showInputWrong(thisId);
		showWrong(pwinfid,returnArray[4]);
		return false;
	}*/
	if(!checkPasswordSimple(password)){
		showWrong(tipid,returnArray[5],thisId);
		showSpanWrong(msgId);		
		
		return false;
	}
	
	 showInputRight(thisId);
		showSpanRight(msgId);
		return true;
}

function checkPasswords(pass1,pass2,mesg){
	var pass1v = $('#'+pass1+'').val();
	var pass2v = $('#'+pass2+'').val();
	if(pass2v == ''){
		showInputWrong(pass2);
		showWrong(mesg,'呦！还没有输入密码哦');
		return false;
	}else if(pass1v == pass2v){ 
		showInputRight(pass2);
		showRight(mesg);
		return true;
	}else{ 
		showInputWrong(pass2);
		showWrong(mesg,'呦！两次输入的密码不一致呀');
		return false;
	}
}

function validataYZM(id,infoId){
	var returnArray = ['true','呦！输入图片上的文字嘛','呦！您填写的验证码不正确呀'];
	var yzm = $('#'+id+'').val();
	if($.trim(yzm)==''){
		showInputWrong(id);
		showWrong(infoId,returnArray[1]);
		$('#'+id).addClass('input-code');
		return false;
	}
	if(yzm.length!=4 && yzm.length!=5){
		showInputWrong(id);
		showWrong(infoId,returnArray[2]);
		$('#'+id).addClass('input-code');
		return false;
	}
	/**
	var Expression=/[^\u4E00-\u9FA5]/; 
	var objExp=new RegExp(Expression);
	if(objExp.test(yzm)==true){
		showInputWrong(id);
		showWrong('check_info',returnArray[2]);
		return false;
	}
	*/
	showInputRight(id);
	showRight(infoId);
	$('#'+id).addClass('input-code');
	return true;
}
function check_authCode_style(obj){
	var regu =/^([0-9]{6})$/ 
	var re = new RegExp(regu);   
    if (re.test( obj )) {   
      return true;   
    }   
    return false;     	
}
function checkPhoneNumber(phoneId,id,messId){
	var meg = '呦！怎么还不输入短信验证码？';
	if(!CheckIsNull(id,messId,meg)){
		var str = $('#'+id+'').val();
		str = TrimStr(str);
		if(str==null || str.length != 6){
			showInputWrong(id);
			showWrong(messId,'呦！短信验证码只能是6位数字哦');
			return false;
		}else{
			var phone = $('#'+phoneId+'').val();
			phone = TrimStr(phone);
			if(!CheckCodeIsOld(phone,str,messId)){
				showInputWrong(id);
				return false;
			}else{
				showInputRight(id);
				showRight(messId);
				return true;
			}
		}
	}else{
		return false;
	}
}
/**
 * 验证NULL 后 回填信息
 * @param id 验证ID
 * @param messId  回填ID
 * @param meg 回填信息
 * @return 是返回false
 */
function CheckIsNull(id,messId,meg){
	var flag = false;
	var str = $('#'+id+'').val();
	str = TrimStr(str);//去掉空格
	if (str == "") {
		unShowRegNote();
		showInputWrong(id);
		showWrong(messId,meg);
		flag = true;
	}else{
		unShowRegNote();
		showInputRight(id);
		//showRight(messId);
	}
	return flag;
}

function CheckCodeIsOld(phone,code,msgId){
	var str = '呦！您输入的短信验证码不正确';
	var postData = '';
	var returnStr = ''
	//异步请求
	$.ajax({   
	type: "POST",
	url: "/register/checkCodeIsRight.do?securityPhone="+phone+"&checkCode="+code,
	data: postData,
	async:false,
	success: function(data){
		eval("var json ="+data);
		if(json.msg == 'true'){//可以使用
			returnStr = true;
        }else{ //过期
        	showWrong(msgId,str);
			returnStr = false;
        }
	  }     
    });
    return returnStr;
}

/**
 * 验证手机是否被占用
 * @param id 手机input ID
 * @param msgId 错误信息ID
 * @param phoneNum 手机号码
 * @return
 */
function AjaxPhone(id,msgId,phoneNum){  
	var returnArray = ["呦！已经有人用过这个号码了哦",'系统繁忙,请稍后再试！'];
	var postData = {securityPhone:phoneNum};
	var returnStr = ''
	//异步请求
	$.ajax({   
	type: "POST",
	//url: "/register/checkPhoneIsUsed.aspx",
	data: postData,
	async:false,
	success: function(data){
		eval("var json ="+data);
		if(json.msg == 'false'){//可以使用
			showInputRight(id);
			showRight(msgId);
			returnStr = true;
        }else if(json.msg == 'true'){//被占用
        	showInputWrong(id);
        	showWrong(msgId,returnArray[0]);
			returnStr = false;
        }else{ //系统忙
        	showInputWrong(id);
        	showWrong(msgId,returnArray[1]);
			returnStr = false;
        }
	  }     
    });
    return returnStr;
}

/**
 * 检查密码是不是简单密码
 * @param id 
 * @param megId 
 */
  
function onFcousText(id,megId,emId){
	

	var returnArray = ['该手机号码将作为您的登录通行证','请输入您手机收到的短信验证码,短信验证码为6位数字',
					   '身份信息用来确认账号归属权使用','证件号码必须与您证件姓名相符,乐游不会泄露您的任何隐私资料',
					   '由5-16位字母、数字及_组成,首字符必须是字母或数字,字母只能小写',
					   '除空格,逗号,单双引号以外的任意字符,长度为4—16位',
					   '请再次输入密码',
					   '请输入您常用邮箱地址,推荐使用QQ邮箱',
					   '请输入图片上的文字','根据《网络游戏管理暂行办法》的规定要求，您的账号将被纳入防沉迷系统'];
	var value = $('#'+id+'').val();			
	if(megId == 'mobile_info'){
		showInputRight(id);
		showNormal(megId,returnArray[0]);
	}else if(megId == 'code_info'){
		showInputRight(id);
		showNormal(megId,returnArray[1]);
	}else if(megId.startWith('sn_info')){
		showInputRight(id);
		showNormal(megId,returnArray[2]);
	}else if(megId.startWith('certNumber_info')){
		showInputRight(id);
		showNormal(megId,returnArray[3]);
	}else if(megId == 'cn_info'){
		unShowRegNote();
		showInputRight(id);
		showNormal(megId,returnArray[4]);
	}else if(megId.startWith('passwd_info')){
		showInputRight(id);
		showNormal(megId,returnArray[5]);
	}else if(megId.startWith('again_info')){
		showInputRight(id);
		showNormal(megId,returnArray[6]);
	}else if(megId == 'email_info'){
		showInputRight(id);
		showNormal(megId,returnArray[7]);
	}else if(megId.startWith('checkPasswd_info')){
		showInputRight(id);
		showNormal(megId,returnArray[8]);
		$('#'+id).addClass('input-code');
	}
	if(megId.indexOf('_young')!=-1){
		showInputRight(id);
		showNormal(megId.substring(0,megId.indexOf('_young')),returnArray[9]);
	}
	if(megId=="msPwd_phone"){
		showInputRight(id);
		showNormal(megId,'请先点击免费获取验证码,短信验证码申请10分钟内有效，每分钟可重新获取一次。');
		}
	if(id=="uname"){
		showHideInput(megId,id);
		$('#'+emId+'').removeClass();
		}
	if(id=="pwd_gx"){	
		
			showHideInput(megId,id);
		$('#'+emId+'').removeClass();
			}
		if(id=="certNumber_gx"){
			
			showHideInput(megId,id);
		$('#'+emId+'').removeClass();
			
			}
	if(id=="umobile"){
			
			showHideInput(megId,id);
		$('#'+emId+'').removeClass();
			
			}
		if(id=="email"){
		
		showHideInput(megId,id);
		$("#tip_email").removeClass();
		$('#'+emId+'').removeClass();
			}
			
			showHideInput(megId,id);
		$('#'+emId+'').removeClass();
		
}
function unFcousText(id,megId){
	var value = $('#'+id+'').val();
	removeShow(megId);
}
/**
 * 检查密码是不是简单密码
 * @param password
 * @return 是返回false
 */
function checkPasswordSimple(password){
	var simpleFlagSame = true; // 是否是单一字符
	var simpleFlagToBig = true; // 是否是顺序的
	var simpleFlagToSmall = true;// 是否是逆序的
	var passwordLength =password.length;
	for(var i =0;i<passwordLength-1;i++){
		if(password.charCodeAt(i)!=password.charCodeAt(i+1)){
			simpleFlagSame = false;
			break;
		}
	}
	for(var i =0;i<passwordLength-1;i++){
		if(password.charCodeAt(i)+1!=password.charCodeAt(i+1)){
			simpleFlagToBig = false;
			break;
		}
	}
	for(var i =0;i<passwordLength-1;i++){
		if(password.charCodeAt(i)-1!=password.charCodeAt(i+1)){
			simpleFlagToSmall = false;
			break;
		}
	}
	if(simpleFlagSame||simpleFlagToBig||simpleFlagToSmall){
		return false;
	}
	return true;
}

function reloadCheckCode(){
	var value = parseInt(Math.random()*10000);
	
}

function validataMspwd (thisId,tipId){
	$('#'+tipId+'').empty();
	$('#'+tipId+'').removeClass();
	$('#'+tipId+'').addClass('note note-normal').hide();
	}








/**
 * 验证身份证以及包含是否成年的判断
 * @param idcard
 * @param infoid
 * @return
 */
 /**
 * 验证身份证以及包含是否成年的判断
 * @param idcard
 * @param infoid
 * @return
 */
function checkIdcardAndAge(idcard,infoid) {
	if (checkIdcardNotNull(idcard,infoid)) {
		//取值
		var idcard = $('#'+idcard+'').val();
		idcard=TrimStr(idcard);
		var oneyy;
		var onemm;
		var onedd;
		var twoyy;
		var twomm;
		var twodd;
		if (idcard.length==15) {
			oneyy = "19" + idcard.substring(6,8);
			onemm = idcard.substring(8,10);
			onedd = idcard.substring(10,12);
		} else if(idcard.length==18) {
			oneyy = idcard.substring(6,10);
			onemm = idcard.substring(10,12);
			onedd = idcard.substring(12,14);
		}
		var nowdate = new Date();
		var birthdate = new Date(oneyy,onemm,onedd);
		var age = Math.abs((birthdate.getTime()-nowdate.getTime())/86400000);
		if(age < 365 * 18) {
			onFcousText(idcard,infoid+'_young');
		}
		
	}
}
/**
 *	验证身份证(必填验证)
 *	@param idcard
 *	@param infoid
 *	return 
 */
function checkIdcardNotNull(id,tipid,emid){
	var Errors=new Array(
			"ture",
			"呦！身份证号位数不对哦",
			"这个身份证号是假的吧",
			"呦！还没有输入身份证号呀"
			);
	var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
	var idcard,Y,JYM;
	var S,M;
	var thisid = idcard;
	var idcard_array = new Array();
	
	//取值
	idcard = $('#'+id+'').val();
	var idcard=TrimStr(idcard);
	
	//验证空
	if(idcard == ''){
		showWrong(tipid,Errors[3],id);
		showSpanWrong(emid);
		return false;		
	}
	
	idcard_array = idcard.split("");
	//地区检验
	if(area[parseInt(idcard.substr(0,2))]==null) {
		showWrong(tipid,Errors[2],id);
		showSpanWrong(emid);
		return false;		
	
	}
	if (idcard.substr(0,6) == "000000" || idcard.substr(0,6) == "111111" || idcard.substr(0,6) == "222222" || idcard.substr(0,6) == "333333" || idcard.substr(0,6) == "444444" || idcard.substr(0,6) == "555555" || idcard.substr(0,6) == "666666" || idcard.substr(0,6) == "777777" || idcard.substr(0,6) == "888888" || idcard.substr(0,6) == "999999")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "123456" || idcard.substr(0,6) == "234567" || idcard.substr(0,6) == "345678" || idcard.substr(0,6) == "456789" || idcard.substr(0,6) == "567890" || idcard.substr(0,6) == "012345" || idcard.substr(0,6) == "543210" || idcard.substr(0,6) == "432109" || idcard.substr(0,6) == "321098" || idcard.substr(0,6) == "210987" || idcard.substr(0,6) == "109876" || idcard.substr(0,6) == "098765" || idcard.substr(0,6) == "987654" || idcard.substr(0,6) == "876543" || idcard.substr(0,6) == "765432")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "121212" || idcard.substr(0,6) == "131313" || idcard.substr(0,6) == "141414" || idcard.substr(0,6) == "151515" || idcard.substr(0,6) == "161616" || idcard.substr(0,6) == "171717" || idcard.substr(0,6) == "181818" || idcard.substr(0,6) == "191919" || idcard.substr(0,6) == "101010")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "212121" || idcard.substr(0,6) == "232323" || idcard.substr(0,6) == "242424" || idcard.substr(0,6) == "252525" || idcard.substr(0,6) == "262626" || idcard.substr(0,6) == "272727" || idcard.substr(0,6) == "282828" || idcard.substr(0,6) == "292929" || idcard.substr(0,6) == "202020")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "313131" || idcard.substr(0,6) == "323232" || idcard.substr(0,6) == "343434" || idcard.substr(0,6) == "353535" || idcard.substr(0,6) == "363636" || idcard.substr(0,6) == "373737" || idcard.substr(0,6) == "383838" || idcard.substr(0,6) == "393939" || idcard.substr(0,6) == "303030")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "414141" || idcard.substr(0,6) == "424242" || idcard.substr(0,6) == "434343" || idcard.substr(0,6) == "454545" || idcard.substr(0,6) == "464646" || idcard.substr(0,6) == "474747" || idcard.substr(0,6) == "484848" || idcard.substr(0,6) == "494949" || idcard.substr(0,6) == "404040")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "515151" || idcard.substr(0,6) == "525252" || idcard.substr(0,6) == "535353" || idcard.substr(0,6) == "545454" || idcard.substr(0,6) == "565656" || idcard.substr(0,6) == "575757" || idcard.substr(0,6) == "585858" || idcard.substr(0,6) == "595959" || idcard.substr(0,6) == "505050")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "616161" || idcard.substr(0,6) == "626262" || idcard.substr(0,6) == "636363" || idcard.substr(0,6) == "646464" || idcard.substr(0,6) == "656565" || idcard.substr(0,6) == "676767" || idcard.substr(0,6) == "686868" || idcard.substr(0,6) == "696969" || idcard.substr(0,6) == "606060")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "717171" || idcard.substr(0,6) == "727272" || idcard.substr(0,6) == "737373" || idcard.substr(0,6) == "747474" || idcard.substr(0,6) == "757575" || idcard.substr(0,6) == "767676" || idcard.substr(0,6) == "787878" || idcard.substr(0,6) == "797979" || idcard.substr(0,6) == "707070")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "818181" || idcard.substr(0,6) == "828282" || idcard.substr(0,6) == "838383" || idcard.substr(0,6) == "848484" || idcard.substr(0,6) == "858585" || idcard.substr(0,6) == "868686" || idcard.substr(0,6) == "878787" || idcard.substr(0,6) == "898989" || idcard.substr(0,6) == "808080")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
  	if (idcard.substr(0,6) == "919191" || idcard.substr(0,6) == "929292" || idcard.substr(0,6) == "939393" || idcard.substr(0,6) == "949494" || idcard.substr(0,6) == "959595" || idcard.substr(0,6) == "969696" || idcard.substr(0,6) == "979797" || idcard.substr(0,6) == "989898" || idcard.substr(0,6) == "909090")  {showWrong(tipid,Errors[2],id);showSpanWrong(emid);return false;}
	//身份号码位数及格式检验
	switch(idcard.length){
	case 15:
	if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
		ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
	} else {
		ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
	}
	if(ereg.test(idcard)) {
		 showInputRight(id);
		showSpanRight(emid);
		return true;
	} else {
		showWrong(tipid,Errors[2],id);
		showSpanWrong(emid);
		return false;		
	}
	break;
	case 18:
	//18位身份号码检测
	//出生日期的合法性检查
	//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
	//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
	if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){
		ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
	} else {
		ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
	}
	if(ereg.test(idcard)){//测试出生日期的合法性
	//计算校验位
		S =   (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
			+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
			+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
			+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
			+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
			+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
			+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
			+ parseInt(idcard_array[7]) * 1
			+ parseInt(idcard_array[8]) * 6
			+ parseInt(idcard_array[9]) * 3 ;
		Y = S % 11;
		M = "F";
		JYM = "10X98765432";
		M = JYM.substr(Y,1);//判断校验位
		if(M == idcard_array[17] || (M == 'X' && idcard_array[17] == 'x')) { //检测ID的校验位
			 showInputRight(id);
		showSpanRight(emid);
		return true;
		}else {
			showWrong(tipid,Errors[2],id);
		showSpanWrong(emid);
		return false;	
		}
	}else {
		showWrong(tipid,Errors[2],id);
		showSpanWrong(emid);
		return false;	
	}
	break;
	default:
	showWrong(tipid,Errors[1],id);
		showSpanWrong(emid);
		return false;	
	break;
	}
}

/*--email  --*/
/**
 * 本地校验邮箱用户名
 * 
 * @param obj
 * @return
 */
function validateEmailLocal(obj){
	
	var returnArray = ['true','还没有输入邮箱呢','呦！您输入的常用邮箱不正确哦','呦！已经有人使用这个邮箱了哦','雅虎将停止邮件服务，请使用其他邮箱'];
    var removeEmail = ["yahoo.com.cn","yahoo.cn","yahoo.com"];  // 需要排除的邮箱
	var emailPattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/;
	if(obj.value==''){
		showWrong("email_tip",returnArray[1],obj.id);
		showSpanWrong("tip_email");
		
		
		return false;
	}
	if(obj.value.length<3||obj.value.length>49){
		howWrong("email_tip",returnArray[2],obj.id);
		showSpanWrong("tip_email");
		
		return false;
	}
	if(!emailPattern.test(obj.value)){
		howWrong("email_tip",returnArray[2],obj.id);
		showSpanWrong("tip_email");
		return false;
	}
	
	
		showInputRight(obj.id);
		showSpanRight("tip_email");
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
/*function validateEmailAjax(obj){
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
}*/


	    $(document).ready(function(){
	            if(document.getElementById('emailwrap')){
	                PassportSC_modifyed2.emailValidate = function(emailInput){
	                    //本地校验邮箱
	                    if(validateEmailLocal(emailInput)){
	                       // validateEmailAjax(emailInput);
	                    };
	                };
	                PassportSC_modifyed2.showNumbers = 6;
	                PassportSC_modifyed2.emailInputID = "email";
	                PassportSC_modifyed2.drawPassport(document.getElementById('emailwrap'));
	            }
	        });
