/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    // return arr.flat(Infinity); не везде поддерживается

    let result = []

    function simplifyArray(arr) {
        arr.forEach(i => {
            if (Array.isArray(i)) {
            simplifyArray(i)
            }
            else {
                result.push(i)
            }
        })
    }
    simplifyArray(arr);
    return result;
}

module.exports = get1DArray;
