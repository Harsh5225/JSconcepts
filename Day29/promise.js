//1 promise is stored in variable
const promiseOne=new Promise(function(resolve,reject){
// Do an async task
// db calls,cryptography, netwwwork request
  setTimeout(function(){
    console.log('Async task is done');
    resolve();
  },1000);
});
promiseOne.then(function(){
  console.log('Promise Consumed');
})

console.log("Without storing promise");

//2 without storing
new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('Async task is done');
    resolve();
  },1000);
}).then(function(){
  console.log('Promise Consumed');
})

//3
const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('Async task is done');
    resolve({username:"Chai",email:"to@gmail.com"});
  },2000);
})

promiseThree.then(function(user){
  console.log(user);
  console.log('Promise Consumed');
})

// 4.
const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
   let error=true;
   if(!error){
    resolve({username:"Chai",email:" kdk"
   });
  }else{
    reject('Error: Something Occured while fetching data');
  }
  },2000);

})

promiseFour
.then((user)=>{
console.log(user);
return user.username
})
.then((myusername)=>{
console.log(myusername);

})
.catch((error)=>{
  console.log(error);
})
.finally((()=>{
  console.log('THe promise is either resolved or rejected');
}))

//5. use async and await with try and catch
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Chai", email: " kdk" });
    } else {
      reject("Error: Something Occured while fetching data");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//6. fetch api
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data =await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();
getAllUsers().then((data) => {
  console.log(data);
});

//7. fetch api
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


  