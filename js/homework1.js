const age = 10;
console.log(age);

// Example 1
let number = "20.34px";

const result = Number.parseFloat(number);

console.log("Размер равен =", result);

// Example 2
let salary = 23435.4145;
salary = Number(salary.toFixed(3));

console.log("Ваша зарплата:", salary);

// Example 3
const area = 45;
const power = 2;

const output = Math.pow(area, power);

console.log(output);

