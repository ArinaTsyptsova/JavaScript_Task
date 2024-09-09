// Task 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const arr = [...Array(11).keys()];

for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        console.log(`${arr[i]} - это ноль`)
    }
    else if (i !== 0 & arr[i] % 2 !== 0) {
        console.log(`${arr[i]} - нечетное число`);
    } else {
        console.log(`${arr[i]} - четное число`);
    }
}

// Task 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Task 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
let arrayRandom = []
for (let i = 0; i < 5; i++) {
    arrayRandom.push(Math.round(0 + Math.random() * ((8 - 0) + 1)))
}
console.log(arrayRandom);

// сумма
let sum = arrayRandom.reduce(function(a, b){
    return a + b;
}, 0);
console.log(sum);

// минимальное число
const min = Math.min(...arrayRandom);
console.log(min);

// поиск числа 3
console.log(arrayRandom.includes(3));

// Task 4
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

for (let i = 1; i < 21; i++){
    let string = ""
    for (let j = 1; j <= i; j++){
        string += "x";
    }
    console.log(string);
}