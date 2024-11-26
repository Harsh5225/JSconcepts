let a = "Hello";
console.log(a);

// Datatype
// primitive
// number string  bool undefined null BigInt

// let a = "Hello";
// console.log(a);

// Datatype
// primitive
// number string bool undefined null BigInt

let val = null;
console.log(typeof val);

// number 64 bit is assigned
// largest number stored in 64 bit
// smallest
let number = BigInt(38792222222222222222222222222222222222222222222);
let num1 = 38792222222222222222222222222222222222222222222n;

console.log(number);
console.log(num1);

console.log(Number.MAX_SAFE_INTEGER);

//Non primitive

// Object
let obj = {
  myName: "learnjavascript",
  age: 21,
};

// Array
let arr = [1, 2, 3, 4, 5];

// Function
function sum() {
  console.log(1 + 2);
}

// Date
let date = new Date();

// Regex example
let str =
  "I love learning javascript, it's one of my favorite programming languages! javascript";
let regex = /javascript/gi;
// here gi is globql flag , allows searches for all occurences of the pattern
// i flag makes the regex case-insensitive, meaning it will match regardless of uppercase or lowercase letters.
let result = str.match(regex);
console.log(result);
// Output: ["javascript", "javascript"]

// Maps
let map = new Map();

// Set
let set = new Set();

// WeakMap
let wm = new WeakMap();
let obj1 = {};
let obj2 = {};

wm.set(obj1, "value1");
wm.set(obj2, "value2");

console.log(wm.get(obj1)); // Output: "value1"
console.log(wm.get(obj2)); // Output: "value2"
