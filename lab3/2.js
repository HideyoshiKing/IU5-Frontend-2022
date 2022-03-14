/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let min = 0;
    let max = 0;
    let digits = str.split(/[\ ,\]]/)
    for (let i = 0; i < digits.length; i++) {
        if (!isNaN(digits[i])) {
            if (Number(digits[i]) > max) {
                max = Number(digits[i]);
            }
            if (Number(digits[i]) < min) {
                min = Number(digits[i]);
            }
        }
    }
    return {min, max}
}

module.exports = getMinMax;
