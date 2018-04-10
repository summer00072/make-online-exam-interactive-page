// 请把与index.html页面相关的javascript代码写在这里
// 同时删除该注释

function calculate() {
    let summary = 0;
    let answer = {text:[],radio:[],checkbox:[]};
    let correctAnswer = {text:["统一建模语言","封装性","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[true,true,false,true,true,true,true,false]};
    let input = document.getElementsByTagName("input");

    for (let i = 0; i < input.length; i++) {
        if (input[i].type == "text" && input[i].name != "information") {answer.text.push(input[i].value);}
        if (input[i].type == "radio") {answer.radio.push(input[i].checked);}
        if (input[i].type == "checkbox") {answer.checkbox.push(input[i].checked);}
    }

	for (let i = 0; i < answer.text.length; i++) {
		if (answer.text[i] == correctAnswer.text[i]) {
			summary += 5;
		}
	}

	for (let i = 0; i < answer.radio.length; i++) {
		if (answer.radio[i] == correctAnswer.radio[i] && answer.radio[i] == true) {
			summary += 10;
		}
	}

        let temp = 0;
        for (let i = 0; i < answer.checkbox.length; i++) {
            if (answer.checkbox[i] == correctAnswer.checkbox[i]) {temp += 1;}
            if (!((i+1)%4)) {
                if (temp == 4) {summary += 10;}
                temp = 0;
            }
        }
    

	let brief = document.getElementById("brief");
	if (brief.value == "模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。") {
		summary+= 20;
	}
	
	let message = document.getElementById("message");

	message.innerHTML = summary;

  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
}

function clearr() {
	let input = document.getElementsByTagName("input");
	
	for (let i = 0; i < input.length; i++) {
		if (input[i].type == "text") {input[i].value = "";}
		if (input[i].type == "radio") {input[i].checked = false;}
		if (input[i].type == "checkbox") {input[i].checked = false;}
	}
	document.getElementById("brief").value = "";
   	document.getElementById("message").innerHTML = "";
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
}