let user1={
  name:"John",
  age:30
}
let user2={
  amount:20,
  money:50
}

console.log(user2.name); // undefined
user2.__proto__=user1;  // user2 nai saari property inherit kar li by using proto
console.log(user2.name);

// we use the arr.__proto__ in console then arr will inherit the properties from Array prototype which is already defined (jo ki ek object hota, isko we can understand simply from the above example where i am showcasing the inheritance of properties from user1 to user2 object)
let arr=[1,2,4,5]
console.log(Array.prototype==arr.__proto__);

console.log(Array.prototype.__proto__==Object.prototype)
console.log(arr.__proto__.__proto__.__proto__==null);


// prototype chaining
// array bhi properties kisi object se le raha , woh object bhi kisi any object se le raha, isse prototype chaining kaha jata hai
