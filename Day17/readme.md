### Understanding Hoisting and Execution Context in JavaScript

This README provides a detailed explanation of **hoisting** and its relation to the **execution context** in JavaScript, illustrated with examples. These are fundamental concepts to understand how JavaScript code runs under the hood.

---

### What is Hoisting?

**Hoisting** refers to the process in JavaScript where variable and function declarations are moved to the top of their scope during the **memory allocation phase**, before the execution phase begins. 

---

### What is an Execution Context?

An **execution context** is an abstract concept that contains the environment in which JavaScript code is evaluated and executed. It consists of two main phases:

1. **Memory Allocation Phase (Creation Phase)**:
   - During this phase:
     - **Function declarations** are stored in memory, making the entire function accessible before execution.
     - Variables declared with `var` are assigned a default value of `undefined`.
     - Variables declared with `let` and `const` are hoisted but remain uninitialized (temporal dead zone).

2. **Code Execution Phase**:
   - The JavaScript engine executes the code line by line.
   - Variable values are assigned, and function calls are made.

---

### Components of an Execution Context

1. **Memory Component (Variable Environment)**:
   - Stores variable and function declarations.

2. **Code Execution Component**:
   - Executes the code line by line.

---

### Code Example with Execution Context Walkthrough

```javascript
console.log(x); // undefined (due to var hoisting)
console.log(y); // ReferenceError: Cannot access 'y' before initialization
console.log(z); // undefined (declared but not initialized yet)

let z;
var x = undefined; // var is hoisted and initialized to undefined
let y; // let is hoisted but remains uninitialized

console.log(x); // undefined
x = 10;
y = 20;
console.log(x); // 10

// Function declaration is fully hoisted
greet(); // Output: "Hello World"

function greet() {
  console.log("Hello World");
}
```

#### Execution Context Breakdown:

1. **Memory Allocation Phase**:
   - `x` (declared with `var`) → initialized to `undefined`.
   - `y` (declared with `let`) → hoisted but uninitialized.
   - `z` (declared with `let`) → hoisted but uninitialized.
   - `greet` (function declaration) → entire function is stored in memory.

2. **Code Execution Phase**:
   - `console.log(x)` → Outputs `undefined` (from memory).
   - `console.log(y)` → Throws `ReferenceError` because `y` is in the temporal dead zone.
   - `x = 10` → Assigns `10` to `x`.
   - `y = 20` → Assigns `20` to `y`.
   - `greet()` → Executes the `greet` function, outputting "Hello World".

---

### Function Expressions in Execution Context

```javascript
console.log(meet); // undefined

let meet = function () {
  console.log("Hello world");
};
```

#### Execution Context Breakdown:

1. **Memory Allocation Phase**:
   - `meet` (declared with `let`) → hoisted but uninitialized.

2. **Code Execution Phase**:
   - `console.log(meet)` → Throws `ReferenceError` because `meet` is uninitialized at this point.

---

### Using `var` with Function Expressions

```javascript
meeet(); // TypeError: meeet is not a function

var meeet = function () {
  console.log("Hello world");
};
```

#### Execution Context Breakdown:

1. **Memory Allocation Phase**:
   - `meeet` (declared with `var`) → initialized to `undefined`.

2. **Code Execution Phase**:
   - `meeet()` → Throws `TypeError` because `undefined` is not a function.
   - `meeet = function () { console.log("Hello world"); }` → Assigns the function to `meeet`.

---

### Key Concepts of Execution Context

1. **Temporal Dead Zone**:
   - The time between the hoisting of a `let` or `const` variable and its declaration is called the temporal dead zone. Accessing the variable during this period causes a `ReferenceError`.

2. **Order of Execution**:
   - During the **memory allocation phase**, variables and functions are hoisted.
   - During the **code execution phase**, values are assigned, and functions are invoked.

---

### Key Takeaways

1. **Hoisting**:
   - Function declarations are fully hoisted, making them accessible before their definition.
   - Variables declared with `var` are hoisted and initialized to `undefined`.
   - Variables declared with `let` and `const` are hoisted but uninitialized.

2. **Execution Context**:
   - Consists of memory allocation and code execution phases.
   - Understanding execution context helps prevent errors like `ReferenceError` and `TypeError`.

3. **Function Expressions**:
   - Treated like variables and follow their hoisting rules.

By understanding hoisting and execution context, you can write JavaScript code that behaves as expected and avoid common pitfalls!