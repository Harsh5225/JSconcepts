function fetchData(callback){
  console.log("Fetching Data");
  setTimeout(()=>{
    console.log("Data Fetched");
    const obj={
      name:"John",
      age:25,
      city:"New York"
    }
    // Data from backend
    callback(obj);
  },2000);
  
}
function greet(obj){
  console.log(`Hello ${obj.name}`);
}
fetchData(greet);

// function meet(name){
//   console.log(`Nice to meet you ${name}`);
// }
// fetchData(meet);

function printAge(obj){
  console.log(`Your age is ${obj.age}`);
}
fetchData(printAge);

