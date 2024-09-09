// Task 1
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
let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Task 3
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
for (let i = 1; i < 21; i++){
    let string = ""
    for (let j = 1; j <= i; j++){
        string += "x";
    }
    console.log(string);
}