// stack and heap memory

let a=10;
let b=a;
b=40
console.log(b);
console.log(a);
// primitive datatype is stored in stack memory
// call by value

let obj1={
  name:"John",
  age:30
}
let obj2=obj1
obj2.age=40
console.log(obj1);
console.log(obj2);
// Non-primitive datatype is stored in Heap memory
// call by reference