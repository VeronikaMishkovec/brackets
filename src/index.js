 module.exports = function check(str, bracketsConfig) {
     var openBr = '';
     var closeBr = '';
     for (let i = 0; i < bracketsConfig.length; i++) {
         for (let j = 0; j < bracketsConfig[i].length; j++) {
             if (j == 0) {
                 openBr += bracketsConfig[i][j];
             } else { closeBr += bracketsConfig[i][j]; }
         }
     }
     var stack = [];
     var configArr = openBr.concat(closeBr);
     for (let i = 0; i < str.length; i++) {
         for (let j = 0; j < configArr.length / 2; j++) {
             if (str[i] === configArr[j]) {
                 stack.push(str[i]);
             }


             if (str[i] != configArr[j]) {
                 if (str[i] == configArr[j + configArr.length / 2] && str[i - 1] == configArr[j]) {
                     stack.pop();
                 }
             }

             if (str[i] != configArr[j]) {
                 if (str[i] == configArr[j + configArr.length / 2] && str[i - 1] == configArr[j]) {
                     stack.pop();
                 }
             }

             if (str[i] != configArr[j]) {
                 if (str[i] == configArr[j + configArr.length / 2] && str[i - 1] == configArr[j]) {
                     stack.pop();
                 }
             }
             if (configArr[j] == configArr[j + configArr.length / 2]) {
                 stack.pop();
             }
         }
     }
     if (stack.length === 0) {
         return document.write('true');
     } else { return document.write('false'); }

 }
 const config1 = [
     ['(', ')']
 ];
 const config2 = [
     ['(', ')'],
     ['[', ']']
 ];
 const config3 = [
     ['(', ')'],
     ['[', ']'],
     ['{', '}']
 ];
 const config4 = [
     ['|', '|']
 ];
 const config5 = [
     ['(', ')'],
     ['|', '|']
 ];
 const config6 = [
     ['1', '2'],
     ['3', '4'],
     ['5', '6'],
     ['7', '7'],
     ['8', '8']
 ];
 const config7 = [
     ['(', ')'],
     ['[', ']'],
     ['{', '}'],
     ['|', '|']
 ];