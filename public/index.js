// 请把与index.html页面相关的javascript代码写在这里
// 同时删除该注释

function calculate() {
	var summary = 0;
	var cha1 = document.getElementsByName("character");
	var temp = ["统一建模语言","封装性","继承性","多态性"];
	for (let i = 0; i < cha1.length; i++) {
		if (cha1[i].value == temp[i]) {
			summary += 5;
		}
	}
	
	var radio1 = document.getElementsByName("relationship");
	if (radio1[1].checked == true) summary+=10;
	var radio2 = document.getElementsByName("inheritance");
	if (radio2[0].checked == true) summary+=10;

	var checkbox1 = document.getElementsByName("fineness");
	if (checkbox1[0].checked && checkbox1[1].checked && checkbox1[3].checked && !checkbox1[2].checked) {
		summary+=10;
	}


	var checkbox2 = document.getElementsByName("class-diagram");
	if (checkbox2[0].checked && checkbox2[1].checked && checkbox2[2].checked && !checkbox2[3].checked) {
		summary+=10;
	}

	var radio3 = document.getElementsByName("judge1");
	if (radio3[1].checked == true) summary+=10;
	var radio4 = document.getElementsByName("judge2");
	if (radio4[0].checked == true) summary+=10;


	var brief = document.getElementById("brief");
	if (brief.value == "模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。") {
		summary+= 20;
	}

	var pre = document.getElementById("message");
	var para = document.createElement("p");
	var txt = document.createTextNode(summary);
	para.appendChild(txt);
	pre.appendChild(para);


  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
}

function clearr() {
	var input = document.getElementsByTagName("input");
	
	for (let i = 0; i < input.length; i++) {
		if (input[i].type == "text") {input[i].value = "";}
		if (input[i].type == "radio") {input[i].checked = false;}
		if (input[i].type == "checkbox") {input[i].checked = false;}
	}
	document.getElementById("brief").value = "";
   document.getElementById("message").value = "";
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
}