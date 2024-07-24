//*  First-Class Function - it's just a concept
//* ---------------------------------------------------
// A language feature where functions are treated as first-class citizens.
// Functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.
//?   A "first-class function" means that functions can be treated as values, assigned to variables, and passed around as arguments.


// // Function declaration
// function myFun(name){
//       return "Hello, " + name + "!";
// }

// // // // Assigning the function to a variable
// let myData = myFun;


// // // // Using the variable as a function
// console.log(myData("gauri"));


//* -------------------------------
//*  Higher-Order Functions:
//* -------------------------------
//? Definition: A higher-order function is a function that takes one or more functions as arguments or returns a function as a result.

//* -------------------------------
//*  Callback Functions:
//* -------------------------------
//? Definition: A callback function is a function passed as an argument to another function and is executed after the completion of a task.



//* Here is the example ✅
// Callback function

// function processUserInput(name, grretUser){
//       console.log("Received input: " + name);
//       grretUser(name);
// }

// // // Function to be used as a callback
// function grretUser(name) {
//   console.log(`Hello! ${name}`);
// }

// processUserInput("Vinod", grretUser);

// processUserInput is a higher-order function because it takes another function (callback) as an argument.
// greetUser is a callback function because it's passed as an argument to processUserInput and gets executed after the completion of the main task



//? Instructions:
//? Define a higher-order function called mathOperation that takes three arguments: x, y, and operation.
//? Implement two callback functions:
//? add: Takes two numbers x and y and returns their sum.
//? sub: Takes two numbers x and y and returns the result of subtracting x from y.
//? Use the mathOperation function to perform addition and subtraction operations on two variables a and b.
//? Display the results of the operations.

const mathOperation = (a, b, operation) => {
    return operation(a, b);
  };
  
  const add = (a, b) => {
    return a + b;
  };
  
  const sub = (a, b) => {
    return b - a;
  };
  
  console.log(mathOperation(5, 15, add));
  console.log(mathOperation(5, 15, sub));
