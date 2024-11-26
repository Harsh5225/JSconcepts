let arr = [10, 20, 30];
console.log(typeof arr); // object

let obj = {
  myName: "learnjavascript",
  age: 21,
};
console.log(obj);

// type conversion
let accountBalance = "100";
let num = Number(accountBalance);
console.log(num); // 100
console.log(typeof num);

let acc = "100x5";
console.log(Number(acc)); // NaN not a number

let bal = "200s";
console.log(Number(bal));

let x = null;
console.log(Number(x)); // 0

let y;
console.log(Number(y)); // NaN

let ab = 20;
console.log(typeof String(ab));
console.log(String(ab));

let str = "";
console.log(Boolean(str));

console.log("Agar string mai kuch rakha hai to wo true denga");

str = " ";
// space ascii value 32 ,
console.log(Boolean(str));

// Operators
// Divide Multiply Left to Right
// Ass sub left to right
console.log(6 * 3 + 18 / 6 - 9); // 12


console.log(20%3);
// modulus operator

// increment and decrement
let sum=20;
sum--;
console.log(sum);
sum++;
console.log(sum);


