// Timing Based Events in JavaScript

// setTimeout
// function delayedFunction(x) {
//     //   console.log("This function was delayed by 2000 milliseconds (2 seconds).", x);
//     // }
    
//     // setTimeout(delayedFunction, 2000);
//     // setTimeout(() => delayedFunction(5), 2000);
// }

// function myFun(){
//     console.log("this function was delay by 2000 milliseconds");
// }

// setTimeout(myFun, 2000)

// function myFun(x){
//     console.log("this function was delay by 2000 milliseconds");
// }



// setTimeout(()=>myFun(5), 2000)

//* 2. setInterval:

// function myFun(){
//     console.log("this function was delay by 2000 milliseconds");
// }

// setInterval(myFun, 2000)


// clearTimeout

// function delayedFunction() {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }

// const myWork = setTimeout(delayedFunction, 2000);
// clearTimeout(myWork);


// clearInterval

// function repeatedFunction() {
//   console.log("This function repeats every 1000 milliseconds (1 second).");
// }

// const intervalID = setInterval(repeatedFunction, 1000);

// clearInterval(intervalID);


// challenge time 

// const repeatedFunction = (()=>{
//     console.log("this function repeat after 2000 milis");
// });

// repeatedFunction();

// const interId = setInterval(repeatedFunction, 2000)
// console.log(interId);

// setTimeout(() => {
//   clearInterval(interId);
// }, 5000);

