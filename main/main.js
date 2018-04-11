
function score(answer){
	let summary = 0;
	let correctAnswer = {text:["统一建模语言","封装性","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[true,true,false,true,true,true,true,false]};

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
	if (answer.brief == "模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。") {
		summary+= 20;
	}		
	return summary;
};
module.exports = score;
