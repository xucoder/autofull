
var status=1;

function check(){
var ppinfo="开发票 普票";
var zpinfo="开发票 专票";
// 获取普票信息
var d=document.getElementById("shopname");//获取到select 数组
var shopname=d.options[d.selectedIndex].text;  //select.selectedIndex 获取当前选中的列表项，然后.text 获取值 
// alert(shopname); 获取到店铺名称
if(shopname=="autofull傲风北京专卖店"){
	ppinfo="开发票 普票 战赢";
	
}

var ordernum=document.getElementById("ordernum").value;
// alert(ordernum);  获取到订单号
var cusID=document.getElementById("cusID").value;
// alert(cusID);  获取到客户ID
var taitou=document.getElementById("taitou").value;
// alert(taitou); 获取到抬头
var shuihao=document.getElementById("shuihao").value;
// alert(shuihao); 获取到税号

var m=document.getElementsByName("mingxi");
for (var i=0;i<m.length;i++)
	if(m[i].checked){
	// alert (mingxi[i].value);
	var mingxi = m[i].value;  // m值就是选中的单选按钮的值
	}

var xinghao=document.getElementById("xinghao").value;
// alert(xinghao); 获取到型号

var price=document.getElementById("price").value;
// alert(price); 获取到总额1

var shuliang=document.getElementById("shuliang").value;
// alert(shuliang); 获取到数量

var pricecopy=document.getElementById("pricecopy").value;
// alert(pricecopy); 获取到总额2

var shuliangcopy=document.getElementById("shuliangcopy").value;
// alert(shuliangcopy); 获取到数量2

var youxiang=document.getElementById("youxiang").value;
// alert(youxiang); 获取到邮箱
	
var shouji=document.getElementById("shouji").value;
 //alert(shouji); 获取到手机
 
 var address=document.getElementById("address").value;
//获取到收票地址
 
var a=Number(price)*Number(shuliang)+Number(pricecopy)*Number(shuliangcopy);


 // 获取专票信息
 var d=document.getElementById("shopname2");//获取到select 数组
var shopname2=d.options[d.selectedIndex].text;  //select.selectedIndex 获取当前选中的列表项，然后.text 获取值 

if(shopname2=="autofull傲风北京专卖店"){
	zpinfo="开发票 专票 战赢";
	
}

var ordernum2=document.getElementById("ordernum2").value;
// alert(ordernum2);  获取到订单号
var cusID2=document.getElementById("cusID2").value;
// alert(cusID2);  获取到客户ID
var taitou2=document.getElementById("taitou2").value;
// alert(taitou2); 获取到抬头
var shuihao2=document.getElementById("shuihao2").value;
// alert(shuihao2); 获取到税号 
 
var k=document.getElementsByName("mingxi2");
for (var i=0;i<k.length;i++)
	if(k[i].checked){
	// alert (mingxi[i].value);
	var mingxi2 = k[i].value;  // k值就是选中的单选按钮的值
	} 
var xinghao2=document.getElementById("xinghao2").value;
// alert(xinghao2); 获取到型号
	

var price2=document.getElementById("price2").value;
// alert(price2); 获取到单价

var shuliang2=document.getElementById("shuliang2").value;
// alert(shuliang2); 获取到单价  

var pricecopy2=document.getElementById("pricecopy2").value;
// alert(pricecopy2); 获取到单价2

var shuliangcopy2=document.getElementById("shuliangcopy2").value;
// alert(shuliangcopy2); 获取到单价2 

var cpaddress=document.getElementById("cpaddress").value;
//获取到地址及电话

var account=document.getElementById("account").value;
//获取到开户行及账号 
 

var address2=document.getElementById("address2").value;
//获取到收票地址
 
var b=Number(price2)*Number(shuliang2)+Number(pricecopy2)*Number(shuliangcopy2);


var t=document.getElementById("kefuname");//获取到select 数组
var kefuname=t.options[t.selectedIndex].text;   
//alert(kefuname);  获取到客服姓名


//普票信息写入右侧

// parseFloat((jine/shuliang).toFixed(2))

if(status==1){
	if(address==""){
		if(pricecopy==""){
		document.getElementById("content").innerHTML="店铺："+shopname+"<br>"+"\n"+"单号："+ordernum+"<br>"+"\n"+"客户ID："+cusID+"<br>"+"\n"+ppinfo+"<br>"+"\n"+"抬头："+taitou
+"<br>"+"\n"+"税号："+shuihao+"<br>"+"\n"+"明细："+mingxi+"<br>"+"\n"+"型号："+xinghao+"<br>"+"\n"+"金额："+a+"="+price+"*"+shuliang+"<br>"+"\n"+"邮箱："+youxiang
+"<br>"+"\n"+"手机："+shouji+"<br>"+"\n"+"下发票人："+kefuname;	
	}else{
		document.getElementById("content").innerHTML="店铺："+shopname+"<br>"+"\n"+"单号："+ordernum+"<br>"+"\n"+"客户ID："+cusID+"<br>"+"\n"+ppinfo+"<br>"+"\n"+"抬头："+taitou
+"<br>"+"\n"+"税号："+shuihao+"<br>"+"\n"+"明细："+mingxi+"<br>"+"\n"+"型号："+xinghao+"<br>"+"\n"+"金额："+a+"="+price+"*"+shuliang+"+"+pricecopy+"*"+shuliangcopy+"<br>"+"\n"+"邮箱："+youxiang
+"<br>"+"\n"+"手机："+shouji+"<br>"+"\n"+"下发票人："+kefuname;
	}
	
}else{
	if(pricecopy==""){
		document.getElementById("content").innerHTML="店铺："+shopname+"<br>"+"\n"+"单号："+ordernum+"<br>"+"\n"+"客户ID："+cusID+"<br>"+"\n"+ppinfo+"<br>"+"\n"+"抬头："+taitou
+"<br>"+"\n"+"税号："+shuihao+"<br>"+"\n"+"明细："+mingxi+"<br>"+"\n"+"型号："+xinghao+"<br>"+"\n"+"金额："+a+"="+price+"*"+shuliang+"<br>"+"\n"+"邮箱："+youxiang
+"<br>"+"\n"+"手机："+shouji+"<br>"+"\n"+"下发票人："+kefuname+"<br>"+"\n"+"收货地址："+address;	
	}else{
		document.getElementById("content").innerHTML="店铺："+shopname+"<br>"+"\n"+"单号："+ordernum+"<br>"+"\n"+"客户ID："+cusID+"<br>"+"\n"+ppinfo+"<br>"+"\n"+"抬头："+taitou
+"<br>"+"\n"+"税号："+shuihao+"<br>"+"\n"+"明细："+mingxi+"<br>"+"\n"+"型号："+xinghao+"<br>"+"\n"+"金额："+a+"="+price+"*"+shuliang+"+"+pricecopy+"*"+shuliangcopy+"<br>"+"\n"+"邮箱："+youxiang
+"<br>"+"\n"+"手机："+shouji+"<br>"+"\n"+"下发票人："+kefuname+"<br>"+"\n"+"收货地址："+address;
	}
}
}

	//专票信息写入右侧
if(status==0){
	
if(address2==""){
	if(pricecopy2==""){
	
document.getElementById("content").innerHTML="店铺："+shopname2+"<br>"+"\n"+
"单号："+ordernum2+"<br>"+"\n"+
"客户ID："+cusID2+"<br>"+"\n"+
zpinfo+"<br>"+
"抬头："+taitou2+"<br>"+"\n"+
"税号："+shuihao2+"<br>"+"\n"+
"明细："+mingxi2+"<br>"+"\n"+
"型号："+xinghao2+"<br>"+"\n"+
"金额："+b+"="+price2+"*"+shuliang2+"<br>"+"\n"+
"地址及电话："+cpaddress+"<br>"+"\n"+
"开户行及账号："+account+"<br>"+"\n"+
"下发票人："+kefuname+"<br>"+"\n"
} else{
	document.getElementById("content").innerHTML="店铺："+shopname2+"<br>"+"\n"+
"单号："+ordernum2+"<br>"+"\n"+
"客户ID："+cusID2+"<br>"+"\n"+
zpinfo+"<br>"+
"抬头："+taitou2+"<br>"+"\n"+
"税号："+shuihao2+"<br>"+"\n"+
"明细："+mingxi2+"<br>"+"\n"+
"型号："+xinghao2+"<br>"+"\n"+
"金额："+b+"="+price2+"*"+shuliang2+"+"+pricecopy2+"+"+shuliangcopy2+"<br>"+"\n"+
"地址及电话："+cpaddress+"<br>"+"\n"+
"开户行及账号："+account+"<br>"+"\n"+
"下发票人："+kefuname+"<br>"+"\n"

}

}else{
	if(pricecopy2==""){
	
document.getElementById("content").innerHTML="店铺："+shopname2+"<br>"+"\n"+
"单号："+ordernum2+"<br>"+"\n"+
"客户ID："+cusID2+"<br>"+"\n"+
zpinfo+"<br>"+
"抬头："+taitou2+"<br>"+"\n"+
"税号："+shuihao2+"<br>"+"\n"+
"明细："+mingxi2+"<br>"+"\n"+
"型号："+xinghao2+"<br>"+"\n"+
"金额："+b+"="+price2+"*"+shuliang2+"<br>"+"\n"+
"地址及电话："+cpaddress+"<br>"+"\n"+
"开户行及账号："+account+"<br>"+"\n"+
"下发票人："+kefuname+"<br>"+"\n"+
"收货地址："+address2
} else{
	document.getElementById("content").innerHTML="店铺："+shopname2+"<br>"+"\n"+
"单号："+ordernum2+"<br>"+"\n"+
"客户ID："+cusID2+"<br>"+"\n"+
zpinfo+"<br>"+
"抬头："+taitou2+"<br>"+"\n"+
"税号："+shuihao2+"<br>"+"\n"+
"明细："+mingxi2+"<br>"+"\n"+
"型号："+xinghao2+"<br>"+"\n"+
"金额："+b+"="+price2+"*"+shuliang2+"+"+pricecopy2+"+"+shuliangcopy2+"<br>"+"\n"+
"地址及电话："+cpaddress+"<br>"+"\n"+
"开户行及账号："+account+"<br>"+"\n"+
"下发票人："+kefuname+"<br>"+"\n"+
"收货地址："+address2
}
	
}
}

}



