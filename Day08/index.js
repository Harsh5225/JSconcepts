const arr=[2,35,1,8,9,"harsh",true]
console.log(arr[1]);
console.log(arr.at(1));
console.log(arr.at(-1));
// at is latest , it allows negative indexing as well.
console.log(arr.length);

const newarr=arr;
console.log(newarr==arr);

// structure clone helps to clone the array in heap(reference)
const arr2=structuredClone(arr);
console.log(arr2==arr);

// push
arr.push(30);
arr.push(350);
console.log(arr);

// pop
arr.pop();
console.log(arr);

// unshift  it is used to add element at the beginning of the array
arr.unshift(10);
console.log(arr);

// shift delete element from start
arr.shift();
console.log(arr);
 // deletes the item but it holds the position of deleted item as empty item
delete arr[0];
console.log(arr);
arr.push(8)
console.log(arr);

console.log(arr.indexOf(8));
console.log(arr.lastIndexOf(8));
console.log(arr.includes(1));
console.log(arr.includes(10));


// slice and splice
console.log(arr.slice(2,4)); // returns new array 
// splice
console.log(arr.splice(2,5)); // 2nd index se 5 elements 
let a=arr.slice(2,5)

console.log(a);
console.log(arr);

// yeah change kar deta original array extract kar leta hai, uss portion ko hatha deta hai
let b=arr.splice(1,5)

console.log(b);
console.log(arr);

// slice
let newArray=[1,2,3,4,5,6,7]
// let c=newArray.slice(2,3);
// console.log(c);
// console.log(newArray);


// starting index, total element to delete, add element
let d=newArray.splice(3,3,"newElement",90);
console.log(d);
console.log(newArray);

newArray.splice(5,8);
 
console.log(d);

// tostring
let arrS=[1,2,3,"djss"]
console.log(arrS.toString()); 
// join
console.log(arrS.join("-")); // , ke jagah - aayega

// concat
let arr1=[1,2,3,4]
let arr3=[5,6,7,8]
let concatArr=arr1.concat(arr3);
console.log(concatArr);

// "C" in slice = Copy (non-destructive).
// "P" in splice = Pluck (destructive).  To avoid confusion

  
// 2d array
let array2d=[[1,2,3],[12,3,4]];
// flat is used to convert 2d array to 1d array
let new2d=array2d.flat();
// inside flat we can pass depth, default is 1
// if you want to get 1d array always irrespective of dimension fill the infinity value in flat
let new2d1=array2d.flat(Infinity);
console.log(array2d);
console.log(new2d);

let abc=[2,1,3,4]
console.log(Array.isArray(abc));
let ac=new Array(5);
console.log(ac); // [ <5 empty items> ] size of array is 5 if only one input is there in new array
// in javascript element in array is not stored sequentially just like other language(C++)
// it is stored in heap memory
// in heap memory memory is allocated dynamically
// js array is collection of different type of element , it can be string, number,object, so memory size can be increased, so it is difficult to allocate a continuous size,we can not confirm if the array is storing only same datatype
// so in js array is not stored sequentially in memory



