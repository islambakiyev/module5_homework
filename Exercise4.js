/* ЗАДАЧА 4.
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let randomNumber = getRandomArbitrary(0,100);
console.log(randomNumber);
