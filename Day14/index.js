// let obj = {
//   name: "Rahul",
//   age: 23,
//   city: "Kanpur",
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// !let obj2 = Object.create(obj) // prototype inheritance

// // Object.keys(obj)
// console.log(Object.keys(obj));

// let obj2 = Object.create(obj);
// obj2.money = 749393;
// obj2.id = "#352";
// console.log(obj2);
// console.log(Object.keys(obj2)); // it can access to only his key and dont have access to inherit keys
// here is differncee between use of for in and Object.keys
// for (let key in obj2) {
// this will have the access of inherit keys also
// console.log(key); // object is inherting object.prototype, why it is not printing keys of prototype object example->
// toString
// :
// ƒ toString()
// }

// TO UNDERSTAND THIS WE HAVE THREE THINGS IN MAKING KEYS:VALUE
// WRITABLE
// ENUMERABLE
// CONFIGURABLE

// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// output
// {
//   value: 'Rahul',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// By default writable true hota hai
// configurable true hota hai we can change the writable, enumerable

let obj = {};
Object.defineProperty(obj, "name", {
  value: "Rohit",
  writable: false,
  enumerable: true,
  configurable: true,
});

obj.name = "Hualip"; // this is not possible because writable is false
console.log(obj);

const obj1 = {
  name: "Rahul",
  age: 24,
  AccountNum: 478833,
  balance: 2000000,
};

Object.defineProperty(obj1, "AccountNum", {
  writable: false,
});

obj1.AccountNum = 3839393;
console.log(obj1);

// *When you set configurable to false, it means:

//! You cannot change the attributes of the property (except for value and writable if they are set to false).
// *You cannot delete the property from the object.
// *You cannot change the configurable attribute back to true.

for (let key in obj1) {
  console.log(key);
}
console.log("after setting value of enumerable as false");
console.log("===============");

Object.defineProperty(obj1, "name", {
  enumerable: false,
});

// jis jis key ka enumerable true hota unka hi key console.log mai aata for in loop se iterate karne par,
// key inherit bhi ho skati hai
// defineProperty
for (let key in obj1) {
  console.log(key);
}

let customer = {
  name: "Joyash",
  age: 23,
  AccountNum: 123,
  balance: 29383,
};
console.log();

let customer2 = Object.create(customer);
customer2.city = "kanpur";
for (let key in customer2) {
  console.log(key);
}

// why object.prototype all keys are not console in for in loop it is because false is assigned to enumerable

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

Object.defineProperty(Object.prototype, "toString", {
  enumerable: true,
});

for (let key in customer2) {
  console.log(key);
}
console.log("===============");
// for in loop : it is not use with array
// !REASON
/*
*0:10,1:20,2:40,3:12,4:30,name:"harsh"

par array mai to 0,1,2,3..... yeah sab index hoti hai 
for in loop saari key par iterate hota hai
aakhir array bhi object hi hota hai
isliy we dont use for in loop
*/
const arr = [10, 20, 40, 12, 30];
arr.name = "harsh";
for (let key in arr) {
  console.log(key, arr[key]);
}
console.log("===============");
// simple loop is used for iteration in array, this will not have eyes on name(Array index can be 0 1 2 3 4 5 .... so on)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("===============");

const object1 = {};
object1.property1 = 42;
console.log(object1.hasOwnProperty("property1"));
// Expected output: true
console.log(object1.hasOwnProperty("toString"));
// Expected output: false
console.log(object1.hasOwnProperty("hasOwnProperty"));
// Expected output: false

console.log("===============");

const object12 = {};

Object.defineProperties(object12, {
  property1: {
    value: 42,
    writable: true,
    enumerable:true
  },
  property2: {
    value: 78,
    writable: true,
  },
});

console.log(object12);
// output is {} empty object i have defined the properties
// Reason behind this
// these properties are not enumerable by default unless you specify the enumerable attribute.


console.log(object12.property1,object12.property2);

// Expected output: 42 78