/*function copy(){
	var text=document.getElementById("content").innerText;
	var  copyinput=document.getElementById("copyinput");
	copyinput.value=text;  赋值完成之后 格式就乱了 不能用input 要用textarea 2019.1.23
	copyinput.select();
	document.execCommand("Copy");
	alert(111);
}*/
//复制按钮功能
function copy(){
	var text=document.getElementById("content").innerText;
	//alert(text);
	var  copyinput=document.getElementById("copyinput");
	copyinput.value=text;  
	copyinput.select();
	document.execCommand("Copy");
	var tips=document.getElementById("tips");
	tips.style.display="inline";
	setTimeout("tips.style.display='none'",1000);

}
//普票按钮功能
function ppkind(){
	var ppcontent=document.getElementById("ppcontent");
	ppcontent.style.display="inline";
	var zpcontent=document.getElementById("zpcontent");
	zpcontent.style.display="none";
	/*var pupiao=document.getElementById("pupiao");
	pupiao.style.backgroundColor="Tomato";
	var zhuanpiao=document.getElementById("zhuanpiao");
	zhuanpiao.style.backgroundColor="WHiteSmoke";*/
	status=1;
	return status;
	
}
//专票按钮功能
function zpkind(){
	var ppcontent=document.getElementById("ppcontent");
	ppcontent.style.display="none";
	var zpcontent=document.getElementById("zpcontent");
	zpcontent.style.display="inline";
	/*var zhuanpiao=document.getElementById("zhuanpiao");
	zhuanpiao.style.backgroundColor="Tomato";
	var pupiao=document.getElementById("pupiao");
	pupiao.style.backgroundColor="WHiteSmoke";*/
	status=0;
	return status;
}
// 如果有多个型号，需要输入不同的金额，按加号之后 新增可填写空白内容
function add(){
	var aaa=document.getElementById("aaa");
	aaa.style.display="inline";
	var ccc=document.getElementById("ccc");
	ccc.style.display="inline";
}
function del(){
	var aaa=document.getElementById("aaa");
	aaa.style.display="none";
	var pricecopy=document.getElementById("pricecopy");
	pricecopy.value="";
	var shuliangcopy=document.getElementById("shuliangcopy");
	shuliangcopy.value="";
	
	var ccc=document.getElementById("ccc");
	ccc.style.display="none";
	var pricecopy2=document.getElementById("pricecopy2");
	pricecopy2.value="";
	var shuliangcopy2=document.getElementById("shuliangcopy2");
	shuliangcopy2.value="";
	
}

















