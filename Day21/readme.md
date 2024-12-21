## Project README: DOM Manipulation and Random Quote Generator

### Overview

This project demonstrates the use of various DOM manipulation techniques in JavaScript to interact with HTML elements, including creating and modifying elements, setting and removing attributes, inserting and removing nodes, and creating dynamic content such as a random quote generator with a changing background color. The project showcases how to manipulate the DOM to create a more interactive and dynamic web experience.

### Features

#### 1. **DOM Manipulation with `createElement` and `appendChild`**
   - Dynamically create `<li>` elements and append them to a parent element (`ul` with `id="root"`).
   - Example items added: "TS", "React", "NodeJs", "MongoDb".
   - Each item is appended as a list item inside an unordered list.

#### 2. **Working with Attributes**
   - Create attributes dynamically with `document.createAttribute`.
   - Set, get, and remove attributes using `setAttribute`, `getAttribute`, and `removeAttribute`.
   - Example: Setting and removing custom attributes (`id`, `class`).

#### 3. **Inserting and Replacing Nodes**
   - Insert new nodes before or after existing nodes using methods like `insertAdjacentElement` and `insertBefore`.
   - Example: Insert a new `<div>` element with text "CODER X HELLO" at the beginning of the unordered list (`<ul>`).
   - Replace existing nodes with `replaceChild`.

#### 4. **Removing Nodes**
   - Remove nodes from the DOM using `removeChild` and `remove`.
   - Example: Remove the first `<li>` element and second child of the parent list.

#### 5. **Random Quote Generator**
   - Display a random quote on the page every 5 seconds.
   - Quotes are pre-defined in an array, and one is randomly selected and displayed in a `quote` element on the page.
   - Example quotes include:
     - "The only way to do great work is to love what you do."
     - "In the middle of every difficulty lies opportunity."
     - "Success is not final, failure is not fatal: It is the courage to continue that counts."

#### 6. **Random Background Color Change**
   - Change the background color of the page every 5 seconds with a random RGB value.
   - This gives the page a dynamic and colorful look every time the quote updates.

### Code Explanation

```javascript
// Attaching dynamic content to the DOM
function attach(content) {
  const ele = document.createElement("li");
  ele.innerHTML = content;
  const parent = document.getElementById("root");
  parent.appendChild(ele); // Append a single element to the parent
}

// Calling the attach function for multiple list items
attach("TS");
attach("React");
attach("NodeJs");
attach("MongoDb");

// Creating, setting, and removing attributes on list items
const attribute = document.createAttribute("id");
attribute.value = "first";
let element = document.querySelector("li");
element.setAttributeNode(attribute);

// Adding new attributes to the second list item
const newAttribute = document.createAttribute("id");
newAttribute.value = "second";
parent.children[1].setAttributeNode(newAttribute);

// Setting and removing attributes on the parent element
parent.setAttribute("custom", "20");
parent.setAttribute("class", "Rohan");
parent.removeAttribute("custom");

// Inserting new elements before, after, or inside a parent
const element3 = document.createElement("div");
element3.innerHTML = "CODER X HELLO";
unordered_list.insertAdjacentElement("afterbegin", element3);

// Removing nodes
document.querySelector('li').remove(); // Remove the first list item
const list = document.getElementById('root');
if (list.children[1]) {
  list.removeChild(list.children[1]);
} else {
  console.log('Second child does not exist');
}
```

#### Random Quote Generator Implementation

```javascript
const text = document.getElementById("quote");

const quotes = [
  "The only way to do great work is to love what you do.",
  "In the middle of every difficulty lies opportunity.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The best way to predict the future is to create it.",
  "Life is what happens when you're busy making other plans.",
  "You miss 100% of the shots you don't take.",
  "Don't wait. The time will never be just right.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The journey of a thousand miles begins with one step.",
  "Success is liking yourself, liking what you do, and liking how you do it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Everything you can imagine is real.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
];

setInterval(() => {
  text.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}, 5000);
```

#### Random Background Color Change

```javascript
const body = document.querySelector("body");
setInterval(() => {
  const r = Math.floor(Math.random() * 256); // Random value for Red (0-255)
  const g = Math.floor(Math.random() * 256); // Random value for Green (0-255)
  const b = Math.floor(Math.random() * 256); // Random value for Blue (0-255)
 
  body.style.background = `rgb(${r}, ${g}, ${b})`;

}, 5000);
```



---

By understanding this example, you will be able to manipulate the DOM, dynamically interact with HTML elements, and create engaging web experiences.