const form = document.querySelector("form");

// form.addEventListener('input',(e)=>{
//   console.log(e.target.value);

// })
// form.addEventListener('focusin',(e)=>{
//   console.log(e.target.value);

// })
// form.addEventListener('focusout',(e)=>{
//   console.log(e.target.value);

// })
// form.addEventListener("click", (e) => {
//   console.log(e.target.value);
// });
// form.addEventListener("dblclick", (e) => {
//   console.log(e.target.value);
// });
// form.addEventListener("submit", (e) => {
//   // console.log(e.target.value);
//   console.log('submitted');

// });
form.addEventListener("reset", (e) => {
  console.log("reset");
});
// reset will not refresh the page

// input
//change
// focus  -> it does not bubble
// focusin-> bubble hota focus karne par
// focusout
// click


// form data object
form.addEventListener("submit", (e) => {
  // form refresh hone se rokege
  e.preventDefault();
  // const first = document.getElementById("first");
  // const second = document.getElementById("second");
  // const third = document.getElementById("third");
  // console.log(first.value, second.value, third.value);

  const data=new FormData(form);  // api // object
  // iterator deta hai
  // ussse iterate kar skate hai
  console.log(data);
  
// keys-pair
for(let [key,val] of data.entries())
  console.log(key,val);
  

  const result=document.getElementById('result');
  result.innerText=`${first.value} is good boy, `
});
