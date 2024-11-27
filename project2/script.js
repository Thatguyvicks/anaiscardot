function reverseString(str) {
    return str.split('').reverse().join('');
}
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

function countCharacters(str) {
    return str.length;
}
const inputString = "Hello, World!";
const characterCount = countCharacters(inputString);
console.log(`The string "${inputString}" has ${characterCount} characters.`);

function capitalizeWords(sentence) {
    return sentence
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');
     }

const inputSentence = "hello world! this is a test.";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log("Original Sentence:", inputSentence);
console.log("Capitalized Sentence:", capitalizedSentence);

function findMax(arr) {
    return Math.max(...arr);
}
//ARRAY FUNCTIONS
//number 1
function findMin(arr) {
    return Math.min(...arr);
}
const number = [5, 12, -3, 8, 0, 7];
console.log("Maximum Value:", findMax(number)); 
console.log("Minimum Value:", findMin(number)); 

// number 2
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array.");
    }

    return arr.reduce((sum, num) => sum + num, 0);
}
const numb = [1, 2, 3, 4, 5];
console.log(sumArray(numb)); 
// number 3
function filterArray(arr, condition) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array.");
    }
    if (typeof condition !== "function") {
        throw new Error("Condition must be a function.");
    }

    return arr.filter(condition);
}

const numbe = [1, 2, 3, 4, 5, 6];

const filtered = filterArray(numbe, num => num >= 4);
console.log(filtered);
// mathematial functions
// number 1
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); 

// number 2
function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    if (num === 2) {
        return true; 
    }
    if (num % 2 === 0) {
        return false;
    }
    const sqrt = Math.sqrt(num); 
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}
console.log(isPrime(2)); 
console.log(isPrime(17)); 
console.log(isPrime(18)); 

// number 3
function generateFibonacci(terms) {
    if (terms <= 0) {
        return []; 
    }
    if (terms === 1) {
        return [0]; 
    }
    const sequence = [0, 1]; 
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(generateFibonacci(5)); 
console.log(generateFibonacci(10)); 