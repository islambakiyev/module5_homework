/* ЗАДАЧА 1.
Напишите программу, которая работала бы следующим образом: в prompt вводится значение.
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof,
принадлежит ли оно к множеству Number. Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения. */

let userNumber = +prompt('Write any number');


if(typeof userNumber !== 'number' || isNaN(userNumber) ) {
    console.log("Упс, кажется, вы ошиблись")

} else if (typeof userNumber === 'number') {
    result = userNumber % 2 === 0 ? "Это четное число" : "Это нечетное число";
    console.log(result);

}
