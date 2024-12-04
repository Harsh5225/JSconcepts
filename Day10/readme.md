# JavaScript Objects: Creation, Manipulation, and Methods

This code demonstrates how to create and manipulate objects in JavaScript using various techniques, such as direct initialization, the `new Object()` method, and classes. It also covers key methods and operations like `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`, and the spread operator (`...`).

## Code Explanation

### 1. **Creating Objects**
There are different ways to create objects in JavaScript:

#### 1.1 Object Initialization (Literal Notation)
```javascript
const obj = {
  0: 20,
  1: 50,
  name: "Harsh",
  age: 21,
  occupation: "Developer",
  "account number": "12839",
  undefined: 30,
  null: 50,
};
```
- In this method, the object is created by directly defining key-value pairs. 
- **String keys** (like `"account number"`) and **special keys** (like `undefined` and `null`) can be used, but these keys will be automatically converted to strings.

#### 1.2 Using `new Object()`
```javascript
const person = new Object();
person.name = "Apex";
person.age = 25;
person.occupation = "Developer";
```
- The `new Object()` method is used to create an empty object, and properties are added to it after creation.

#### 1.3 Using Classes
```javascript
class People {
  constructor(name, sports, gender) {
    this.name = name;
    this.sports = sports;
    this.gender = gender;
  }
}

let per1 = new People("Rohit", "cricket", "male");
let per2 = new People("Rahul", "football", "male");
```
- A class is defined using `class` syntax and then instantiated with `new People()`. This is a modern way to create and initialize objects with multiple properties.

### 2. **Accessing Object Properties**
- Properties can be accessed in two ways: **dot notation** and **bracket notation**.
```javascript
console.log(obj.name); // Dot notation
console.log(obj["name"]); // Bracket notation
console.log(obj["account number"]); // Useful when property name has spaces
console.log(obj["0"]); // Accessing array-like index keys
```
- Bracket notation is often used when the property name contains spaces or is a number.

### 3. **Deleting Properties**
You can delete properties from an object using the `delete` operator:
```javascript
delete person.age;
console.log(person); // "age" property is removed
```

### 4. **Common Methods for Objects**

#### 4.1 `Object.keys()`
The `Object.keys()` method returns an array of the object's keys (property names).
```javascript
let keyarray = Object.keys(obj1);
console.log(keyarray); // ["name", "age", "occupation", "hobbies", "address"]
```

#### 4.2 `Object.values()`
The `Object.values()` method returns an array of the object's values.
```javascript
let valuearray = Object.values(obj1);
console.log(valuearray); // ["Apex", 25, "Developer", ["cricket", "football", "tennis"], {street: "street1", city: "city1", state: "state1"}]
```

#### 4.3 `Object.entries()`
The `Object.entries()` method returns an array of key-value pairs from the object.
```javascript
const keyvalue = Object.entries(obj1);
console.log(keyvalue); // [["name", "Apex"], ["age", 25], ["occupation", "Developer"], ["hobbies", ["cricket", "football", "tennis"]], ["address", {street: "street1", city: "city1", state: "state1"}]]
```

### 5. **Merging Objects**

#### 5.1 `Object.assign()`
The `Object.assign()` method copies the values of all properties from one or more source objects to a target object.
```javascript
const obj2 = {a: 1, b: 2};
const obj3 = {c: 3, d: 4};
const obj5 = Object.assign({}, obj2, obj3); // Merge obj2 and obj3 into a new object
console.log(obj5); // {a: 1, b: 2, c: 3, d: 4}
console.log(obj2); // Original obj2 remains unchanged

const obj6 = {e: 6, d: 8};
const obj7 = Object.assign({}, obj2, obj3, obj6); // Merging multiple objects
console.log(obj7); // {a: 1, b: 2, c: 3, d: 8, e: 6}
```
- `Object.assign()` can be used to merge objects. The changes are applied to the first object, but by using an empty object `{}`, we can avoid modifying the original objects.

#### 5.2 Spread Operator (`...`)
The spread operator (`...`) is a more concise way to copy or merge objects.
```javascript
const newobj = {...obj2, ...obj3};
console.log(newobj); // {a: 1, b: 2, c: 3, d: 4}
```
- The spread operator expands the properties of the source objects into the target object.

### 6. **Special Cases with Key Names**
- **`undefined` and `null` as Keys**: In JavaScript, even values like `undefined` and `null` can be used as object keys, but they are automatically converted to strings:
```javascript
console.log(obj.undefined); // 30
console.log(obj.null); // 50
```

### Conclusion
- **Creating Objects**: You can create objects using literal notation, `new Object()`, or classes.
- **Accessing and Modifying**: You can access and modify properties using dot notation or bracket notation. Deleting properties is also possible with the `delete` operator.
- **Common Methods**: Use `Object.keys()`, `Object.values()`, and `Object.entries()` for working with object keys and values. `Object.assign()` and the spread operator (`...`) help merge or copy objects.

This code demonstrates the versatility of JavaScript objects, showing different ways to create, manipulate, and merge objects in real-world scenarios.