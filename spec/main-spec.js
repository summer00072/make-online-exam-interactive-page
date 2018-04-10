var fs = require("fs");
//var score = require('../main/main');

describe('score', () => {

	 it('should pass', () => {
      expect(fs.statSync("../make-online-exam-interactive-page/public/index.html").isFile()).toBe(true);
    });
/*
    it('statistical scores', () => {
    let answer = {text:["统一建模语言","封装性","继承性","多态性"],radio:[false,true,false,false,true,false,false,false,false,true,true,false],checkbox:[true,true,false,true,true,true,true,false]}; 
    let scores = 100;
    let result = score(answer);
     expect(result).toEqual(scores);
    });
*/
});
