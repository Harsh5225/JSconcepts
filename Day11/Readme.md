# JavaScript Object Basics

This document covers fundamental concepts of JavaScript objects, including shallow and deep copying, object methods like `Object.freeze` and `Object.seal`, destructuring, and prototype inheritance. It also demonstrates practical examples for better understanding.

---

## Shallow Copy vs. Deep Copy
### Shallow Copy:
A shallow copy creates a new reference to the same object. Changes to nested objects affect the original object.
```javascript
let obj = {
  a: 1,
  b: 2,
};

let obj2 = obj; // shallow copy
obj2.b = 3;
console.log(obj2); // { a: 1, b: 3 }
console.log(obj); // { a: 1, b: 3 }
```

### Deep Copy:
A deep copy creates a new object with its own copy of nested objects. Use `structuredClone` for a deep copy.
```javascript
console.log("Deep Copy");

let obj3 = structuredClone(obj2);
obj3.b = 10;
console.log(obj3); // { a: 1, b: 10 }
console.log(obj2); // { a: 1, b: 3 }
```

---

## Nested Objects and `Object.assign`
`Object.assign` performs a shallow copy, so changes to nested objects in the copied object reflect in the original.
```javascript
let obj4 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};

let useObj = Object.assign({}, obj4);
useObj.b.c = 10;
console.log(obj4.b.c); // 10
useObj.a = 50;
console.log(obj4.a); // 1
```
> **Problem:** `Object.assign` is not suitable for deep copying nested objects. Use `structuredClone` for deep copying.

---

## Object Methods: `freeze` and `seal`
### `Object.freeze`:
Prevents modification of an object’s properties and values.
```javascript
const objnaya = { prop: 42 };
Object.freeze(objnaya);
objnaya.prop = 33; // Error in strict mode
console.log(objnaya.prop); // 42
```

### `Object.seal`:
Prevents adding/removing properties but allows modification of existing ones.
```javascript
const object1 = { property1: 42 };
Object.seal(object1);
object1.property1 = 33; // Allowed
console.log(object1.property1); // 33
delete object1.property1; // Not allowed
console.log(object1.property1); // 33
```

---

## Destructuring
### Object Destructuring:
```javascript
let objn = {
  name: "Harsh",
  age: 21,
  address: { city: "Pune" },
  hobbies: ["Cricket", "Football"],
};

const { name: Fullname, age, address: { city }, hobbies: [hobby1, hobby2] } = objn;
console.log(Fullname, age, city); // "Harsh" 21 "Pune"
```

### Array Destructuring:
```javascript
const arr = [12, 29, 203, 249];
const [first, second, ...third] = arr;
console.log(first, second, third); // 12 29 [203, 249]
```

---

## Prototype and Inheritance
### Prototype Basics:
Every object in JavaScript has a prototype, which provides inheritance.
```javascript
let user = { name: "John", age: 30 };
let user2 = { amount: 20 };
user2.__proto__ = user; // Inherit properties from `user`
console.log(user2.name); // "John"
```

### Prototype Chaining:
Objects inherit from prototypes in a chain-like manner.
```javascript
let arr = [1, 2, 4, 5];
console.log(Array.prototype == arr.__proto__); // true
console.log(Array.prototype.__proto__ == Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__ == null); // true
```

---

## Key Points
- Shallow copies share references; deep copies clone the entire structure.
- Use `Object.freeze` for immutable objects and `Object.seal` for fixed structure objects.
- Destructuring simplifies unpacking values from objects or arrays.
- Prototype inheritance allows objects to share properties and methods.
- Use `structuredClone` for deep copying nested objects efficiently.

This concludes the basic overview of JavaScript object concepts. Use these techniques to manage and manipulate objects effectively in your code.