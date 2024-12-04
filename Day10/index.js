const obj = {
  0: 20,
  1: 50,
  name: "Harsh",
  age: 21,
  occupation: "Developer",
  "account number": "12839",
  undefined: 30,
  null: 50,
};
// backend mai string ke form me store hota hai
console.log(obj.name);
console.log(obj.age);
console.log(obj["name"]);
console.log(obj["account number"]); // usecase of []
console.log(obj["0"]);

console.log(obj);
console.log(obj[1]); // number key is automatically change into string
console.log(obj.undefined); // here undefined and null is used as key (in string format)
console.log(obj.null);


// 2nd method to create object
const person = new Object();
console.log(person);
person.name = "Apex";
person.age = 25;
person.occupation = "Developer";
console.log(person);
delete person.age;
console.log(person);
person.name = "Mayaa";
console.log(person);

console.log('====================================');
console.log('====================================');
console.log('====================================');
console.log("This is third method to create object ");
console.log('====================================');
class People{
  constructor(name,sports,gender){
 this.name=name,
 this.sports=sports,
 this.gender=gender
  }
}
// THIS IS REFFERING TO OBJECT (PER1)||(PER2)
let per1=new People("Rohit","cricket","male");

let per2=new People("Rahul","football","male");
console.log(per1);
console.log(per2);


// COMMON METHODS FOR OBJECTS
let obj1={
  name:"Apex",
  age:25,
  occupation:"Developer",
  hobbies:["cricket","football","tennis"],
  address:{
    street:"street1",
    city:"city1",
    "state":"state1",
    },
}

let keyarray=Object.keys(obj1);
console.log(keyarray);
let valuearray=Object.values(obj1);
console.log(valuearray);
// key-value
const keyvalue=Object.entries(obj1);
console.log(keyvalue);

// *assign

const obj2={a:1,b:2}
const obj3={c:3,d:4}
// const obj4=Object.assign(obj2,obj3);  // this operation will also change obj2 
// for avoiding any change in obj2 we give empty object
const obj5=Object.assign({},obj2,obj3);
console.log(obj5);
console.log(obj2);
const obj6={e:6,d:8};
const obj7=Object.assign({},obj2,obj3,obj6);
console.log(obj7);


// *spread
console.log("spread operator use")
const newobj={...obj2,...obj3};
console.log(newobj);
