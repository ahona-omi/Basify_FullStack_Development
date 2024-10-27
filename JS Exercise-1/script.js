console.log("...........Task 1️⃣...........");
let a = 10;
let b = 5;
console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
console.log("");

console.log("...........Task 2️⃣...........");
let c = 32;
let c2f = (c*(9/5))+32;

let f2c = (c2f-32) * (5/9);
console.log(`Temperature from Celsius to Fahrenheit: ${c2f}`);
console.log(`Temperature from Fahrenheit to Celsius: ${f2c}`);
console.log("");


console.log("...........Task 3️⃣...........");
let number = prompt("Enter a number: ");

// Convert input to a number
number = Number(number);

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
console.log("");


console.log("...........Task 4️⃣...........");
let mark = prompt("Enter your mark: ");

// Convert input to a number
mark = Number(mark);

if (mark >= 90) {
    console.log("A");
} else if (mark < 90 && mark >= 80) {
    console.log("B");
} else if (mark < 80 && mark >= 70) {
    console.log("C");
} else if (mark < 70 && mark >= 60) {
    console.log("D");
} else {
    console.log("F");
}
console.log("");


console.log("...........Task 5️⃣...........");
let no = prompt("Enter a number: ");

// Convert input to a number
no = Number(no);

if (no % 2 == 0) {
    console.log("The number is Even.");
} else {
    console.log("The number is Odd.");
}
console.log("");
