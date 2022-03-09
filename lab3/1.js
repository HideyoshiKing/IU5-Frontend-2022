/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let words = str.split(" ");
    let strCap = "";
    for (let i = 0; i < words.length; i++) {
         if(words[i].charAt(0) == words[i].charAt(0).toLowerCase()) {
            strCap += words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
         }
         else {
            strCap += words[i];
         }
         if (i != words.length - 1) {
            strCap += " ";
         }
    }
    return strCap;
}


module.exports = capitalize;
