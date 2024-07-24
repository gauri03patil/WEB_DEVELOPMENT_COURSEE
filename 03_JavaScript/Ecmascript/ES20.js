//*    ECMAScript Features (2020) / ES11

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled


//? - Using the `n` suffix:

// let numbers = BigInt(23456789098765432123456);
// console.log(numbers);
// console.log(typeof numbers);


// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber);


// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// let num = maxNumber + 10n;
// console.log(num);

// let myMaxNumber = Number.MAX_SAFE_INTEGER;
// myMaxNumber = BigInt(myMaxNumber);
// let num1 = myMaxNumber + 10n;
// console.log(num1);

//*  Nullish Coalescing Operator ??

//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

// let favNum = 0; // falsy
// // userFavNum = favNum || 10;
// userFavNum = favNum ?? 10;
// console.log(userFavNum);


// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//     zipCode: 12345,
//     coordinates: {
//       latitude: 40.7128,
//       longitude: -74.006,
//     },
//   },
// };

// // Accessing deeply nested properties with optional chaining
// const latitude = person.address?.coordinates?.latitude ?? "not present";
// console.log(latitude);



