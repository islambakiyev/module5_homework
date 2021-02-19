/* ЗАДАЧА 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

let str = "EARTH";
function reverseString(str){
    return str.split("").reverse().join("");
}

reverseString(str);