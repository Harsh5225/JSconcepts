// *DOM MANIPULATION
// document object model
// whole html is converted into object by dom and javascript knows how to interact with object
console.log("hello coder army")
document.getElementById('first').innerHTML="Main Badhiya huu"

// !Chrome 
// hello coder army
// const obj=document.getElementById('first')
// undefined
// obj
// <h1 id=​"first" class=​"header1">​Main Badhiya huu​</h1>​
// obj.parentElement
// <div id=​"root">​…​</div>​<h1 id=​"first" class=​"header1">​Main Badhiya huu​</h1>​<h2 id=​"second" class=​"header1">​Topics covered so far​</h2>​<ul id=​"third" class=​"header2" style=​"background-color:​ orange;​">​…​</ul>​</div>​
// obj.tagName
// 'H1'
// obj.className
// 'header1'
// obj.innerHTML
// 'Main Badhiya huu'
// obj.innerHTML="hello"
// 'hello'
// const obj2=document.getElementsByClassName('header1')
// undefined
// obj2
// HTMLCollection(2) [h1#first.header1, h2#second.header1, first: h1#first.header1, second: h2#second.header1]0: h1#first.header11: h2#second.header1first: h1#first.header1second: h2#second.header1length: 2[[Prototype]]: HTMLCollection
// obj2[0]
// <h1 id=​"first" class=​"header1">​hello​</h1>​
// obj2[1]
// <h2 id=​"second" class=​"header1">​Topics covered so far​</h2>​
// obj[0].id
// VM2133:1 Uncaught TypeError: Cannot read properties of undefined (reading 'id')
//     at <anonymous>:1:8
// (anonymous) @ VM2133:1Understand this errorAI
// obj2[0].id
// 'first'
// obj2[0].style
// CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}