// Задание 8.

// Создайте произвольный массив Map. Получите его ключи и выведите
// в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

// Решения:

let fruits = new Map([

    ["8", "green"],
  
    [6, "red"],
  
    ["blueberry", "blue"]
  
  ]);

  for (let [key, value] of fruits) {

    console.log(`Ключ — ${key}, значение — ${value}`);

 }

      
  
