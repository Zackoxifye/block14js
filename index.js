//                                      ONLY ODDS

// Create a JavaScript code that accepts an array of numbers
// and returns a new array using only the odd number(s) from the 
// original array

// n%2 is used to see if a number is even or odd

const numArray1 = [2, 4, 6, 8, 11, 20, 15, 22];
let odds1 = numArray1.filter(n => n%2);
console.log(odds1);

const numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds2 = numArray2.filter(n => n%2);
console.log(odds2);

const numArray3 = [70, 42, 55, 81, 21, 91, 34];
let odds3 = numArray3.filter(n => n%2);
console.log(odds3);

const numArray4 = [2, 4, 6, 8, 10, 11, 12];
let odds4 = numArray4.filter(n => n%2);
console.log(odds4);



//                                      VOWEL VS CONSONANT

// Create a JavaScript code that accepts a sting of lowercase letters.
// Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", and "u" are considered vowels. 
// Every other letter is considered a consant.

let vowels = ["a", "e", "i", "o", "u"];
let cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

function countVowel(str1)
for (let i = 1; i <= str1; i++){
    if( i == vowels) vowels;
    if( i == cons) cons;
    output = `${str1} has ${cons} consonants and ${vowels} vowels. `;

}


countVowel("hello")

//                                      REVERSE ARRAY

// With a for loop, create a JavaScript code that creates a new array in reverse order.
// let i = the array length minus 1 to start at the last number in the array 
// and have the code run as long as i is greater than or equal to 0
// use i-- because we want to work backwards through the array

// console.log("Array 1:");

// const arr1 = [1, 2, 3];

// for(let i = arr1.length -1; i >= 0; i--){
//     console.log(arr1[i]);
// }

// console.log("Array 2:");

// const arr2 = [1, 3, 5, 7, 9, 11];

// for(let i = arr2.length -1; i >= 0; i--){
//     console.log(arr2[i]);
// }

// console.log("Array 3:");

// const arr3 = [20, 50, 30, 60, 200];

// for(let i = arr3.length -1; i >= 0; i--){
//     console.log(arr3[i]);
// }

// console.log("Array 4:");

// const arr4 = [1, -1, 2, -3, 5, -8, 13];

// for(let i = arr4.length -1; i >= 0; i--){
//     console.log(arr4[i]);
// }



//                                                  FIZZBUZZ

// Create a JavaScript code that prints each number from 1 to 100 on a new line
// For each multiple of 3, print the word "Fizz" instead of the number
// For each multiple of 5, print the word "Buzz" instead of the number
// For numbers that are both multiples of 3 and 5, print "FizzBuzz" instead of the number
// let i equal one since we are counting and use as long as i is less than or equal to the range(100)
// then the code will keep going, use i++ to move to the next number after the code runs through once

// function FizzBuzz (range) {
//     for (let i = 1; i <= range; i++){
//     if (i % 3 === 0) output = 'Fizz';
//     if (i % 5 === 0) output = 'Buzz';
//     else output = `${i}`;
//     console.log(output);
//     }
// }

// FizzBuzz(100)