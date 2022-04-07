/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */

function curry(f) {
    return function carried(...args) {
        if(args.length === f.length) {
            return f.apply(this, args);
        }
        return carried.bind(this, ...args);
    }
}

module.exports = curry;
