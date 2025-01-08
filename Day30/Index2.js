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

async function greet() {
  console.log("Hello I greet you");
  // from here execution back to main thread as it is taking time to resolve promise
  // const data = await promise1();
  // console.log(data);
  // const data2 = await promise2();
  // console.log(data2);

  //* promise1 and promise 2 is independent of each other and we want to execute them parallely
  //* we can use promise.all
  //* promise.all takes array of promises and return array of resolved values
  const [data1, data2] = await Promise.all([promise1(), promise2()]);
  console.log(data1, data2);
}

greet();
// main thread
console.log("Hello coder I am after greet function");
console.log("Kaise ho");
//* Output:
// Hello I greet you
// Hello coder I am after greet function
// Kaise ho
// Promise 1 resolved
// Promise 2 resolved

//* main thread never waits for async function to complete
//* it continues its execution

// use of try and catch in async function
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
