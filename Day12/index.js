function greet() {
  console.log("====================================");
  console.log("Function hu mai");
  console.log("====================================");
}

greet();
//parameter
function sum(a, b) {
  console.log(a + b);
}
sum(1, 8); // argument
sum(10, 15);

function mul(a, b) {
  return a * b;
}
let res = mul(8, 9);
console.log(res);

const fun = function () {
  console.log("Hello");
};
fun();

let sum1 = (num1, num2) => {
  return num1 + num2;
};
console.log(sum1(10, 20));

// arrow function
let arrowFun = (a, b) => a * b; // self return
console.log(arrowFun(13, 10));

hello = (val) => "Hello " + val;
console.log(hello("t"));

const sum4 = (...number) => {
  console.log(number);
};
sum4(1,3,4,5,6)
sum4(6);
sum4(393,39,2,3,4,5,5,6,6)
// ...number
sum4(1, 3, 4, 5, 6);
// The arguments passed are 1, 3, 4, 5, 6.
// The rest parameter ...number collects them into an array.
// So number becomes [1, 3, 4, 5, 6].

let user={
  name:"Krishna",
  Game:"Valorant",
  age:20
}

// dstructuring + obj passed om function arguments
let funct=({name:fname,age:fage})=>{
console.log(fname,fage)
  
}

funct(user)


let fun5=()=>{
  console.log("Funxtion app kya ho")
};
let fun6=fun5;
fun5();
fun6();

fun5=()=>{
console.log("Function mai change ho gaya");
}

fun5();
fun6();

// *Functions are thought of as "first class" objects,
// a function can be assigned to a variable, passed as an argument to other functions, and returned by other functions.



// In JavaScript, the `arguments` object is an array-like object that holds all the values passed to a function, regardless of the function's declared parameters. It allows you to access each argument by its index. In the provided example:

function myFunction() {
  console.log(arguments);
};

myFunction(3, true, "My string"); // output -> [Arguments] { '0': 3, '1': true, '2': 'My string' }

// *The `arguments` object inside `myFunction` will contain the values `[3, true, "My string"]`, and `console.log(arguments)` will print `{ 0: 3, 1: true, 2: "My string", length: 3 }`, showing the arguments passed along with the `length` property.