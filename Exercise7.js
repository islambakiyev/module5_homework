/* ЗАДАЧА 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

let arrayNumbers = [1,5,6,8,9,50,99,15,11, null, "bla", 0, "casa"];
let odd = 0;
let even = 0;
let zero = 0;
let stroka = 0;

for(let i = 0; i<arrayNumbers.length; i++) {
    if (typeof arrayNumbers[i] === "number" && arrayNumbers[i] !== 0 && !isNaN(arrayNumbers[i])) {
        if (arrayNumbers[i] % 2 === 0) {
            even = even + 1;
        } else if (arrayNumbers[i] % 2 !== 0) {
            odd = odd + 1;
        }

    } else if (typeof arrayNumbers[i] === "string") {
        stroka = stroka + 1;
    } else if (arrayNumbers[i] === 0) {
        zero = zero + 1;
    }
}

console.log("Количество четных чисел " + even);
console.log("Количество нечетных чисел " + odd);
console.log("Количество нулей " + zero);
console.log("Количество строк " + stroka);
