module.exports = function check(str, bracketsConfig) {
    // your solution
    var openBr = '';
    var closeBr = '';
    for (var i = 0; i < bracketsConfig.length; i++) {
        for (var j = 0; j < bracketsConfig[i].length; j++) {
            if (j == 0) {
                openBr += bracketsConfig[i][j];
            } else { closeBr += bracketsConfig[i][j]; }
        }
    }
    //alert(openBr + ' ' + closeBr);
    var open = 0;
    var close = 0;

    for (var k = 0; k < str.length; k++) {
        for (var m = 0; m < openBr.length; m++) {
            if (openBr[m] == str[k]) {
                open++;
            }
        }
        for (var n = 0; n < closeBr.length; n++) {
            if (closeBr[n] == str[k]) {
                close++;
            }
        }
    }
    if (open != close) {
        return false;
    } else { return true; }
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