//*    ECMAScript Features (2019) / ES10

//? List of new useful features added in ES8  👇
// Array.prototype.{flat,flatMap}
// Object.fromEntries()
// String.prototype.{trimStart,trimEnd}
// Symbol.prototype.description
// Optional catch binding

//*  Array.flat & Array.flatMap

// const myData = [1,2,3, [4,5], 6]

// const myData = [1,2,[3,4,5,[6,7,8]],9,10]
// // const newArry = myData.flat();
// const newArry = myData.flat(2);

// console.log(newArry);


// const arr = ["My name", "is vinod", "thapa"];
// const newArr = arr.flatMap((curVal) => curVal.split(" "));
// console.log(newArr);

// const myArry = ["my name", "is gauri", "patil"];
// const newArry = myArry.flatMap((curVal)=> curVal.split(" "));
// console.log(newArry);

// const myArry = ["my name", "is gauri", "patil"];
// const newArry = myArry.map((curVal)=> curVal.split(" "));
// console.log(newArry);

//*  Object.fromEntries()

// const data = {name:"gauri", age:54, lName:"patil"};
// const myData = Object.entries(data);
// console.log(myData);

// const data = {name:"gauri", age:54, lName:"patil"};
// const myData = Object.fromEntries(data);
// console.log(myData);

// const person = { name: "vinod", age: 30 };
// // const entries = Object.entries(person);
// const newPerson = Object.fromEntries(person);
// console.log(newPerson);
// // console.log(entries);

//* String.prototype.{trimStart,trimEnd}


//? trimStart(): Return a new string with removed white space from the start of the original string
// console.log("Testing".trimStart());
// console.log("           Testing".trimStart());
// console.log("     Testing     ".trimStart());
// console.log("Testing    ".trimStart());


// let data = "   gauri   ";
// let myData = data.trim();
// console.log(myData.length);

// let data = "   gauri   ";
// let myData = data.trimStart();
// console.log(myData.length);

// let data = "   gauri   ";
// let myData = data.trimEnd();
// console.log(myData.length);

//* ================================
//* Symbol.prototype.description
//* ===============================

//? In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). It represents a unique identifier that is immutable and guaranteed to be unique. Symbols are often used as property keys in objects to avoid naming conflicts.

//? The Symbol.prototype.description property is a new feature introduced in ECMAScript 2019 (ES10). It allows you to retrieve the description of a symbol. When you create a symbol, you can optionally provide a description as its parameter. The description property lets you access this description.

// const mySymbol = Symbol("This is my symbol");
// console.log(typeof mySymbol);
// console.log(mySymbol.description);


//*  Optional catch binding

//? We previously had to do: 👇
// try {
//     //...
//   } catch (e) {
//     //handle error
//   }
  
//   //? Now we can omit that optional parameter 👇
//   try {
//     10 + 5;
//   } catch {
//     console.log("there is an error");
//   }


// try{
//     8+10;
// }catch{
//     console.log("this is wrong, please try again");
// }