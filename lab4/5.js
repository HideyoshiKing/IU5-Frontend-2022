/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let stack = [];
    let brackets = new Map([
        [')' , '('],
        [']' , '['],
        ['>' , '<']
    ]);
    let closedBrackets = new Set([')',']','>']);
    for (let index = 0; index < str.length; index++) {
        if (closedBrackets.has(str[index])) {
            if (brackets.get(str[index]) != stack.pop()) {
                return false;
            }
        }
        else {
            stack.push(str[index]);
        }
    }
    return stack.length == 0;
}

module.exports = checkBrackets;
