//* Object in JavaScript

// let person = {
//     name:"gauri",
//     age: 5,
//     greet: function(){
//         console.log("welcome to your website")
//     },
// };

// Adding and Modifying Properties:

// console.log(person.name);
// console.log(person.age);
// console.log(person.greet());

// person.age = 60;
// person.job = "FRED"
// console.log(person);

// person["age"] = 40;
// console.log(person);


//* We can add dynamic keys in an object

// let idType = "StudentId";

// let student = {
//     [idType]: "ADCVSRJG",
//     sNmae: "gauri",
//     sAge: "87",
//     isStudent: true,
//     greet: function(){

//         console.log(`hey my id is ${StudentId} is ${student[idType]}`),

//     }
// };

// student.greet();

// let idType = "studentId";

// let student = {
//     [idType]: "SADERFS",
//     sName: "gauri",
//     sAge:90,
//     greet: function(){
//         // console.log(`hey my Name is ${student.sName}` );
//         console.log(`hey my id is ${idType} is ${student[idType]}`);
//     },
// }

// student.greet();


// let a = 10;

// const myData= (x)=>(x=50);
// console.log(myData(a));
// console.log(a);


// let obj = {id: "wertdf", fName: "gauri"}

// let obj1 = obj;

// obj.fName = "priyal patil";
// console.log(obj);
// console.log("original", obj);


//? Object.assign() is used to copy properties from one or more source objects to a target object.
// after using Object. assign we get the original value also 

// let obj = {Fname:"gauri", lName:"patil"};

// let obj2 = Object.assign({}, obj);

// obj2.Fname = "Naresh Patil";
// console.log(obj2);
// console.log("original", obj);


// JSON 

// let obj = {
//     fName: "gauri",
//     lName:"patil",
//     sAge:78,
//     greet: function(){
//         console.log("this is school data");
//     }
// }

// console.log(obj);

// let jsonData = JSON.stringify(obj);
// console.log(jsonData);

// let obj = {
//     fName: "gauri",
//     lName:"patil",
//     sAge:78,
//     greet: function(){
//         console.log("this is school data");
//     }
// }

// console.log(obj);
// let jsonData = JSON.stringify(obj);
// console.log(jsonData);
// let newJson = JSON.parse(jsonData);    // get converted to original object 
// console.log(newJson);

// this in object 

// x = 5;
// console.log(x);

// function callme() {
//   console.log(this);
// }
// callme();

// const obj = {
//   name: "Kodyfier",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

// const obj = {
//   name: "Kodyfier",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();



// Fat Arrow Function

// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this);
//   },
// };
// obj.greet();


//* Objects Useful Methods  ************************************

const product = {
  id: 1,
  name: "Laptop",
  category: "Computers",
  brand: "ExampleBrand",
  price: 999.99,
  stock: 50,
  description:
    "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
  image: "image link will be added during projects",
};

//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

// let keys = Object.keys(product);
// console.log(keys);

//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.

// let values = Object.values(product);
// console.log(values);

//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.

// let entries = Object.entries(product);
// console.log(entries);

//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.

// console.log(product.hasOwnProperty("name")); // Output: true
// console.log(product.hasOwnProperty("isStudent")); // Output: false

//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
// const target = { a: 1, b: 5 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// const newTarget = {a:5, b:4};
// const newSource = {b:10, c:7};
// const newPiece = Object.assign(newTarget, newSource);
// console.log(newPiece);

//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
// Object.freeze(product);
// product.id = 4;
// console.log(product);


// challenge question 
// const target = { a: 1, b: 5 };
// const source = { b: 3, c: 4 };
// const newPiece = Object.assign({}, target, source);
// console.log(newPiece);

//* Interview Question - Object Manipulation:

let student = {
    fName: "gauri",
    age: 20,
    grades:{
    math: 90,
    science: 85,
    history: 88,
    },
};


const addSubjectName = ((student, subject, marks)=>{
if(!student.grades){
    student.grades = {}
}

return (student.grades[subject]=marks);
})

addSubjectName(student,"computer", 92);
console.log(student);