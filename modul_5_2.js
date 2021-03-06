// Задание 2.
// Дана переменная Х, которая может принимать любое значение.
//  Написать программу, которая в зависимости от типа данных Х 
//  выводит в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу.
//  В других случаях выводите сообщение: «Тип x не определён».

// Решение:

let X = true;
if (typeof (X) == 'number') {
    if (isNaN(X)) {
        console.log('Тип x Number, но это NaN');
    } else {
        console.log('X - число');
    }
} else if (typeof (X) == 'boolean') {
    console.log('X принадлежит логическому типу(boolean)');
} else if (typeof (X) == 'string') {
    console.log('X - строка');
} else {
    console.log('Тип x не определён');
}