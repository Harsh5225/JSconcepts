// console.log(global);
// console.log(window.Math.random()); // error because in node globalObject is defined by global not window
// window is defined in browser
// then if someone wants to use one name irrespective different name, whcih helps everyone to know the about the state
// for this we globalThis
// console.log(globalThis.Math.random());
// globalThis always point to globalObject

// console.log(window);
// console.log(this);

// window===this   // scope is global. that is why 'this' key refers to window(globalObject) browser par
// node mai log(this) kare to yeah ek empty object ko refer karta hai i.e Module's exports object
// "use strict"; // latest version ko follow karte hai

function greet() {
  console.log(this);
}
console.log("greet");

window.greet(); // now  "{this}" in greet refers to window object even in strict mode
// when this is called in non strict mode console.log(this ) points to "{window object}"
// when this is called in strict mode console.log(this ) logs "{undefined}"
// but now when "{greet()}" it is used as {"window.greet()"} ->
// a = 10;
// console.log(a); // in non strict mode a is consoled but in strict mode error is ther it is not defined (ReferenceError: a is not defined)

// ("use strict");
// let object = {
//   name: 10,
// };
// Object.freeze(object);

// object.name = 20; // Throws TypeError in strict mode but this is not happening in the ide
// console.log(object); // Output: { name: 10 }

const obj2 = {
  name: "Rahul",
  age: 20,
  greet: function () {
    console.log("Refers", this); // this refers to object "{obj}"
    // console.log(name); // error:"{name is not defined}"
    console.log(this.name);
  },
};
obj2.greet();

// arrow function don't have their own "{this}"

let obj3 = {
  name: "cartoon",
  age: 15,
  meet: () => {
    console.log(this); // this is referring to window object
  },
};
obj3.meet();

// In this case, this refers to the global context (window in browsers or global in Node.js).
// Arrow functions do not have their own this.
//  Instead, they lexically inherit this from the surrounding scope where they are defined.
// Since meet is defined in the global context (or module scope), this is bound to the global object.
// Key Differences Between Regular Functions and Arrow Functions:
// Regular Functions: The value of this depends on how the function is called.

// If called as a method of an object, this refers to the object.
// If called standalone (e.g., greet()), this refers to the global object (window in browsers).
// Arrow Functions: this is lexically bound. It takes the this value from the surrounding scope where it was defined, regardless of how it is called.

// Takeaway:
// Use regular functions when you need this to refer to the object calling the function.
// Use arrow functions when you don't want this to change based on how the function is invoked.

let obj4 = {
  name: "cartoon",
  age: 15,
  meet: function () {
    let a = () => {
      console.log(this);
    };
    a();
  },
};
obj4.meet();

//* 1.meet is a regular function:

// *2.When obj4.meet() is called, the this inside meet refers to obj4 because it is invoked as a method of obj4.
// *a is an arrow function:

// *3.Arrow functions do not have their own this; instead, they inherit this from their enclosing scope at the time they are defined.
// *Here, the enclosing scope of the arrow function a is the meet function, and this inside meet refers to obj4.
// *Therefore, this inside the arrow function also refers to obj4.
// *When a() is invoked, it logs the value of this, which is obj4.

class person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}
// this refers to (that is instance /refernce to the object a)
let a = new person("harsh", 21);
console.log(a.name, a.age);

// arrow function do not have their own "{this}", when we try to console log "{this}" inside the arrow function it will look the surrounding lexical scope in which arrow function is present,{"this"} will refer to that lexical scope
