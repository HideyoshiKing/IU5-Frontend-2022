/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    if (str.length == 0) {
        return "";
    }
    let compressedString = '';
    let currentChar = str[0];
    let charCount = 0;
    for (let index = 0; index < str.length; index++) {
        if (currentChar == str[index]) {
            charCount++;
            continue;
        }
        if (charCount > 1) {
            compressedString += currentChar + charCount;
        } else {
            compressedString += currentChar;
        }
        charCount = 1;
        currentChar = str[index];
    }
    if (charCount > 1) {
        compressedString += currentChar + charCount;
    } else {
        compressedString += currentChar;
    }
    return compressedString;
}

module.exports = rle;
