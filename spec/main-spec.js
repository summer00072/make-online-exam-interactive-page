var fs = require("fs");
var score = require('../main/main');

describe('score', () => {

	 it('should pass', () => {
      expect(fs.statSync("../make-online-exam-interactive-page/public/index.html").isFile()).toBe(true);
    });

    it('statistical scores', () => {
    let answer = {text:["统一建模语言","封装性","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[true,true,false,true,true,true,true,false],brief:["模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"]}; 
    let scores = 100;
    let result = score(answer);
     expect(result).toEqual(scores);
    });

    it('statistical scores', () => {
    let answer = {text:[],radio:[false,false,false,false,false,false,false,false,false,false,false,false],checkbox:[false,false,false,false,false,false,false,false],brief:[]}; 
    let scores = 0;
    let result = score(answer);
     expect(result).toEqual(scores);
    });

    it('statistical scores', () => {
    let answer = {text:["统一建模语言","封装性","继承性"],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[true,true,false,true,true,true,false,false],brief:["模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"]}; 
    let scores = 85;
    let result = score(answer);
     expect(result).toEqual(scores);
    });

    it('statistical scores', () => {
    let answer = {text:["统一建模语言","","继承性"],radio:[false,false,false,false,true,false,false,false,false,true,false,false],checkbox:[true,false,false,true,true,true,false,false],brief:["模型是现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"]}; 
    let scores = 50;
    let result = score(answer);
     expect(result).toEqual(scores);
    });

});
