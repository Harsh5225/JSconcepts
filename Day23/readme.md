# Event Handling and DOM Manipulation

This project demonstrates two approaches for handling button click events to change the background color of the webpage using JavaScript. It also explains optimization through the concept of **event bubbling** to reduce memory usage and improve performance.

## **Key Concepts Covered:**

### **1. Direct Event Listeners on Individual Buttons**
In this approach, individual event listeners are added to each button element. When a button is clicked, the background color of the webpage changes based on the button's ID.

#### **Code Snippet:**
```javascript
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
const green = document.getElementById('green');
const body = document.body;

red.addEventListener('click', (e) => {
  console.log(e);
  body.style.backgroundColor = 'red';
});
orange.addEventListener('click', () => {
  body.style.backgroundColor = 'orange';
});
blue.addEventListener('click', () => {
  body.style.backgroundColor = 'blue';
});
green.addEventListener('click', () => {
  body.style.backgroundColor = 'green';
});
purple.addEventListener('click', () => {
  body.style.backgroundColor = 'purple';
});
```

#### **Limitations:**
- For each button, a separate event listener is created.
- If the number of buttons increases (e.g., 100 buttons), it would require 100 event listeners, consuming more memory and potentially slowing down performance.

---

### **2. Using a Loop to Add Event Listeners**
In this method, a `NodeList` of all button elements is obtained using `querySelectorAll()`, and a single event listener is added to each button using a loop.

#### **Code Snippet:**
```javascript
const buttons = document.querySelectorAll("button");
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(button.id);
    body.style.backgroundColor = e.target.id;
  });
});
```

#### **Advantages:**
- Reduces repetitive code by iterating over the list of buttons.

#### **Drawback:**
- Although better than the first method, this approach still creates an individual event listener for every button, which can impact performance if there are a large number of buttons.

---

### **3. Optimized Approach: Using Event Bubbling**
This approach leverages **event delegation** and **event bubbling**, where a single event listener is added to a parent element (the `root` element in this case). When any button is clicked, the event bubbles up to the parent element, which then processes it.

#### **Code Snippet:**
```javascript
const root = document.getElementById("root");
const body = document.body;

root.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName == "BUTTON") {
    body.style.backgroundColor = e.target.id;
  }
});
```

#### **Advantages:**
- Only one event listener is added, regardless of the number of buttons.
- Improves memory usage and performance.

#### **Key Concepts:**
- **Event Bubbling:** The event starts from the target element (e.g., the clicked button) and propagates up to the parent elements in the DOM hierarchy.
- **Event Delegation:** By using a single event listener on the parent element, it handles events for child elements dynamically.

---

## **Steps to Run the Code:**
1. Add button elements with unique IDs (corresponding to colors) inside a parent container with the ID `root`.
2. Use any of the three approaches described above to handle button click events.
3. Observe the change in the background color of the webpage when a button is clicked.

---

## **Best Practices:**
- Use event delegation and bubbling for better performance and scalability, especially when dealing with a large number of elements.
- Ensure proper handling of events by verifying the `event.target` element before applying any changes.
- Leverage the DOM structure efficiently to minimize the number of event listeners.

---

This project is a practical example of event handling in JavaScript, demonstrating performance optimization through the use of event bubbling and delegation.

