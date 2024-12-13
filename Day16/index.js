const arr = [10, 20, 30, 40, 50];

// const result=arr.reduce((accumulator,current)=>{},0) // number chaiye
const result = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(result);

const result2 = arr.reduce((acc, curr) => acc + curr);
console.log(result2);

// usecase of reduce
const fruits = ["oranges", "bananas", "oranges", "kiwi", "bananas"];

const result3 = fruits.reduce((acc, curr) => {
  // if (acc.hasOwnProperty(curr)) {
  //   acc[curr] = acc[curr] + 1;
  // } else {
  //   acc[curr] = 1;
  // }
  acc.hasOwnProperty(curr) ? acc[curr]++ : (acc[curr] = 1);
  return acc;
}, {});

console.log(result3);

// *SET

const set1 = new Set([10, 10, 10, 20, 30, 40]);
console.log(set1);

const set2 = new Set();
set2.add(4);
set2.add(6);
set2.add("hrought");

console.log(set2);
set2.delete("hrought");
console.log(set2);
console.log(set2.has(4));
set2.clear();
console.log(set2);

let arr1 = [...set1];
console.log(arr1);

let set3 = new Set([10, 20, 30, 40]);
let set4 = new Set([30, 40, 50, 60]);
// union
let set5 = new Set([...set3, ...set4]);
console.log(set5);

// intersection

let intersection = new Set([...set3].filter((val) => set4.has(val))); // !used
console.log(intersection);

// iterate over the set
// for of
for (let val of intersection) {
  console.log(val);
}
// for each
intersection.forEach((val) => {
  console.log(val);
});
// object mai keys string ya symbol ho sakta
// map mai kuch bhi keys ho sakta even object can be key
// maps
// maps remembers the elements on the order of insertion

const map1 = new Map();
map1.set("name", "Rahul");
map1.set("age", 30);
map1.set({ age: 20 }, 30);
map1.set(3, 30);
console.log(map1);
// Map(4) { 'name' => 'Rahul', 'age' => 30, { age: 20 } => 30, 3 => 30 }
map1.delete("age");
console.log(map1, map1.size);
map1.clear();
console.log(map1.size);

// 2 nd way of creating map
const map2 = new Map([
  ["name", "Rahul"],
  ["age", 30],
  [3, 30],
  [{ age: 20 }, 30],
  ["age", 30],
]);
console.log(map2);
for (let [key,val] of map2) {
  console.log(`key->${key}, value->${val}`);
}

// console.log(map1.name); -> undefined
map2.forEach((val,key)=>console.log(key,val))
