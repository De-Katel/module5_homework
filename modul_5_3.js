// Задание 3.

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
//  Например, "Hello" -> "olleH".

// Решение:

let string = prompt('введите строку');

let result = reverseString(string);

function reverseString(str) {

    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("")

    return joinArray;
}

let result_2 = string.split("").reverse().join("");


let result_3 = reverseString_3(string);

function reverseString_3(str) {

    let newString = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;

}

let result_2 = string.split("").reverse().join("");

console.log("Исходная строка:  ", string);
console.log("Результат 1:  ", result);
console.log("Результат 2:  ", result_2);
console.log("Результат 3:  ", result_3);