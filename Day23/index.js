// 1-method
// const red=document.getElementById('red')
// const orange=document.getElementById('orange')
// const blue=document.getElementById('blue')
// const purple=document.getElementById('purple')
// const green=document.getElementById('green')
// const body=document.body;
// red.addEventListener('click',(e)=>{
//  console.log(e)
//   body.style.backgroundColor='red'
// })
// orange.addEventListener('click',()=>{

//   body.style.backgroundColor='orange'
// })
// blue.addEventListener('click',()=>{

//   body.style.backgroundColor='blue'
// })
// green.addEventListener('click',()=>{

//   body.style.backgroundColor='green'
// })
// purple.addEventListener('click',()=>{

//   body.style.backgroundColor='purple'
// })

// 2nd method
const buttons = document.querySelectorAll("button");
const body = document.body;
console.log(buttons);

// buttons.forEach((button)=>{
//   button.addEventListener('click',(e)=>{
//     console.log(button.id);

//     body.style.backgroundColor=e.target.id
//   })
// });  // here if 100 buttons are here, then 100 event listener is used
// large number of event listeners are there then it will consume memory , process slowed down

//* In event bubbling, the event starts from the deepest (innermost) element (the child that triggered the event) and propagates outward towards the root of the DOM hierarchy.

// optimization  event bubbling
// parent ke upar event listener laga diya
const root = document.getElementById("root");
root.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName == "BUTTON") body.style.backgroundColor = e.target.id;

  // console.log(e.currentTarget)
});
