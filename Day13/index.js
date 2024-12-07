// Conditional statement
let age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible to vote");
}

// nested else if
let time = 40;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// switch
let date = new Date().getDay();
switch (
  date // date there will be strict comparison ===
) {
  case 0:
    console.log("SUNDAY");
    break;
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  default:
    console.log("Invalid day");
}

// scope
// Global scope
// local scope(functional scope)
// block scope
function lscope() {
  let x = 10;
  console.log(x);
  console.log(y);
}
// console.log(x);  // ReferenceError: x is not defined

if(true){
  let a=5;
  const b=3;
  var c=90;
}
console.log(c);  // ouput 90   var golbal scope

// console.log(a,b); // a is not defined and b is not defined


let amount=300;
if(true){
  let amount=500;
  console.log(amount); // pehle apne local mai search karenga
}
console.log(amount); // global mai amount ko search karenga

// hoisting

meet(); 
function meet(){
  console.log("Hello");
  
}

// loop
let arr=[1,2,4,4,5]
for (let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

let i=1;
let sum=0
while(i<=10){
  sum+=i;
  i++;
}
console.log(sum);

let b=1;
let text="";
do {
  text += "The number is " + b;
  b++;
}
while (b < 10);
console.log(text);


let obj={
  name:"Rahul",
  age:25,
  city:"Delhi",
  "hobbies": ["cricket","football"],
}
let values=Object.values(obj);
for(let i=0;i<values.length;i++){
  console.log(values[i]);
}
let keys=Object.keys(obj);
for(let i=0;i<values.length;i++){
  console.log(obj[keys[i]]);
}