const grandfather = document.getElementById("grandfather");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// event bubbling
// event capturing

// by default bubbling hi chalta hai
// agar capture wala chalana hai
// event listener ke andar three parameter hoti, first event ,callback, true/false(false-bydefault---> event bubbling, true->event capturing)
// bubbe andar se bahar ki aur

 child.addEventListener("click", (e) => {
   console.log("child clicked");
   console.log(e.target);
   e.stopPropagation(); // resources ko less consume ho according to demand of particular situtaions works's because  memory is consumed in  event bubbling
    });
    parent.addEventListener("click", (e) => {
     
      console.log("parent clicked");
      console.log(e.target);
 });
 grandfather.addEventListener("click", (e) => {
   console.log("grandfather clicked");
   console.log(e.target);
  //  console.log(e.currentTarget); 
   
 });
 // * e.target  footprint rakh rha hai uss element ka jaha se bubble up matlab event chalu hua hai
 

// how to know which event chala first

// event capture
// child.addEventListener(
//   "click",
//   (e) => {
//     console.log(e.target);
//     // console.log("child clicked");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log(e.target);

//     // console.log("parent clicked");
//   },
//   false
// );
// grandfather.addEventListener(
//   "click",
//   (e) => {
//     console.log(e)
//     // console.log("grandfather clicked");
//   },
//   true
// );




// benefit 
// !EVENT DELEGATION 