// Non primitive 
const obj={
  id:10
}

obj.id=11
console.log(obj);


let obj2={
id:20,
name:"John"
}

// location of obj 800
// location of obj2 600
// obj=obj2 //TypeError: Assignment to constant variable.


// string in js
let str1="Hello hi bye"
let str2='Hello hi bye'
let price=50;
let str3=`Hello mast tata bye ${price}`
console.log(str3);

//string concatenation
let str4="Hello "
let str5="hi"
console.log(str4+str5);
// length
console.log(str4.length);


// "hello coder army"
console.log('"hello coder army"');
console.log("'hello coder army'");
// \n 
let message="iis ejdi sjie diaopkjdjeoe.\neojomeeeeeeemcmsoeoeeo dndodeeoenoe"
console.log(message);

// escape character \
let message2="iis ejdi sjie diaopkjdjeoe.\\neodljssssssss"
console.log(message2);

// changing case
// tolowerCase
let cart="Holo Yolo"
console.log(cart[3]);
console.log(cart.charAt(3));

let strtemp=cart.toLowerCase();
console.log(cart.toLowerCase());  /// no change in original string, it returns a new string
console.log(cart.toUpperCase());
console.log(cart,strtemp);


let hero="hello coder army coder"
console.log(hero.indexOf("coder")); // returns  starting index of first occurrence of coder
console.log(hero.lastIndexOf("coder")); // returns starting index of last occurrence of coder
// includes
console.log(hero.includes("coder")); // returns true if coder is present in hero, else false


// extracting substring
let newString="HeloDon"
console.log(newString.slice(0,3));
// slice can take negative values also
console.log(newString.slice(-5,5));
console.log(newString.substring(0,3));


let str10="hello ji kaise ho ji"
console.log(str10.replace("ji","Money"));
console.log(str10.replaceAll("ji","Money"));
console.log(str10);

// string into array  split
let str8="Money, Honey,Tuney,Buney "
console.log(str8.split(','));
let str9="Money! Honey! Tuney! Buney"
console.log(str9.split('!'));

// trim, remove whitespaces at start and end
let tstr="  Hello ji   " 
console.log(tstr);
console.log(tstr.trim());

// normal tarike se jab hum string banate hai to wo stack mai address leta hai
// jab new keyword ke sath banate hai, tab memory located hota in heap mai
// New way to create string
let str11=new String("hello coder");
console.log(typeof str11);
console.log(str11);
