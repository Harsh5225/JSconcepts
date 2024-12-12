# JavaScript Features Demo

This script demonstrates various core features and operations in JavaScript. It covers property manipulation, iteration techniques, array operations, callback usage, and functional programming methods.

## Table of Contents
1. **Object Property Descriptors**
2. **Looping Techniques**
3. **Array Methods**
4. **Callback Functions**
5. **Filter, Map, and Reduce**
6. **Practical Examples**

---

## 1. Object Property Descriptors
### Example
```javascript
const user = {
  name: "tyiryana",
  age: 30,
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "roxci"; // This assignment is ignored because 'name' is not writable.
console.log(user.name);
```
### Key Points:
- `Object.getOwnPropertyDescriptor` fetches metadata about an object's property.
- `Object.defineProperty` modifies property descriptors (e.g., making a property non-writable).

---

## 2. Looping Techniques
### `for...of` Loop
Iterates over iterable objects (arrays, strings, etc.).

```javascript
const arr = [10, 20, 20, 89];
for (let value of arr) {
  console.log(value);
}

let str = "yoToYoooooo";
for (let value of str) {
  console.log(value);
}
```
**Caution:** Objects are not iterable by default. Use `Object.keys`, `Object.values`, or `Object.entries` for iteration.

```javascript
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let value of Object.keys(obj)) {
  console.log(value);
}
```

---

## 3. Array Methods
### `forEach`
Iterates over an array and allows modification of elements.
```javascript
let arr2 = [10, 20, 30, 40, 50];
arr2.forEach((val, index, v) => {
  console.log(`Value is ${val} and Index is ${index}`);
  v[index] = v[index] + 2;
});
console.log(arr2); // Modified array
```

---

## 4. Callback Functions
### `setInterval`
Demonstrates a callback function in periodic execution.
```javascript
function fetchdata() {
  console.log("I am fetching data");
}

// Uncomment to test:
// setInterval(fetchdata, 5000);
```

---

## 5. Filter, Map, and Reduce
### Filtering Arrays
Filters elements based on a condition.
```javascript
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenArray = arr3.filter((val) => val % 2 === 0);
console.log(evenArray);
```

### Practical Filtering with Objects
Filters a list of students by marks.
```javascript
const students = [
  { name: "Rohan", age: 22, marks: 70 },
  { name: "Darshan", age: 22, marks: 40 },
  { name: "Naindeep", age: 21, marks: 30 },
  { name: "Rahul", age: 22, marks: 95 },
];

const passedStudents = students.filter(({ marks }) => marks >= 50);
console.log(passedStudents);
```

### Modifying Arrays with `map`
```javascript
let simpleArr = [10, 20, 30, 40, 50];
const modifiedArr = simpleArr.map((val) => val + 2);
console.log(modifiedArr);
```

### Combining `filter` and `map`
```javascript
console.log(
  arr3
    .filter((val) => val % 2 === 0)
    .map((num) => num * num)
); // Squares of even numbers
```

### Reducing Arrays
```javascript
let arr9 = [1, 2, 3, 4, 5, 6];
let total = arr9.reduce((sum, val) => sum + val);
console.log(total);
```

---

## 6. Practical Examples
### Filtering and Mapping Complex Objects
```javascript
const students = [
  { name: "Rohan", age: 22, marks: 70 },
  { name: "Darshan", age: 22, marks: 40 },
  { name: "Naindeep", age: 21, marks: 30 },
  { name: "Rahul", age: 22, marks: 95 },
];

const highScorers = students
  .filter((student) => student.marks >= 50)
  .map((student) => ({ ...student, status: "Passed" }));

console.log(highScorers);
```

---

## Summary
This script highlights the versatility of JavaScript's core features for data manipulation, iteration, and functional programming. By understanding and applying these techniques, developers can write more efficient and readable code.

