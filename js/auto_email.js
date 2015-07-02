var PassportSC_modifyed2 = {
    domain: "",
    email: "",
    autopad: "",              /* 自动填写域名后缀 */
    selectorTitle: "",        /* 提示语：如请选择邮箱*/
    emailPostfix: false,
    bindDomainSelector: true,
    curDSindex: -1,
    size: 25,
    
    showNumbers:6,              /*显示邮箱联想的最多行数*/
    emailValidate:function(){}, /*验证邮箱函数*/
    emailInputID: false,      /* 邮箱输入的Input框ID*/
    rootElement: false,       /* 根元素，由方法drawPassport传入的*/
    dsElement: false,         /* 用来存储selecter的table*/
    sElement: false,          
    cElement: false,
    dsAnchor: false,
    emailInput: false,
    passwdInput: false,
    
    //自动提示的所有域名的列表
    domainList: ["qq.com","163.com","sohu.com","17173.com","126.com","sina.com","vip.qq.com","hotmail.com","foxmail.com","sogou.com","263.net","gmail.com","msn.com","tom.com","changren.com","139.com","189.cn"],
    getDomain: function()
    {
        //var hostname = document.domain.split('.');
        //var l = hostname.length;
        //if (l <= 2) {
         //   return document.domain;
       // }
       // else{
        //	return "qq.com";  //强制返回 game.qq.com的后缀，做为帐号后缀的首选
	        //return hostname[l-2] + '.' + hostname[l-1]; //支持 focus.cn/sohu.com/chinaren.com/17173.com/sogu.com
	   // }
    },
    preventEvent: function(evt)
    {
        evt.cancelBubble = true;
        evt.returnValue = false;
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        if (evt.stopPropagation) {
            evt.stopPropagation();
        }
    },
    getPosition: function(ele, name)
    {
        var pos=0;
        while(ele) {
            pos += ele[name];
            ele = ele.offsetParent;
        }
        return pos;
    },

    // 根据lastdomain生成 emailPostfix 
    parseLastDomain: function (list)
    {
        this.emailPostfix = new Array();

        var j = 0;
        //邮箱不能用changyou.com
    //    this.emailPostfix[j] = this.domain; j++;

        for (var i in list)
        {
            if(typeof(list[i]) != 'string' ) continue;
            if (list[i] != this.domain)
            {
                this.emailPostfix[j] = list[i]; j++;
            }
        }
    },

    /* 下面这一部分函数是用于 domain select 提示的 */
    downDSindex: function () 
    {
        var x = this.dsAnchor.firstChild.rows;
        var i = 0;
        for (; i < x.length; i++) {
            if (x[i].firstChild.idx == this.curDSindex) break;
        }
        if (i >= x.length - 1) { // 没有找到，或者最后一个 
            this.curDSindex = x[0].firstChild.idx;
        } else {
            this.curDSindex = x[i+1].firstChild.idx;
        }
    },
    upDSindex: function () 
    {
        var x = this.dsAnchor.firstChild.rows;
        var last = -1;
        var i = 0;
        for (; i < x.length; i++) {
            if (x[i].firstChild.idx == this.curDSindex) break;
            last = x[i].firstChild.idx;
        }
        if (i == x.length) { // 没有找到
            this.curDSindex = x[0].firstChild.idx;
        } else if (last == -1) { // 第一个
            this.curDSindex = x[x.length-1].firstChild.idx;
        } else {
            this.curDSindex = last;
        }
    },
    findDSindex: function (index) 
    {
        try {
            var x = this.dsAnchor.firstChild.rows;
            for (var i = 0; i < x.length; i++) {
                if (x[i].firstChild.idx == index) return x[i].firstChild;
            }
        } catch (e) {}
        return false;
    },

    clearFocus: function (index) 
    {
        if (typeof(index) != "number") index = this.curDSindex;
        try {
            var x = this.findDSindex(index);
			x.className = '';
			x.style.fontWeight = 'normal';
        } catch (e) {}
    },

    setFocus: function (index) 
    {
        if (typeof(index) != "number") index = this.curDSindex;
        try {
            var x = this.findDSindex(index);
			x.className = 'active';
        } catch (e) {}
    },

    //输入字符的同时，填充下面的列表
    fillEmailSelect: function ()
    {
        var e = this.emailInput.value;
        if (e == "")
        {
            this.dsElement.style.display = "none";
            return;
        }
        e = e.toLowerCase();
        var x_postfix = "";
        var x_prefix = "";
        var x_index = e.indexOf("@");
        if (x_index < 0) {
            x_prefix = e;
        } else if (x_index == e.length - 1) { /* 第一次输入 @ */
            x_prefix = e.substr(0, x_index);
        } else {
            x_prefix = e.substr(0, x_index);
            x_postfix = e.substr(x_index + 1);
        }
       var mleft = this.getPosition(this.emailInput,"offsetLeft") - this.getPosition(this.cElement,"offsetLeft");
        if (document.all && !document.addEventListener) { // 处理 IE 浏览器的盒式模型 bug
            mleft += 1;
        }
        this.dsElement.style.marginLeft = mleft + "px";
        this.dsElement.style.marginTop = (this.getPosition(this.emailInput,"offsetTop") - this.getPosition(this.cElement,"offsetTop") + this.emailInput.offsetHeight)+ "px";
        /* version 2 this.dsElement.style.marginLeft = this.getPosition(this.emailInput,"offsetLeft") - this.getPosition(this.rootElement,"offsetLeft") + "px";
           this.dsElement.style.marginTop = this.getPosition(this.emailInput,"offsetTop") - this.getPosition(this.rootElement,"offsetTop") + this.emailInput.offsetHeight+ "px";
         */
        //this.dsElement.style.left = this.getPosition(this.emailInput, "offsetLeft") + "px";
        //this.dsElement.style.top = this.getPosition(this.emailInput, "offsetTop") + this.emailInput.offsetHeight + "px";
        this.dsElement.style.zIndex="3000";
        this.dsElement.style.paddingRight="0";
        this.dsElement.style.paddingLeft="0";
        this.dsElement.style.paddingTop="0";
        this.dsElement.style.paddingBottom="0";
        this.dsElement.style.backgroundColor="white";
        if(navigator.userAgent.indexOf("MSIE 7.0")!=-1||navigator.userAgent.indexOf("MSIE 6.0")!=-1){
	        if(this.emailInput&&this.emailInput.value){
	        	var fontSize = "";
	        	if(this.emailInput.currentStyle){
	        		fontSize = this.emailInput.currentStyle.fontSize;
	        	}else if(window.getComputedStyle){
	        		fontSize = window.getComputedStyle(this.emailInput,null).fontSize;
	        	}
	        	if(fontSize.indexOf("px")!=-1){
	        		fontSize = fontSize.replace("px","");
	        		try{
	        			fontSize = Number(fontSize)/2;
	        		}catch(e){
	        			fontSize = 6;
	        		}
	        	}else{
	        		fontSize = 6;
	        	}
	        	this.dsElement.style.width=String(this.emailInput.offsetWidth+fontSize*this.emailInput.value.length)+"px";
            }
        }
  
        this.dsElement.style.display = "block";

        var myTable = document.createElement("TABLE");
        myTable.width = "100%";
        myTable.cellSpacing = 0;
        myTable.cellPadding = 3;
        var tbody = document.createElement("TBODY");
        myTable.appendChild(tbody);

        var j = 0;
        var haveCurrent = false;
        var isUserid = false;
        var firstItem = -1;
        var userid_postfix = "",userid_prefix = "";
        var currentNumber = 0;
        //从emailPostfix中依次取出userid和domain的list，userid位于前3个
        for (var i = 0; i < this.emailPostfix.length; i++)
        {
            var postfix = this.emailPostfix[i];
            if(typeof(postfix) != 'string' ) continue;
            if(x_postfix != "")
            {
                if (postfix.indexOf(x_postfix) != 0) 
                    continue;
            }
            //包含@，表明是从lastdomain中取出的userid
            if(postfix.indexOf("@")>0)
            {
                if(this.autopad!="" && this.autopad!=postfix.substring(postfix.indexOf("@")+1))
                {
                    continue;
                }
                userid_prefix = postfix.substring(0,postfix.indexOf("@"));
                //Cookie的Userid中不包含已经输入的字符，则跳过即可
                if(userid_prefix.indexOf(x_prefix)!=0)
                {
                    continue;
                }
                //Cookie的Userid的前缀完全等于已经输入的字符，需要标志一下，过滤掉下面的重复的记录
                if(userid_prefix == x_prefix)
                {
                    userid_postfix = postfix.substring(postfix.indexOf("@")+1);
                }
                isUserid = true;
            }
            //不是从lastdomain中取出的
            else
            {
                //对于设置了autopad的，只显示autopad域的域名，其它的不予提示
                if(this.autopad!="" && this.autopad!=postfix)
                {
                    continue;
                }
            }
            //过滤掉重复的后缀
            if(postfix==userid_postfix)
            {
                continue;
            }
            j ++;
            if (firstItem == -1) firstItem = i;
            if (this.curDSindex == i) haveCurrent = true;
            var tr = document.createElement("TR");
            var td = document.createElement("TD");
            td.nowrap = "true";
            td.align = "left";
            //判断emailPostfix的项是否是从cookie中读取的userid，这时不需要在额外增加@...了
            if(isUserid == false)
            {
                td.innerHTML = x_prefix + "@" + postfix;
            }
            else
            {
                td.innerHTML = postfix;
            }

            td.id = "email_postfix_" + i;
            td.idx = i;
            td.onmouseover = function () {
                PassportSC_modifyed2.clearFocus();
                PassportSC_modifyed2.curDSindex = this.idx;
                PassportSC_modifyed2.setFocus();
                this.style.cursor = "hand";
            };

            td.onmouseout = function() {
            };

            td.onclick = function () {
                PassportSC_modifyed2.doSelect();
            };

            tr.appendChild(td);
            tbody.appendChild(tr);
            isUserid = false;
            currentNumber++;
            if(currentNumber>=this.showNumbers){
            	break;
            }
        }

        if (j > 0) {
            this.dsAnchor.innerHTML = "";
            this.dsAnchor.appendChild(myTable);
            if (haveCurrent == false) this.curDSindex = firstItem;
            this.setFocus();
        } else {
            this.dsElement.style.display = "none";
            this.curDSindex = -1;
        }
    },

    doSelect: function (setPWfocus) 
    {
        this.dsElement.style.display = "none";
        if(this.emailInput.value=="") {
        	this.emailValidate(this.emailInput);
        	return;
        }
        var x = this.findDSindex(this.curDSindex);
        if (x) this.emailInput.value = x.innerHTML;
        
        //调用检验函数
        this.emailValidate(this.emailInput);
    },
    //这里的KeyDown事件主要处理IE的上下箭头事件,IE 必须用 keydown 事件，否则判断不出来 'Up/Down'
    checkKeyDown: function (event)
    {
        var keyCode = event.keyCode;
        if (keyCode == 38 || keyCode == 40)
    	{
    		PassportSC_modifyed2.clearFocus();
	        if (keyCode == 38)
	        {
	        	PassportSC_modifyed2.upDSindex();
	        }
	        else if (keyCode == 40)
	        {
	        	PassportSC_modifyed2.downDSindex();
	        }
	        PassportSC_modifyed2.setFocus();
	    }
    },
    //这里的KeyPress事件主要处理FIREFOX的上下箭头事件和TT的BUG产生的olns四个字符
    checkKeyPress: function (event)
    {
        var keyCode = event.keyCode;
        if (keyCode == 13)
        {
            PassportSC_modifyed2.preventEvent(event);
        }
        //上下箭头
        else if (keyCode == 38 || keyCode == 40)
    	{
    		PassportSC_modifyed2.clearFocus();
	        if (keyCode == 38)
	        {
	        	PassportSC_modifyed2.upDSindex();
	        }
	        else if (keyCode == 40)
	        {
	        	PassportSC_modifyed2.downDSindex();
	        }
	        PassportSC_modifyed2.setFocus();
        }
        //TT的Bug的四个字符
        else if(keyCode == 108 || keyCode == 110 || keyCode == 111 || keyCode == 115)
        {
        	setTimeout("PassportSC_modifyed2.fillEmailSelect()", 10);					
        }
    },
    //响应用户的输入，填充下拉列表
	checkKeyUp: function (event)
    {
    	var keyCode = event.keyCode;
    	if (keyCode == 13)
    	{
    		PassportSC_modifyed2.fillEmailSelect();
        	PassportSC_modifyed2.doSelect();
        }
        else
        {
			PassportSC_modifyed2.fillEmailSelect();
		}
    },
	/**
	* 在drawPassport中调用的第一个方法
	*/
    init: function (element) 
    {
        if (this.selectorTitle == "") {
            var title = "请选择您的邮箱类型";
        } else {
            var title = this.selectorTitle;
        }
        this.rootElement = element;
		/* 根元素内部的东西
			div class :ppselecter 包含一个table,共两行，每行1列
			div 未知
			div class :passport
		*/
        
        this.emailInput = document.getElementById(this.emailInputID); //初始化输入框
        this.rootElement.innerHTML = '<div class="ppselecter" style="position: absolute; display: none;z-index:3000!important;"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td height="2" /></tr><tr><td /></tr></tbody></table></div><div style="display: none;"></div><div class="passport"></div>';
        this.dsElement = this.rootElement.childNodes[0];
        this.sElement = this.rootElement.childNodes[1];
        this.cElement = this.rootElement.childNodes[2];
        this.dsAnchor = this.dsElement.firstChild.rows[1].firstChild;

        //得到当前输入域的domain
        this.domain = this.getDomain();
        this.parseLastDomain(this.domainList); // 生成domanselect list
    },

    //===========================================================
    //===========================================================
    
    drawLoginForm: function () 
    {
        this.cElement.appendChild(this.emailInput);
        this.bindSelector(); //抽象出来，给狐首 pi18030 调用
  //      this.emailInput.value = this.email; //登录失败后自动填入错误的用户名
    },


    bindSelector: function ()
    {
        if (this.bindDomainSelector) {
            this.curDSindex = -1;
            this.emailInput.onblur = function() {
                PassportSC_modifyed2.doSelect();
            };
            try
            {
            	//FireFox使用addEventListener
                this.emailInput.addEventListener('keydown',this.checkKeyPress, false);
                this.emailInput.addEventListener('keyup',this.checkKeyUp, false);
            }
            catch (e)
            {
                try 
                { 
                    //IE使用attachEvent
                    this.emailInput.attachEvent("onkeydown", this.checkKeyDown);
                    this.emailInput.attachEvent("onkeypress", this.checkKeyPress);
                    this.emailInput.attachEvent("onkeyup", this.checkKeyUp);
                } catch (e) {}
            }
        }
    },
	/**
	*初始化方法
	*/
    drawPassport: function (element)
    {
        if (typeof(element) != "object")
        {
            return;
        }
        this.init(element);
        this.drawLoginForm();

    }
};