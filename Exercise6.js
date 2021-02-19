/* ЗАДАЧА 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */

let sameNumbersOrNot = [1,1,1,1,1];
let result;
itemNumber = sameNumbersOrNot[0];

sameNumbersOrNot.forEach(function(item,index,array) {
    result = (itemNumber !== item) ? false : true })

console.log(result)
