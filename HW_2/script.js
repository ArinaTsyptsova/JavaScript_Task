// // //Task_1
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
// //без исключения, когда числа равны
alert((num1 < num2) ? 'Первое число меньше второго' : 'Первое число больше второго')

// // //Task_2
let test = true;
(test === true) ? console.log('+++') : console.log('---');

// //Task_3
let day = Number(prompt('Введите число от 1 до 31'));

if (day <= 10 && day != 0) {
    alert('Первая декада месяца');
} else if (day >= 11 && day <= 20) {
    alert('Вторая декада месяца');
} else if (day >= 21 && day <= 31) {
    alert('Третья декада месяца');
} else {
    alert('Введите корректное число от 1 до 31')
}

//Task_4
let numUser = Number(prompt('Введите число'));

let hundreds = Math.trunc(numUser%1000/100);
let tens = Math.trunc(numUser%100/10);
let units = Math.trunc(numUser%10);

alert(`В числе ${numUser} количесвто сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`)