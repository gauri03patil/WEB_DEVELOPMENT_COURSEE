//*    ECMAScript Features (2017) / ES8

// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//*  String padding

// let data = "Gauri";
// let myDta = data.padStart(15);
// let myDta = data.padStart(15, "*");
// console.log(myDta);

// let data = "Patil";
// let Mydata = data.padEnd(15);
// let Mydata = data.padEnd(15,"$")
// console.log(Mydata);

//*  trailing commas
//* ====================
//? This feature allows to have trailing commas in function declarations, functions calls, array literal & object literal:

// // Function parameter list
// function greet(name, age, boolean) {
//     console.log(`Hello ${name}, you are ${age} years old.`);
//   }
  
//   // // Function call
//   greet("John", 30, true);
  
//   // // Array literal
//   const colors = ["red", "green", "blue"];
  
//   // // Object literal
//   // const person = {
//   //   firstName: "John",
//   //   lastName: "Doe",
//   //   age: 30,
  // };

//*  Object.entries() & Object.values()

// const person = {
//     fName:"gauri",
//     lName:"patil",
//     age:78,
// }

// console.log(Object.keys(person));
// let data = Object.keys(person);
// console.log(data);

// let myData = Object.values(person);
// console.log(myData);

// let data = Object.entries(person);
// console.log(data);