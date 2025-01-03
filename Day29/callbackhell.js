// callback hell is when you have multiple callbacks inside each other.

// looks like
// callback=()=>{
//   preparingOrder()
// }

const cart = ["pizza`", "coke", "fries", "burger"];


function placingOrder(cart) {
  console.log("Talking with Domino's");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Placed");
      const food_available = true
      if (food_available) {
      const Order = {
        orderFood: "Pizza",
        id: 12,
        location: "new ghar",
      };
      resolve(Order);
    }else{
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
      const prepOrder={
        food:order.orderFood,
        location:order.location
      }
      resolve(prepOrder);
    }, 3000);
  }
  );
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
};

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
// deliverOrder()

// placingOrder(preparingOrder);

// placingOrder(cart,(order)=>{
//   preparingOrder(order,(prepOrder)=>{
//     pickupOrder(prepOrder,(pOrder)=>{
//       deliverOrder(pOrder);
//     });
//   });
// });

// callback hell
// callback hell is when you have multiple callbacks inside each other.

// this can be solved using promises and async await

placingOrder(cart)
.then((order)=>{
  return preparingOrder(order);
})
.then((prepOrder)=>{
  return pickupOrder(prepOrder);
})
.then((pOrder)=>{
  return deliverOrder(pOrder);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log("Order is completed");
});