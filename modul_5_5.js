// Задание 5.

// Дан произвольный массив. Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.
// Удачи!

// Решение:

let array = [1,'w', 7, 5, 9, 3, 0, NaN, 'y',null]

console.log("Исходный массив:", array);
 
console.log ("количество элементов массива:",array.length);

function showElement(elem) {

    console.log(elem);

}

array.forEach(showElement);  
