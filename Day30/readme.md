# Async and Promises in JavaScript

This document demonstrates how to use `async`, `await`, and `Promise` in JavaScript for asynchronous operations. Below are examples illustrating the behavior of asynchronous functions, handling multiple promises, and chaining promises.

## Basic Promise Usage

### Creating Promises
```javascript
async function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 5000);
  });
}

async function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 5000);
  });
}
```

### Executing Promises Sequentially
```javascript
async function promiseAll2() {
  const data = await promise1();
  console.log(data);
  const data2 = await promise2();
  console.log(data2);
}

promiseAll2();
```

## Using `Promise.all` for Parallel Execution
`Promise.all` allows the parallel execution of independent promises and returns an array of their results.

```javascript
async function greet() {
  console.log("Hello I greet you");
  const [data1, data2] = await Promise.all([promise1(), promise2()]);
  console.log(data1, data2);
}

greet();
```

## Handling Errors with `try` and `catch`
Use `try` and `catch` blocks to handle errors in asynchronous functions.

```javascript
const play = false;
async function playMusic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (play) {
        resolve("Music is playing");
      } else {
        reject("Error: Music is not playing");
      }
    }, 2000);
  });
}

async function playMusic2() {
  try {
    const data = await playMusic();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

playMusic2();
```

## Simulating an Order Flow
This example demonstrates a real-world scenario using promises for placing, preparing, picking up, and delivering an order.

```javascript
const cart = ["pizza", "coke", "fries", "burger"];

function placingOrder(cart) {
  console.log("Talking with Domino's");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Placed");
      const food_available = true;
      if (food_available) {
        const Order = { orderFood: "Pizza", id: 12, location: "new ghar" };
        resolve(Order);
      } else {
        reject("Food not available");
      }
    }, 2000);
  });
}

function preparingOrder(order) {
  console.log("Preparing Order");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Prepared");
      const prepOrder = { food: order.orderFood, location: order.location };
      resolve(prepOrder);
    }, 3000);
  });
}

function pickupOrder(prepOrder) {
  console.log("Order is ready for pickup");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order picked up");
      resolve(prepOrder);
    }, 4000);
  });
}

function deliverOrder(pOrder) {
  console.log("Order is out for delivery");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order delivered successfully");
      resolve();
    }, 2000);
  });
}

async function orderFood() {
  const order = await placingOrder(cart);
  const foodDetails = await preparingOrder(order);
  const orderReady = await pickupOrder(foodDetails);
  deliverOrder(orderReady);
}

orderFood();
```

## Key Points
- **Async functions**: Always return a promise. 
- **Await**: Pauses execution of the async function, waiting for the promise to resolve.
- **Error Handling**: Use `try` and `catch` blocks for handling errors in async functions.
- **Promise.all**: Executes multiple promises in parallel and waits for all of them to resolve.

## Additional Notes
- Async functions allow writing asynchronous code that looks and behaves like synchronous code.
- Using `Promise.all` is efficient when you have independent asynchronous operations that can run concurrently.

This README provides a comprehensive guide on handling asynchronous operations using JavaScript promises and async/await syntax.
