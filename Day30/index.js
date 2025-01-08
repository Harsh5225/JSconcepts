const cart = ["pizza`", "coke", "fries", "burger"];

function placingOrder(cart) {
  console.log("Talking with Domino's");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Placed");
      const food_available = true;
      if (food_available) {
        const Order = {
          orderFood: "Pizza",
          id: 12,
          location: "new ghar",
        };
        resolve(Order);
      } else {
        reject("Food not available");
      }
    }, 2000);
  });
}
// placingOrder()

function preparingOrder(order) {
  console.log("Preparing Order");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Prepared");
      const prepOrder = {
        food: order.orderFood,
        location: order.location,
      };
      resolve(prepOrder);
    }, 3000);
  });
}
// preparingOrder()

function pickupOrder(prepOrder) {
  console.log("Order is ready for pickup");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order picked up");
      resolve(prepOrder);
    }, 4000);
  });
}

// pickupOrder()

function deliverOrder(pOrder) {
  console.log("Order is out for delivery");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order delivered successfully");
      resolve();
    }, 2000);
  });
}

// placingOrder(cart)
// .then((order)=>{
//   return preparingOrder(order);
// })
// .then((prepOrder)=>{
//   return pickupOrder(prepOrder);
// })
// .then((pOrder)=>{
//   return deliverOrder(pOrder);
// })
// .catch((error)=>{
//   console.log(error);
// })
// .finally(()=>{
//   console.log("Order is completed");
// });

async function orderFood() {
  const order = await placingOrder(cart);
  const foodDetails = await preparingOrder(order);
  const orderReady = await pickupOrder(foodDetails);
  deliverOrder(orderReady);
}
// orderFood();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 8000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 5000);
});

// p1.then((data)=>console.log(data));

async function promiseAll() {
  const data = await p1;
  console.log(data);
  const data2 = await p2; // promise 2 and promise 1 parrallely executed
  console.log(data2);
}
// promiseAll();

// in above promiseAll answer-> promise 1 resolved and promise 2 resolved
// Promise 1 resolved
// Promise 2 resolved
// first p1 is executed then p2 is executed

// p1.then((data)=>console.log(data));
// p2.then((data)=>console.log(data));

// we get promise 2 resolved and  then promise 1 resolved
// Promise 2 resolved
// Promise 1 resolved

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

async function promiseAll2() {
  const data = await promise1();
  console.log(data);
  const data2 = await promise2();
  console.log(data2);
}
promiseAll2();
// here promise 1 take 5 seconds to resolve and promise 2 also take 5 seconds to resolve not simultaneously as they are awaited and wrapped in  function

//async always return promise
async function meet() {
  return "Hello coder";
}
async function meet1() {}

meet().then((data) => console.log(data)); // Hello coder
meet1().then((data) => console.log(data)); // undefined

// async makes function return promise
