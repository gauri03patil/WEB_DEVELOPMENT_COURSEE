// Date & Time Objects in JavaScript

// there are 9 ways to create a date object 

// Syntax
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)


// const currDate = new Date();
// console.log(currDate);

// const dateString = "2024-02-19T10:44:09.274Z";
// const dateFromString = new Date(dateString);
// console.log(dateFromString);

// const date1 = new Date(2023,11);
// console.log(date1);

// const date2 = new Date(2023,1,21);
// console.log(date2);

// const date3 = new Date(2023, 2, 12, 5);
// console.log(date3);

// const date4 = new Date(2023,3,4,5,34);
// console.log(date4);

// const date6 = new Date(2024, 1, 19, 10, 44, 9, 274);
// console.log(date6);

// const curMilliSeconds = new Date().getTime();
// // console.log(curMilliSeconds);
// // const milliseconds = 1632090690883; // Example milliseconds
// const dateFromMilliseconds = new Date(curMilliSeconds);
// console.log(dateFromMilliseconds);


// const date1 = new Date("2024-01-05"); // Year-Month-Day
// const date2 = new Date("January 5, 2024"); // Month Day, Year
// console.log(date1);
// console.log(date2);

// const myDate = new Date("2025-01-09");
// console.log(myDate);
// const myDate2 = new Date ("jan 25, 2025");
// console.log(myDate2);

// JavaScript Get Date Methods / Getting Components:


// You can get various components of a date using the methods of the Date object:
// const currentDate = new Date();
// //? In a date object, the time is static.
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth(); // 0-based index
// const date = currentDate.getDate();
// const day = currentDate.getDay();
// console.log(currentDate);
// console.log(day);
// In JavaScript, the first day of the week (day 0) is Sunday.
// day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

// const currentDate = new Date();
// console.log(currentDate);

// const date = new Date();


// console.log(date);
// date.setFullYear(2025);
// console.log(date);
// date.getFullYear(2025);
// console.log(date);

// date.setMonth(9);
// console.log(date);

// const d = new Date(2018, 15, 24, 10, 33, 30, 0);
// console.log(d);
// pecifying a month higher than 11, will not result in an error but add the overflow to the next year

// const d = new Date(2019, 3, 24, 10, 33, 30, 0);
// console.log(d);

// const d = new Date(2018, 11, 24, 10, 33, 30);
// console.log(d);

// const d = new Date(100000);
// console.log(d);

// const d = new Date(-100000000000);
// console.log(d);

// const date = new Date();
// const localString = date.toLocaleString();
// console.log(localString);

// const date = new Date();
// const localString = date.toLocaleDateString();
// console.log(localString);

// const date = new Date();
// const localString = date.toLocaleTimeString();
// console.log(localString);

// const dateString = "2024-02-19T16:30:00Z";
// const parsedDate = Date.parse(dateString);
// console.log(parsedDate); // Example output: 1703254200000 (milliseconds)


// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// console.log(currentYear); // This will output the current year

// let currentDate = new Date();
// currentDate.setFullYear(2025);
// console.log(currentDate);



// Date Methods***********************************************

// const d = new Date();
// const a = d.toString();
// console.log(a);

// const p = new Date();
// const z = p.toUTCString();
// console.log(z);

// const g = new Date;
// const y = g.toISOString();
// console.log(y);

// const data = new Date();
// const myData = data.toDateString();
// console.log(myData);


// *****************************************************

// new Date(milliseconds)

// const d = new Date(100);
// console.log(d);

// const g = new Date(1000);
// console.log(g);

// const data = new Date(100000000000);
// console.log(data);

// const data = new Date(10000000000);
// console.log(data);

// const d = new Date(86400000);
// console.log(d);

// const d = new Date(0);
// console.log(d);

// const d = new Date(99, 11, 24);
// console.log(d);

// const d = new Date(2018, 11, 24, 10, 33, 30);
// console.log(d);

// const d = new Date(2018, 11, 24, 10, 33);
// console.log(d);

// ISO Date	"2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

// const sec = Date.parse("march 21, 2012");
// console.log(sec);

// let data = Date.parse("january 23, 2025");
// console.log(data);


// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const d = new Date("2021-03-25");
// let month = months[d.getMonth()];
// console.log(month);

// const data = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const x = new Date("2023-05-23");
// let monthss = data[x.getMonth()];
// console.log(monthss);

// const d = new Date("2021-03-25");
// const myData = d.getDay();
// console.log(myData);

// const d = new Date("2021-03-25");
// const myData = d.getMinutes();
// console.log(myData);

// const d = new Date("2021-03-25");
// const data = d.getMilliseconds();
// console.log(data);

// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const myData = new Date ("2022-03-17");
// let day = days[myData.getDay()];
// console.log(day);

// const d = new Date();
// const g = d.setDate(d.getDate() + 50);
// console.log(g);

