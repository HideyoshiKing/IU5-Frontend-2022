/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    //code here
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let array = [];
    let difference = undefined;
    const sortArray = [];
    const dict = new Map();
    const returnedArray = [];
    for(let object of arr) {
        array = [];
        for (let key in object) {
            array.push(object[key]);
        }
        difference = (Math.abs(alphabet.indexOf(array[0]) - alphabet.indexOf(array[1]))) + (alphabet.indexOf(array[0]) + 1);
        sortArray.push(difference);
        dict.set(difference, object);
    }
    sortArray.sort(function(a, b) {
        return a - b;
      });
    for (let item of sortArray.sort(function(a, b) { return a - b; })) {
        returnedArray.push(dict.get(item));
    }
    return returnedArray;
}

// Долго думал об условии сортировки, возможно не то что ожидалось, учитывал
// положение в алфавите и расстояние между буквами

module.exports = makeRoute;
