// Task_1
let getExponentiation = (num1, num2) => Math.pow(num1, 3) + Math.pow(num2, 3);
alert(getExponentiation(prompt('Введите первое число'), prompt('Введите второе число')));

// Task_2
function salaryWithTax (num) {
    if (isNaN(num)) {
    console.log('Значение задано неверно');
} else {
    const money = num - num * 0.13
    console.log(`Размер заработной платы за вычетом налогов равен ${money}`);
}
}

const userSalary = prompt('Введите Вашу зарплату в цифрах');
console.log(salaryWithTax(userSalary));

// Task_3
const userNum1 = prompt('Введите первое число');
const userNum2 = prompt('Введите второе число');
const userNum3 = prompt('Введите третье число');

const getMaxNumder = (userNum1, userNum2, userNum3) => Math.max(userNum1, userNum2, userNum3);
console.log("Максимальное число " + getMaxNumder(userNum1, userNum2, userNum3));

// Task_4
const sum = (num1, num2) => num1 + num2;

function difference (num1, num2) {
    if (num1 > num2) {
        console.log(num1 - num2);
} else if (num2 > num1) {
        console.log(num2 - num1);
} else {
        console.log(0);
}
}

const getNumMultiplication = (num1, num2) => num1 * num2;
const getNumDivisions = (num1, num2) => num1 / num2;

console.log(sum(9,3));
difference(9,3);
difference(2,3);
difference(3,3);
console.log(getNumMultiplication(9,3));
console.log(getNumDivisions(9,3));