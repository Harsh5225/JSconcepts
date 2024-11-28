// Array
let num1 = 231;
let num2 = new Number(231);
let num3 = new Number(231);
// jab same datatype nahi hota hai to wo common ground ko khojta, hamesha number both convert hota isliye num1==num2 true;
console.log(num1 == num2); // true
console.log(num2 == num3); // false

let num = 231.68;
console.log(num.toFixed(1));
console.log(num.toPrecision(4));
console.log(num.toPrecision(3));
console.log(num.toString(3));

// math props
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.min(5, 7, 9, 1, 3));
console.log(Math.max(5, 7, 9, 1, 3));
// random number
console.log(Math.random());
// 0<=value<=10
console.log(Math.floor(Math.random() * 10));
// 11-20
console.log(Math.floor(Math.random() * 10)+11);

// min and max
// Math.floor(Math.random() * (max - min) ) + min;
console.log(Math.floor(Math.random()*(20-10))+10);
// min and max (both included)
console.log(Math.floor(Math.random()*(20-10+1))+10);
// random number between 30 and 40
console.log(Math.floor(Math.random()*(40-30+1)+30));


