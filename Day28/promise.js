// javascript is a single threaded language, which means it can do one thing at a time.
// Js behaviour asynchronusly, which means it can do multiple things at a time.

console.log(20);
// Asynchronus code
// *setTimeout is not part of javascript, it is a part of web api.
// setTimeout is a function that is used to delay the execution of a function.
// setTimeout(()=>{},time in milliseconds)
// js engine is not calculating the time, it is the browser that is calculating the time.
// *web api handles the setTimeout function.
// output is coming  20,40,30;
setTimeout(() => {
  console.log(30);
}, 2000);
console.log(40);

// Syncronus code
// console.log(20);
// const timer=Date.now();
// while(Date.now()-timer<2000){
//   console.log("waiting");
// }

// console.log(40);



// Promise is a built-in object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
