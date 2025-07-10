// 1. Write a function that takes a number as input and returns its square.

import Array from "./dsa/Array.js";
import BinarySearch from "./dsa/BinarySearch.js";
import LeetCodeArray from "./dsa/LeetCodeArray.js";
import Recursion from "./dsa/Recursion.js";
import Sorting from "./dsa/Sorting.js";
import TwoPointerTechnique from "./dsa/TwoPointerTechnique.js";

function squareNum(num) {
  return num * num;
}
// console.log(squareNum(5));

// 2. A program that takes a number input and prints if it is even or odd.

const evenOrOdd = (num) => (num % 2 === 0 ? "even" : "odd");

// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(evenOrOdd(9));

// 3. A loop that prints numbers from 1 to 10.
function getNumbers(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// getNumbers(10);

// 4. A program that multiplies two numbers using an arrow function.
// const multiTwoNum = (n, m) => n * m;
const multiTwoNum = (n, m) => {
  console.log(n * m);
};
// multiTwoNum(5, 6);
// Array();
// TwoPointerTechnique();
// BinarySearch();
// Sorting();
// Recursion();
LeetCodeArray();
