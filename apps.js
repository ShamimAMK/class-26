"use strict";
// Conversion of number
// decimal to binary
// const decimalNum = 45;

// //convert to binary
// const binaryNum = decimalNum.toString(2);

// //covert to octal
// const octalNum = decimalNum.toString(8);

// //convert to hexadecimal
// const hexaNum = decimalNum.toString(16);

// // console.log(binaryNum, octalNum, hexaNum);

// //binary to decimal
// const binaryStr = "101010";

// const decimalNums = parseInt(binaryStr, 2);

// //octal to decimal
// const octalStr = "45";

// const decimalOfOctal = parseInt(octalStr, 8);

// // console.log(decimalOfOctal);

// //isInteger()
// const num = 10;
// if (Number.isInteger(num)) {
//   console.log(`${num} is an Integer`);
// } else console.log(`${num} is not an Integer`);

// // console.log(num);

// //isInteger()
// const str = 45;
// if (isNaN(str)) {
//   console.log(`${str} is not a Number`);
// } else console.log(`${str} is a Number`);

// // console.log(str);

// //perseInt
// const padding = "10.124px";
// // const paddingInNumber = parseInt(padding);
// const paddingInNumber = parseFloat(padding);

// // console.log(padding);

//Math
//2^8
// console.log(Math.pow(2, 8));
// console.log(Math.sqrt(25));
// console.log(Math.abs(2.1));
// console.log(Math.ceil(3.254));
// console.log(Math.floor(1.981));
// console.log(Math.sin(30));

// const floatNum = 2.524;
// console.log(Math.round(floatNum));
// console.log(Math.ceil(floatNum));
// console.log(Math.floor(floatNum));
// console.log(Math.trunc(floatNum));

//date
const currDate = new Date();

// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());
// console.log(currDate.getHours());
// console.log(currDate.getSeconds());
// console.log(currDate.getMilliseconds());

// const formattedDate = currDate.toLocaleDateString();

// const formattedDate = currDate.toLocaleDateString("bn-BD", {
//   year: "numeric",
//   month: "long",
//   day: "2-digit",
// });

// console.log(formattedDate);
// console.log(new Date().getFullYear()-1990);

// const futureDate = new Date(currDate.getTime() + 24 * 60 * 60 * 1000);
// console.log(futureDate);

// const pastDate = new Date(currDate.getTime() - 24 * 60 * 60 * 1000);
// console.log(pastDate);

// const birthDate = new Date("10/12/1995").getTime();
// const presentDate = new Date().getTime();
// console.log(new Date(presentDate - birthDate)); // (365 * 24 * 60 * 60 * 1000);

// set timeout

// function greet() {
//   console.log("Hello World");
// }

// console.log("I am First");
// setTimeout(greet, 5000); // 5 sec
// console.log("I am First");

// setTimeout(() => {
//   const a = 10;
//   const b = 20;
//   const c = a + b;
//   console.log(c);
// }, 1000);

//setInterval()

// const myInterval = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// setTimeout(() => {
//   clearInterval(myInterval);
// }, 10000);

const clock = document.querySelector(".clock");

function clockSet() {
  const myInterval = setInterval(() => {
    const time = new Date().toLocaleTimeString("bn-BD", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      dayPeriod: "long",
    });

    clock.textContent = time;
  }, 1000);

  // stopClock(myInterval);
}

//  function stopClock {
//   setTimeout(() => {
//     clearInterval(myInterval);
//     clock.textContent= "ঘড়ি এখন এলিয়েনের দখলে";

//     setTimeout(clockSet, 2000);
//   }, 10000);
// }

clockSet();
