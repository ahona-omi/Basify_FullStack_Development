console.log("...........Sum of Numbers (Loop)...........");
let n = prompt("Enter a number for sum & Multiplication Table: ");
n = Number(n);

function sum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    document.getElementById("q1").innerHTML = `1. Sum of Numbers from 1 to ${n} = ${sum}`;
    console.log(`Sum of Numbers (Loop) ${n} = ${sum}`);
}
sum(n);
console.log("");



console.log("...........Object Properties...........");
let book = {
    title: "A Study in Scarlet",
    author: "Sir Arthur Conan Doyle",
    year: 1887
  };
  
function printBookDetails(book){
    document.getElementById("q2").innerHTML = `2. Title: ${book.title}<br>  Author: ${book.author}<br>  Year: ${book.year}`;

    console.log(`Title: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}`);
}
printBookDetails(book);
console.log("");



console.log("...........Array Reversal...........");
let arr = new Array(11, 22, 33, 44, 55);

document.getElementById("q3").innerHTML = `3.  Main Array: ${arr.join(", ")}<br>`;
console.log(`Main Array: ${arr.join(", ")}`);

document.getElementById("q3").innerHTML += `Reversed Array: `;
console.log(`Reversed Array:`);

function arrReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        document.getElementById("q3").innerHTML += `${arr[i]}, `;
        console.log(arr[i]);
    }
}
arrReverse(arr);
console.log("");



console.log("...........Count Occurrences (1D Array)...........");
let arrString = ["apple", "banana", "corn", "apple", "corn", "corn"];

function cntOccurrence(arrString){
    let cnt = {};

    for (let i of arrString){
        if(cnt[i]){
            cnt[i]++;
        } else{
            cnt[i] = 1;
        }
    }
// Use JSON.stringify to format the object as a string
    document.getElementById("q4").innerHTML = `4. Count Occurrences (1D Array):<br>${JSON.stringify(cnt)}`;
    console.log(JSON.stringify(cnt));
}
cntOccurrence(arrString);
console.log("");



console.log("...........Multiplication Table (2D Array)...........");
document.getElementById("q5").innerHTML = `5. Multiplication Table (2D Array) till ${n}<br>`;
console.log(`Multiplication Table (2D Array) till ${n}`);

function multiplicationTable(n){
    let table = [];

    for (let i = 1; i <= n; i++){
        let row = [];
        
        for(let j = 1; j <= n; j++){
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
let result = multiplicationTable(n);
let resultString = result.map(row => row.join("   ")).join("<br>");
document.getElementById("q5").innerHTML += resultString;
console.log(result);
console.log("");



console.log("...........Average of Array (1D)...........");
function avgArr(arrNum){
    let avg = 0;

    for (let i of arrNum){
        avg += i;
    }
    avg = (avg/arrNum.length);
    document.getElementById("q6").innerHTML = `6. Average of Array (1D): ${avg}`;
    console.log(`Average of Array (1D): ${avg}`);
}
avgArr(arr)
console.log("");



console.log("...........Flatten a 2D Array...........");
let arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function flattenArr(arr2D) {
    let arr1D = [];
    
    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {
            arr1D.push(arr2D[i][j]);
        }
    }
    document.getElementById("q7").innerHTML = `7. Flatten a 2D Array into 1D: ${arr1D.join(", ")}`;
    console.log(`Flatten a 2D Array into 1D: ${arr1D}`);
}
flattenArr(arr2D);
console.log("");
