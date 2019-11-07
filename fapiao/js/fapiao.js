
function check(){
var ppinfo="开发票 普票";
var zpinfo="开发票 专票";
// 获取普票信息

var lx=document.getElementsByName("fpkind");
for (var i=0;i<lx.length;i++)
	if(lx[i].checked){
	var lxz = lx[i].value;  // lxz值就是选中的单选按钮的值
	}
	

var d=document.getElementById("shopname");//获取到select 数组
var shopname=d.options[d.selectedIndex].text;  //select.selectedIndex 获取当前选中的列表项，然后.text 获取值 
// alert(shopname); 获取到店铺名称
if(shopname=="autofull傲风北京专卖店"){
	lxz=lxz+" "+"战赢";
	
}

var ordernum=document.getElementById("ordernum").value;    // alert(ordernum);  获取到订单号

var cusID=document.getElementById("cusID").value;    // alert(cusID);  获取到客户ID

var taitou=document.getElementById("taitou").value;    // alert(taitou); 获取到抬头

var shuihao=document.getElementById("shuihao").value;    // alert(shuihao); 获取到税号
 
var address=document.getElementById("address").value;    // alert(address); 获取到地址

var phone=document.getElementById("phone").value;    // alert(phone); 获取到电话

var khh=document.getElementById("khh").value;    // alert(khh); 获取到开户行

var khzh=document.getElementById("khzh").value;    // alert(khzh); 获取到开户账号

var mingxi=document.getElementsByName("mingxi");
for (var i=0;i<mingxi.length;i++)
	if(mingxi[i].checked){
	// alert (mingxi[i].value);
	var m = mingxi[i].value;         // m值就是选中的单选按钮 明细的值
	}

var xinghao=document.getElementById("xinghao").value;    // alert(xinghao); 获取到型号


var shuliang=document.getElementById("shuliang").value;    // alert(shuliang); 获取到数量1

var price=document.getElementById("price").value;    // alert(price); 获取到总额1

var shuliangcopy=document.getElementById("shuliangcopy").value;    // alert(shuliangcopy); 获取到数量2

var pricecopy=document.getElementById("pricecopy").value;    // alert(pricecopy); 获取到总额2

var youxiang=document.getElementById("youxiang").value;    // alert(youxiang); 获取到邮箱

var shouji=document.getElementById("shouji").value;     //alert(shouji); 获取到手机


var a=Number(price)*Number(shuliang)+Number(pricecopy)*Number(shuliangcopy);
 
var b=Number(pricecopy)*Number(shuliangcopy)+Number(pricecopy)*Number(shuliangcopy);


var t=document.getElementById("kefuname");    //获取到select 数组
var kefuname=t.options[t.selectedIndex].text;    //alert(kefuname);  获取到客服姓名   
var tm =document.getElementById("tm").innerHTML;   //alert(tm)  获取到日期


//发票信息写入右侧

// parseFloat((jine/shuliang).toFixed(2))

	if(pricecopy==""){
		document.getElementById("content").innerHTML=
		"店铺："+shopname+"<br>"+"\n"+"单号："+ordernum+"<br>"+"\n"+
		"客户ID："+cusID+"<br>"+"\n"+
		"开发票"+"&nbsp;"+"&nbsp;"+lxz+"<br>"+"\n"+
		"抬头："+taitou+"<br>"+"\n"+
		"税号："+shuihao+"<br>"+"\n"+
		"地址："+address+"<br>"+"\n"+
		"电话："+phone+"<br>"+"\n"+
		"开户行："+khh+"<br>"+"\n"+
		"开户账号："+khzh+"<br>"+"\n"+
		"明细："+m+"<br>"+"\n"+
		"型号："+xinghao+"*1"+"<br>"+"\n"+
		"金额："+a+"="+price+"*"+shuliang+"<br>"+"\n"+
		"邮箱："+youxiang+"<br>"+"\n"+
        "手机："+shouji+"<br>"+"\n"+
		"下发票人："+kefuname+" "+tm;
	}else{
		document.getElementById("content").innerHTML=
		"店铺："+shopname+"<br>"+"\n"+"单号："+ordernum+"<br>"+"\n"+
		"客户ID："+cusID+"<br>"+"\n"+
		"开发票"+"&nbsp;"+"&nbsp;"+lxz+"<br>"+"\n"+
		"抬头："+taitou+"<br>"+"\n"+
		"税号："+shuihao+"<br>"+"\n"+
		"地址："+address+"<br>"+"\n"+
		"电话："+phone+"<br>"+"\n"+
		"开户行："+khh+"<br>"+"\n"+
		"开户账号："+khzh+"<br>"+"\n"+
		"明细："+m+"<br>"+"\n"+
		"型号："+xinghao+"*1"+"<br>"+"\n"+
		"金额："+a+"="+price+"*"+shuliang+"+"+pricecopy+"*"+shuliangcopy+"<br>"+"\n"+
		"邮箱："+youxiang+"<br>"+"\n"+
        "手机："+shouji+"<br>"+"\n"+
		"下发票人："+kefuname+" "+tm;
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

function pjcheck(){
	var sp=document.getElementById("pjshopname");//获取到select 数组
	var spname=sp.options[sp.selectedIndex].text;   // 获取到下拉框的店铺名 alert(spname);
	
	var pjordernum=document.getElementById("pjordernum").value;  //获取订单号
	
	var pjcusID=document.getElementById("pjcusID").value;  //获取ID
	
	var pjtyper=document.getElementById("pjtyper").value;  //获取类型
	
	var pjtime=document.getElementById("pjtime").value;  //获取时间
	
	var pjinfo=document.getElementById("pjinfo").value;  //获取地址信息
	
	var m=document.getElementsByName("leixing")
		for (var i=0;i<m.length;i++){
			if(m[i].checked){
				var mx = m[i].value;  // 获取单选值
			 //alert (mx);
	}
	}
	
	//获取到多选框的值
	var n=document.getElementsByName("peijian");
	var data=[];
	for(var k=0;k<n.length;k++){
		if(n[k].checked){
		data.push(n[k].value+" ");
		}
	}
	
	var pjinfo=document.getElementById("pjinfo").value;  //获取联系方式
	
	document.getElementById("pjcontent").innerHTML=
	"店铺："+spname+"<br>"+
	"订单号："+pjordernum+"<br>"+
	"客户ID："+pjcusID+"<br>"+
	"傲风售后"+pjtyper+"<br>"+
	pjtime+"<br>"+
	mx+data+"<br>"+
	"白君（无）"+"<br>"+
	pjinfo;
}
// 复制功能
function pjcopy(){
	var text=document.getElementById("pjcontent").innerText;
	//alert(text);
	var  pjcopyinput=document.getElementById("pjcopyinput");
	pjcopyinput.value=text;  
	pjcopyinput.select();
	document.execCommand("Copy");
	var pjtips=document.getElementById("pjtips");
	pjtips.style.display="inline";
	setTimeout("pjtips.style.display='none'",1000);

}
//获取年月日	

	var myDate = new Date();
	var years = myDate.getFullYear();
	var months = myDate.getMonth()+1;
	var days = myDate.getDate();
	var tm=document.getElementById("tm").innerHTML=years+"-"+months+"-"+days;

function azcheck(){
	var sp=document.getElementById("azshopname");//获取到select 数组
	var spname=sp.options[sp.selectedIndex].text;
	var azcusID=document.getElementById("azcusID").value;  //获取ID
	var aztyper=document.getElementById("aztyper").value;  //获取类型
	var azordernum=document.getElementById("azordernum").value;  //获取订单号
	var azinfo=document.getElementById("azinfo").value;  //获取收货信息
	//var arrinfo=document.getElementById("arrinfo").value;  //到货情况
	//获取到货情况单选值
	var arrinfo1=document.getElementsByName("arrinfo1");
      for (var i=0;i<arrinfo1.length;i++)
		if(arrinfo1[i].checked){
	// alert (arrinfo1[i].value);
			var arr = arrinfo1[i].value;         // m值就是选中的单选按钮 明细的值
	}
	
	var aztime=document.getElementById("aztime").value;  // 时间
	
	var m=document.getElementsByName("hexiao")
		for (var i=0;i<m.length;i++){
			if(m[i].checked){
				var mx = m[i].value;  // 获取单选值
	}
	}
	if(aztime==""){
		document.getElementById("azcontent").innerHTML=
	"店铺："+spname+"<br>"+
	"客户ID："+azcusID+"<br>"+
	"型号："+aztyper+"<br>"+
	"订单号："+azordernum+"<br>"+
	"收货信息："+azinfo+"<br>"+
	"到货情况："+arr+"<br>"+
	"期望上门时间：无"+"<br>"+
	"是否需要核销："+mx;
	}else{	
	document.getElementById("azcontent").innerHTML=
	"店铺："+spname+"<br>"+
	"客户ID："+azcusID+"<br>"+
	"型号："+aztyper+"<br>"+
	"订单号："+azordernum+"<br>"+
	"收货信息："+azinfo+"<br>"+
	"到货情况："+arr+"<br>"+
	"期望上门时间："+aztime+"<br>"+
	"是否需要核销："+mx;
	}
	
}



function azcopy(){
	var text=document.getElementById("azcontent").innerText;
	//alert(text);
	var  azcopyinput=document.getElementById("azcopyinput");
	azcopyinput.value=text;  
	azcopyinput.select();
	document.execCommand("Copy");
	var aztips=document.getElementById("aztips");
	aztips.style.display="inline";
	setTimeout("aztips.style.display='none'",1000);

}














