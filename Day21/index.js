// <li>TS</li>

function attach(content) {
  const ele = document.createElement("li");
  ele.innerHTML = content;

  const parent = document.getElementById("root");
  parent.appendChild(ele); // single element
  // multiple element
  // parent.append(ele,"hello coders..")
  parent.append(document.createTextNode("Helllll💡🚀🚀🚀🚀🚀"));
}

attach("TS");
attach("React");
attach("NodeJs");
attach("MongoDb");
attach("NodeJs");

// CREATE ATTRIBUTE

const attribute = document.createAttribute("id");
attribute.value = "first";
let element = document.querySelector("li");
// access to first list
element.setAttributeNode(attribute);

// !When using setAttributeNode(), ensure you're using a fresh attribute object for each element if you want to apply it to multiple elements.

const parent = document.getElementById("root");
const newAttribute = document.createAttribute("id");
newAttribute.value = "second";
parent.children[1].setAttributeNode(newAttribute);

/// get attribute
console.log(parent.getAttribute("id"));
console.log(parent.getAttribute("class"));
console.log(parent.getAttribute("style"));
// set attribute
parent.setAttribute("custom", "20");
parent.setAttribute("class", "Rohan");
// remove attribute
parent.removeAttribute("custom");

// Addd nodes to the dom

// const newElem = document.createElement("li");
// newElem.innerHTML = "EC2";
// parent.prepend(newElem); // top
// //last
// parent.append(newElem);

// const child2=document.getElementById('second');
// const child2 = parent.children[1];
// parent.insertBefore(newElem, child2); // (Node,referenceNode)

// parent.replaceChild(parent.children[1],child2)
parent.innerHTML+="<li>TSS</li>";

const unordered_list=document.getElementById('root');
const element3=document.createElement("div");
element3.innerHTML="CODER X HELLO"
// unordered_list.insertAdjacentElement("beforebegin",element3);
// unordered_list.insertAdjacentElement("afterbegin",element3);
// unordered_list.insertAdjacentElement("afterend",element3);
unordered_list.insertAdjacentElement("afterbegin",element3);

// afterbegin treated as first child of ul

// removechild node
document.querySelector('li').remove();
const list=document.getElementById('root')

if (list.children[1]) {
  list.removeChild(list.children[1]);
} else {
  console.log('Second child does not exist');
}


