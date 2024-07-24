//? List of new useful features added in ES8  👇
// .at() function for indexing
// Object.hasOwn(obj, propKey)

// let data = [1,2,3,4,5,6,7,8,9,10];
// let myData = data[data.length-1]
// console.log(data.at(-1));
// let myData = data.at(-1)
// console.log(myData);

//todo Note Datatypes supporting this function. 👇
// String
// Array
// All Typed Array classes: Uint8Array etc.

//*  Object.hasOwn(obj, propKey)

//? Object.hasOwn() is a static method that you can use to check if a property exists in an object or not. It returns true if the specified object contains the indicated property as its own, and if the property is inherited or doesn’t exist, it returns false. This method takes the object as the first argument and the property you want to check as the second.

//? Object.hasOwn is the intended alternative for the Object.prototype.hasOwnProperty method. Although Object.prototype.hasOwnProperty has been in JavaScript specification for quite a time, it has some drawbacks.

// const book = {
//     name: "my name is gauri",
//     oName: "hello, hey"
// }

// console.log(book.hasOwnProperty("name"));
// console.log(book.hasOwnProperty("price"));


// // Using Object.hasOwn method
// we use object while using hasOwn property 

// console.log(Object.hasOwn(book, "name"));


