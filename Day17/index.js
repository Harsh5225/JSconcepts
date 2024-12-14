// console.log(x);
// console.log(y);
// console.log(z);

// let x = 10;
// let y = 20;

// *hoisting-> variable declaration and function declaration moves to top
// * Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
// var x = undefined;
// let y;
// console.log(x);
// console.log(y);df
// x=10
// y=20

let z;
var x = undefined;
let y;
console.log(x);
x = 10;
y = 20;
console.log(x);

greet();

function greet() {
  console.log("Hello World");
}
// why greet is running before greet function
// step-1 MEMORY ALLOCATION
// greet: function code

// step-2 code execution

// console.log(meet);

let meet = function () {
  console.log("Hello world");
};

// step-1 MEMORY ALLOCATION
// greet:
// step-2 code execution
// log(meet) meet ke andar to kuch rakha hi nahi,greet is not initialised
//( Not a error: meet is called after the fucntion defination->) meet:function

meeet() // meeet is not a function
var meeet = function () {
  console.log("Hello world");
};
// step-1 MEMORY ALLOCATION
// meeet: undefined(Var)
// step-2 code execution undefined is not a function

