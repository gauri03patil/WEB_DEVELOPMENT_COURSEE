//* ==========================================
//*    ECMAScript Features (2021) / ES12
//* =========================================

//? List of new useful features added in ES8  👇
// String.prototype.replaceAll()
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators
// Promise.any()

//*  String.prototype.replaceAll()

// let data = "hello my name is gauri, hello i am from mumbai";
// // let myData = data.replace("hello", "hii");
// let myData = data.replaceAll("hello", "hii");
// console.log(myData);

//*  Logical Assignment Operators (||=, &&=, ??=)

//? Logical OR-Assignment (||=): This operator assigns the value of its right-hand operand to its left-hand 
// operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise,
//  it leaves the left-hand operand unchanged.
// let x = false;
// x = x || true; // equivalent to: x = x || true;
// console.log(x); // Output: true

// let y = 10;
// y ||= 20; // equivalent to: y = y || 20;
// console.log(y); // Output: 10 (unchanged)

//? Logical AND-Assignment (&&=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value. Otherwise, it leaves the left-hand operand unchanged.
// let x = true;
// x &&= false; // equivalent to: x = x && false;
// console.log(x); // Output: false

// let y = 0;
// y &&= 20; // equivalent to: y = y && 20;
// console.log(y); // Output: 20

//*  Numeric Separators
//* ====================
//? This feature allows underscores (_) to be used as separators within numeric literals to improve readability.
// const bigNumber = 1_000_000;
// console.log(bigNumber);
// Output: 1000000;

// const myData = 66_78765_54;
// console.log(myData);


