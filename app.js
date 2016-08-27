$(function(){
	//id选择器
	$("#box").hide().slideDown();
	$("#box").css("background-color","rgba(100,100,100,0.4)");
	//标签选择器
	$("p").css("background-color","aqua");
	$("p").css("font-family","heiti");
	$("p").css("font-size","40px");
	//类选择器
	$(".pp").css("font-family","simhei");
	alert($("p").size());
	$("#log").css("border","solid 1px grey");
	$("#log")[0].innerHTML+='$("p").size()-->'+$("p").size()+"<br/>";
	$("#log")[0].innerHTML+='$("p").length-->'+$("p").length+"<br/>";
	alert($("#log br").length);
	//进阶选择器  群组选择器
	$("p,span").css("color","red");
	//后代选择器
	$("#box p").css("font-size","40px");
	$("#box").find($("p")).css("font-size","40px");
	//高级选择器
	//子选择器
	$("div>p").css("font-size","36px");
	$("div").children("p").css("font-size","36px");
	//next选择器
	$("#box+div").css("border","1px solid blue");
	$("#box").next($("div")).css("border","1px solid blue");
	//nextAll选择器
	$("#box~div").css("background-color","aqua").css("margin","10px");
	$("#box").nextAll("div").css("background-color","aqua").css("margin","10px");
	//单元块儿
	$("#last").prevUntil("a").css("background-color","aqua").css("margin","50px");
	//选取上下同级的元素
	$("#last").siblings("div").css("border","1px solid blue").css("margin","10px");
});