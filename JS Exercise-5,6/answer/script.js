console.log("...........Reverse Word in a Sentence...........");

function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => word.split("").reverse().join(""));
    
    return reversedWords.join(" ");
}

const sentence = "Hello world ! this is JavaScript :)";
console.log("Original Senetence: ", sentence);
document.getElementById("q1").innerHTML = `1. Original Sentence: ${sentence}<br>
Reverse Word the Sentence: ${reverseWords(sentence)}`;
console.log("Reverse Senetence: ", reverseWords(sentence));
console.log("");




console.log("...........Sum of All Elements in an Array...........");

function sumArray(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

const numbers = [11, 2, 1, 0, 29, -22, 13, -4, 17];
console.log("Array: ", numbers);
document.getElementById("q2").innerHTML = `2. The Array: ${numbers.join(", ")}<br>
Sum of All Elements: ${sumArray(numbers)}`;
console.log("Sum of All Elements: ",sumArray(numbers));
console.log("");



console.log("...........Square & Sum each elements in an Array...........");

function squareAndSum(numbers) {
    const squaredNumbers = numbers.map(number => number ** 2);
    const sumOfSquares = squaredNumbers.reduce((sum, square) => sum + square, 0);
    return sumOfSquares;
}

document.getElementById("q3").innerHTML = `3. Sum of All Elements: ${squareAndSum(numbers)}`;
console.log("3. Square & Sum each Elements: ",squareAndSum(numbers));
console.log("");




console.log("...........Date in the format YYYY-MM-DD...........");

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

document.getElementById("q4").innerHTML = `4. Get Today's Date: ${getTodayDate()}`;
console.log("4. Get Today's Date: ",getTodayDate());
console.log("");



console.log("...........Prime Numbers in an Array...........");

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}
document.getElementById("q5").innerHTML = `5. Prime Numbers in the Array: ${filterPrimes(numbers)}`;
console.log("5. Prime Numbers in the Array: ",filterPrimes(numbers));
console.log("");



console.log("........... Capitalizes the first letter of each word............");
function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lowercase the rest
      .join(' ');
}

document.getElementById("q6").innerHTML = `6. Capitalizes the first letter: ${capitalizeWords(sentence)}`;
console.log("6. Capitalizes the first letter: ",capitalizeWords(sentence));
console.log("");



console.log("...........Maximum Number in an Array...........");

function findMax(arr) {
    return arr.reduce((max, current) => {
      return current > max ? current : max; // Compare each element and return the maximum
    }, -Infinity); // Start with a very small number to ensure any number in the array will be larger
}

document.getElementById("q7").innerHTML = `7. Max Number in the Array: ${findMax(numbers)}`;
console.log("7. Max Number in the Array: ",findMax(numbers));
console.log("");



console.log("...........If any Number in an Array is Negative............");

function anyNegative(arr) {
    const hasNegative = arr.some(num => num < 0);
    
    if (hasNegative) {
      const negativeNumbers = arr.filter(num => num < 0);
      document.getElementById("q8").innerHTML = `8. Any Negative Number in the Array: ${negativeNumbers}`;
      console.log('8. Negative Numbers in the Array: ', negativeNumbers);
    } else {
      console.log('No negative values found.');
    }
}

anyNegative(numbers);  
console.log("");



console.log("...........Count the Number of Vowels in a String...........");

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    
    return str.split('').reduce((count, char) => {
      // Check if the character is a vowel and increment the count if true
      return vowels.includes(char) ? count + 1 : count;
    }, 0); // Start counting from 0
}

document.getElementById("q9").innerHTML = `9. Count the no. of Vowels: ${countVowels(sentence)}`;
console.log("9. Count the no. of Vowels: ",countVowels(sentence));
console.log("");



console.log("...........Sum of all Valid Numeric Values in a Mixed Array...........");

function sumMixedArray(arr) {
    return arr.reduce((sum, current) => {
      if (typeof current === 'number') {
        return sum + current;
      }
      return sum;
    }, 0); 
}

const mixedArray = [1, 'hello', true, 13, null, 5, 'world', -4];

console.log("Mixed Array: ", mixedArray);
document.getElementById("q10").innerHTML = `10. Original Sentence: ${mixedArray.join(", ")}<br>
Sum of all Valid Numeric Values: ${sumMixedArray(mixedArray)}`;
console.log("Sum of all Valid Numeric Values: ", sumMixedArray(mixedArray));
console.log("");
