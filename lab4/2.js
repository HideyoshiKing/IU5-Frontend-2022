/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    if (str == str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPalindrome;
