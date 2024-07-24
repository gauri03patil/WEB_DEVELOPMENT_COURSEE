// function myPromiseFunction() {
//   return new Promise((resolve, reject) => {
//     // Asynchronous operations here
//     // If successful, call resolve(value)
//     // If there's an error, call reject(error)
//   });
// }


// const myData = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     resolve("hey, my name is gauri");
// }, 2000);
// });

// myData.then((res)=>{
// console.log(res);
// }).catch((error)=>{
// console.log(error);
// }).finally(()=>{
//     console.log("don know this");
// })

// const myData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("hey, my name is gauri");
//     }, 2000);
//     });
    
//     myData.then((res)=>{
//     console.log(res);
//     }).catch((error)=>{
//     console.log(error);
//     }).finally(()=>{
//         console.log("don know this");
//     })


// example  

// let studentName = "gauri";

// const pre = (studentName)=>{
//     return new Promise((resolve, reject)=>{
// setTimeout(()=>{
// const sucessFull = Math.random()>0.4;
// if(sucessFull){
//     resolve(`enrolled sucessful for ${studentName}`)
// }else{
//     reject(`enrolled fail for ${studentName}, please try again`)
// }

// }, 2000)
//     });
// };

// pre(studentName)
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
// console.log(err);
// }).finally(()=>{
//     console.log("enrolled process completed");
// })


//* ==========================================
//* Promise Methods
//* ==========================================

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.

// Example usage:

// The enrollStudent function returns a promise that resolves or rejects based on the success or failure of the enrollment process.
// The then method is used to handle the success case, printing a success message.
// The catch method is used to handle the failure case, printing an error message.
// The finally method is used to print a message indicating the completion of the enrollment process, whether successful or not.


// example 

const promise1 = new Promise((resolve, reject)=>{
setTimeout(()=>resolve("First"), 2000)
});

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Failed"), 100)  
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 1000)
);


// in promise all if one is also rejected than nothing will work 
// Promise.all([promise1,promise2, promise3])
// .then((values)=>{
// console.log(values);
// }).catch((error)=>{
// console.log(error);
// })

// Promise.allSettled([promise1,promise2, promise3])
// .then((values)=>{
// console.log(values);
// }).catch((error)=>{
// console.log(error);
// })

// Promise.race([promise1,promise2, promise3])
// .then((values)=>{
// console.log(values);
// }).catch((error)=>{
// console.log(error);
// })
