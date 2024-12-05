// shallow copy
let obj = {
  a: 1,
  b: 2,
};

let obj2 = obj; // shallow copy
obj2.b = 3;
console.log(obj2);
console.log(obj);

// deep copy -> structureClone
console.log("Deep Copy");

let obj3 = structuredClone(obj2);
obj3.b = 10;
console.log(obj3);
console.log(obj2);

// Nested onjects
let obj4 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};

console.log(obj4);
console.log(typeof obj4.b); // object
console.log(typeof obj4.b.c); // number

// what is the problem with assign ?
let useObj = Object.assign({}, obj4);
useObj.b.c = 10;
console.log(obj4.b.c); // here object which is inside obj4 , his value is changed on changing with useObj
useObj.a = 50; // here change does not reflect in original obj
// this is problem associted with assign when we are handling the nested objects
// b==shallow copy
console.log(obj4.a);
// this also applies for s

// for deepCopy always use structureClone

// object.freeze
// object.seal

const objnaya = {
  prop: 42,
};

Object.freeze(objnaya);

objnaya.prop = 33;
// Throws an error in strict mode

console.log(objnaya.prop);
// Expected output: 42

// seal
// *A sealed object has a fixed set of properties: no new properties can be added, existing ones can't be removed, and their configurability or enumerability can't be changed. However, writable properties can still have their values modified. The `seal()` method returns the same object.
const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33

// Destructuring
// Destructuring is a way to unpack values from arrays or objects into distinct variables.
// console.log("Destructuring");

// let objn = {
//   name: "Harsh",
//   age: 21,
//   address: {
//     city: "Pune",
//   },
//   hobbies: ["Cricket", "Football"],
// };
// const {
//   name: Fullname,
//   age,
//   address: { city },
//   hobbies: [hobby1, hobby2],
// } = objn;
// console.log(Fullname, age, city);

// const objy = {
//   name: "Harsh",
//   age: 21,
//   aadhar: "djjsksa",
//   mobileNum: 89273,
// };
// // rest operator(spread)
// const { name: nameAapka, age: Apkaage, ...obj9 } = objy;
// console.log(nameAapka);
// console.log(Apkaage);
// console.log(obj9);

// // array destructuring
// const arr = [12, 29, 203, 249];
// // const [first,second, ,third]=arr;
// const [first, second, ...third] = arr;
// console.log(first, second, third);

// // combination

// let obj12 = {
//   name: "Harsh",
//   age: 21,
//   array1: [20, 30, 40],
//   address: {
//     citys: "Pune",
//     pincode: 392782,
//   },
// };
// const { name } = obj12;
// console.log(name);

// const { address: add } = obj12;
// console.log(add); // destrucure the object inside the mainobj
// const { pincode, citys } = add; // now i destructure the address obj
// console.log(citys, pincode);

// // array in obj12
// const { array1: [y,...o] } = obj12;
// console.log(y,o);

let user = {
  name: "Harsh",
  age: 21,
  amount: 940,
  greet: function () {
    console.log("Hello aapsabka");
  },
  meet:()=>console.log(20),
  play:()=>{
    return "play";
  }
};

user.greet();
user.meet()
console.log(user.play())

// !IMP

// prototype 
console.log(user.toString()); // toString is a method of object prototype  (humne to nahi toString function user object) yeah sab kaha sai aa rha hai
// This is inbuilt function
// correct answer to say-->

