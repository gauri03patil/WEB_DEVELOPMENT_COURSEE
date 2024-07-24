//* Modern JavaScript - EcmaScript 2015

//*  Object Properties - Modern JavaScript

// const name = "gauri";
// age = 54;

// const person = {name:name, age:age};   // traditional method
// console.log(person);

// shorthand notation 
// const person = {name, age};
// console.log(person);

//*  Destructuring - Modern JavaScript  ******************************************
// const number = [10,20,30];

// const first = number[0];  // Traditional way
// console.log(first);

// const [first,seconf,third] = number;
// console.log(seconf);
// console.log(first);

//? 2: Ignoring elements:
// const [, , third] = number;
// console.log(third);


//! Interview Questions
//! Write a program to swap two variables without using 3rd variable?

// let a = 10;
// let b = 30;

// [a,b] = [b,a];
// console.log(a,b);

//? Extracting properties:
// const user = { name: "Vinod", age: 30 };
// const myName = user.name; // Traditional way
// console.log(myName);
// const { age, name } = user;
// console.log(age, name);

// /? Renaming properties:
// const user = { name: "Vinod", age: 30 };
// const { name: fullName, age } = user; // Rename "name" to "fullName"
// console.log(fullName);

//*  Spread Operator - Modern JavaScript

// let fruits = ["apple", "cherry", "mango","banana"];

// console.log(fruits);
// console.log(...fruits);

// let fName = "gauri";
// let lName = "patil";
// console.log(...fName, ...lName);

//? 2: Concatenating arrays / Combining arrays
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [4, 5, 6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

// let num1 = [1,2,3,4];
// let num2 = [4,5,6];
// const newNum = [...num1, ...num2];
// console.log(newNum);


//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// // fruits.push("guava", "grapes");
// fruits.push(...["guava", "grapes"]);
// console.log(fruits);

// let data = ["apple","cherry","mango"];
// data.push("green apple");
// console.log(data);
// data.push(...["grapes","guava"]);
// data.push(["grapes","guava"]);  wrong just for try 
// console.log(data);


// const country = "INDIA";
// console.log(country.split(""));  //traditional way

// const country = "INDIA";
// console.log(...country);

//*  Rest parameters  - Modern JavaScript

// const sum = (a, b, ...numbers) => {
//     //   console.log(typeof numbers);
//     return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
//   };
  
//   console.log(sum(1, 2, 3, 4));

// const data = (...numbers)=>{
//     // console.log(typeof numbers);
//     return numbers.reduce((accumm, currVal)=>(accumm= accumm+ currVal),0)
// }

// console.log(data(5,5,5,5));

// const sum = (a, b, ...numbers) => {
//     //   console.log(typeof numbers);
//     return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
//   };
  
//   console.log(sum(1, 2, 3, 4));   // here 1 and 2 are given to a, b so we cant do this, so we dont write rest parameters in first