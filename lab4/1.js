/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
 function getAnagramms(arr) {
    let anagramSet = new Set();
    let anagramMap = new Map();
    let anagramArray = [];
    for (let index = 0; index < arr.length; index++) {
        let word = arr[index].toLowerCase().split('').sort().join('');
        if (anagramSet.has(word)) {
            anagramMap.get(word).push(arr[index]);
        }
        else {
            anagramSet.add(word);
            anagramMap.set(word, [arr[index]]);
        }
    }
    for (value of anagramSet) {
    anagramArray.push(anagramMap.get(value));
    }
    return anagramArray;
}

module.exports = getAnagramms;
