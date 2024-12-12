const user = {
  name: "tyiryana",
  age: 30,
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "roxci";
console.log(user.name);

console.log("For of loop");
console.log("=============");

// for of loop
const arr = [10, 20, 20, 89];
for (let value of arr) {
  console.log(value);
}

let str = "yoToYoooooo";
for (let value of str) {
  console.log(value);
}

// !DON'T USE FOR OF loop on object
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
// for(let val of obj){
//   console.log(val);

// }
// *TypeError: obj is not iterable
// iterator is not defined for the object

for (let value of Object.keys(obj)) {
  console.log(value);
}

// for each loop
let arr2 = [10, 20, 30, 40, 50];
// val, index,array argument in callback function
// index,array is optional
arr2.forEach((val, index,v) => {
  console.log(`Value is ${val} and Index is ${index}`);
  v[index]=v[index]+2;
});

console.log(arr2);


function fetchdata(){
  console.log("I am fecthing data");
}

// glimpse of using callbacks
// setInterval(fetchdata,5000)


let arr3=[1,2,3,4,5,6,7,8]
// filter return the array of elements which are true to conditions 
let evenarray=arr3.filter((val)=>val%2==0)
console.log(evenarray);



const student=[
  {name:"Rohan",age:22,marks:70},
  {name:"Darshan",age:22,marks:40},
  {name:"Naindeep",age:21,marks:30},
  {name:"rahul",age:22,marks:95},
]
const result=student.filter((obj)=>obj.marks>=50)
// i can destructure if object is comming
const result2=student.filter(({marks})=>marks>=50)

console.log(result,result2);

// using map i can modify the array 
// value index arr
let simplearr=[10,20,30,40,50];
const arr7=simplearr.map((val)=>val+2);
console.log(arr7);
simplearr={...arr7}
console.log(simplearr);

arr3=[1,2,3,4,5,6,7,8]
console.log(arr3.filter((val)=>val%2==0).map((num)=>num*num)); // this is most used 



// reduce
let arr9=[1,2,3,4,5,6]
let val=arr9.reduce((val,sum)=> sum+val);
console.log(val);
