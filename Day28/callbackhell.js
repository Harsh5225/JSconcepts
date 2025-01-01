// callback hell is when you have multiple callbacks inside each other.

// looks like
// callback=()=>{
//   preparingOrder()
// }

function placingOrder(callback) {
  console.log("Talking with Domino's");
  setTimeout(() => {
    console.log("Order Placed");
    callback();
  }, 2000);
  
}
// placingOrder()

function preparingOrder(callback) {
  console.log("Preparing Order");
  setTimeout(() => {
    console.log("Order Prepared");
     callback();
  }, 2000);
}
// preparingOrder()


function pickupOrder(callback) {
  console.log("Order is ready for pickup");  
  setTimeout(() => {
    console.log("Order picked up");
    callback();
  }, 3000);
};

// pickupOrder()


function deliverOrder() { 
  console.log("Order is out for delivery");
  setTimeout(() => {
    console.log("Order delivered successfully");
  }, 4000);
}
// deliverOrder()

// placingOrder(preparingOrder);


placingOrder(()=>{
  preparingOrder(()=>{
    pickupOrder(()=>{
      deliverOrder();
    });
  });
});


// callback hell
// callback hell is when you have multiple callbacks inside each other.

