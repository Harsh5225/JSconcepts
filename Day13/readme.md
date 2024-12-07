# JavaScript Basics: Conditional Statements, Scopes, Loops, and Object Manipulation

This code provides a foundational understanding of various JavaScript concepts, including conditional statements, scope management, loops, and object manipulation.

## Table of Contents
1. [Conditional Statements](#conditional-statements)
2. [Scope](#scope)
3. [Hoisting](#hoisting)
4. [Loops](#loops)
5. [Object Manipulation](#object-manipulation)

---

## Conditional Statements
This section covers decision-making in JavaScript using `if`, `else if`, and `switch` statements.

### Example 1: `if-else`
```javascript
let age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible to vote");
}
```

### Example 2: Nested `else if`
```javascript
let time = 40;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

### Example 3: `switch` statement
```javascript
let date = new Date().getDay();
switch (date) {
  case 0:
    console.log("SUNDAY");
    break;
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  default:
    console.log("Invalid day");
}
```

---

## Scope
This section demonstrates the differences between global scope, local scope (functional scope), and block scope in JavaScript.

### Example 1: Functional Scope
```javascript
function lscope() {
  let x = 10;
  console.log(x); // Accessible within the function
}
// console.log(x);  // ReferenceError: x is not defined
```

### Example 2: Block Scope
```javascript
if (true) {
  let a = 5;
  const b = 3;
  var c = 90;
}
console.log(c);  // Output: 90 (var is function-scoped or global)
// console.log(a, b); // ReferenceError: a and b are not defined
```

### Example 3: Shadowing
```javascript
let amount = 300;
if (true) {
  let amount = 500;
  console.log(amount); // Output: 500 (local scope)
}
console.log(amount); // Output: 300 (global scope)
```

---

## Hoisting
Demonstrates how function declarations are hoisted in JavaScript.
```javascript
meet(); // Works due to hoisting
function meet() {
  console.log("Hello");
}
```

---

## Loops
Illustrates the use of different loop structures in JavaScript.

### Example 1: `for` Loop
```javascript
let arr = [1, 2, 4, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Example 2: `while` Loop
```javascript
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum); // Output: 55
```

### Example 3: `do-while` Loop
```javascript
let b = 1;
let text = "";
do {
  text += "The number is " + b;
  b++;
} while (b < 10);
console.log(text);
```

---

## Object Manipulation
Demonstrates how to iterate over object keys and values in JavaScript.

### Example 1: Object Values
```javascript
let obj = {
  name: "Rahul",
  age: 25,
  city: "Delhi",
  hobbies: ["cricket", "football"],
};
let values = Object.values(obj);
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
```

### Example 2: Object Keys
```javascript
let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  console.log(obj[keys[i]]);
}
```

---

## Summary
This code covers fundamental concepts of JavaScript:
- **Conditional Statements**: Decision-making using `if`, `else if`, and `switch`.
- **Scope**: Differentiates between global, local, and block scope.
- **Hoisting**: Function declarations are accessible before their definition.
- **Loops**: Demonstrates `for`, `while`, and `do-while` loops.
- **Object Manipulation**: Explains how to retrieve and iterate over object properties.



