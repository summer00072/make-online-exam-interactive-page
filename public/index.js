
function calculate() {
    let answer = {text:[],radio:[],checkbox:[]};
    let input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == "text" && input[i].name != "information") {answer.text.push(input[i].value);}
        if (input[i].type == "radio") {answer.radio.push(input[i].checked);}
        if (input[i].type == "checkbox") {answer.checkbox.push(input[i].checked);}
    }
    answer.brief=document.getElementById("brief").value;
  	let summary = score(answer);
  	let message = document.getElementById("message");
  	message.innerHTML = summary;
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