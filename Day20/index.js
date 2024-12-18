// function timing() {
//   const timer = document.getElementById("root");

//   const now = new Date();

//   timer.innerHTML = now.toLocaleTimeString();
// }
// // while(true){  // nahi ho payega, crash ho jayega
// //   timing();
// // }

// setInterval(timing, 1000);
// document.body.style.margin = "0";
// document.body.style.boxSizing = "border-box";

// const timer = document.getElementById("root");
// timer.style.fontSize = "100px";
// timer.style.display = "flex";
// timer.style.justifyContent = "center";
// timer.style.alignItems = "center";
// timer.style.height = "100vh";

// const h1=document.querySelector('#first');
// const id2=document.querySelector('.header2');
// id2.innerHTML="🚀/////"

let obj = document.querySelectorAll(".header1");
let fun = function (obj) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].style.color === "red") {
      obj[i].style.color = "yellow";
    } else {
      obj[i].style.color = "red";
    }
  }
};

// setInterval(()=>fun(obj),1000);

//  How to iterate over Node list

// const obj = document.querySelectorAll('.header1')

//1:  obj.forEach((val)=>{
//     console.log(val)
//     })

// 2: for(let val of obj)
// console.log(val)

// 3: for(i=0;i<obj.length;i++)
//     obj[i].style.color = "red";

// CONVERT NODE LIST INTO ARRAY
//* const arr=Array.from(obj);

// const obj = document.getElementsByTagName('h1');

// let team = document.getElementsByTagName('li');

// How to iterate over it
// 1:for(let i=0;i<team.length;i++)
// team[i].style.color = "black";

// 2: for(let val of team)
// console.log(val)

// 3: Array.from(team).forEach((val)=>{
// console.log(val);
//  })



// const list = document.querySelector('li');
// console.log(list.parentElement);
// console.log(list.parentNode);


// const par = document.querySelector('ul');
// console.log(par);
// console.log(par.childNodes);
// console.log(par.children);
// console.log(par.firstChild); this may give text node or  element
// console.log(par.firstElementChild); this will give element
 
