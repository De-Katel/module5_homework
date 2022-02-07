// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат 
// true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых 
// элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

// Решение:

let array = [1, 1];

console.log(array);

let counter = 0;

for (let i = 1; i < array.length; i++) {

    if (array[i] === array[0]) {

        counter += 1;
    }
}

if (counter == array.length - 1) {

    console.log(true);

} else {

    console.log(false)
}





