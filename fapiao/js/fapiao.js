
function check(){
var d=document.getElementById("shopname");//获取到select 数组
var shopname=d.options[d.selectedIndex].text;  //select.selectedIndex 获取当前选中的列表项，然后.text 获取值 
// alert(shopname); 获取到店铺名称
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
	
var jine=document.getElementById("jine").value;
// alert(jine); 获取到jine

var youxiang=document.getElementById("youxiang").value;
// alert(youxiang); 获取到youxiang
	
var shouji=document.getElementById("shouji").value;
 //alert(shouji); 获取到shouji

var t=document.getElementById("kefuname");//获取到select 数组
var kefuname=t.options[t.selectedIndex].text;   
//alert(kefuname);  获取到客服姓名

document.getElementById("part2").innerHTML="店铺名："+shopname+"<br>"+"订单号："+ordernum+"<br>"+"客户ID："+cusID+"<br>"+"抬头："+taitou
+"<br>"+"税号："+shuihao+"<br>"+"明细："+mingxi+"<br>"+"型号："+xinghao+"<br>"+"金额："+jine+"<br>"+"邮箱："+youxiang
+"<br>"+"手机："+shouji+"<br>"+"下发票人："+kefuname;	
}
function clean(){
	
	
	
	
}