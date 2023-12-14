"use strict";
// Conversion of number
// decimal to binary
const decimalNum = 45;

//convert to binary
const binaryNum = decimalNum.toString(2);

//covert to octal
const octalNum = decimalNum.toString(8);

//convert to hexadecimal
const hexaNum = decimalNum.toString(16);

// console.log(binaryNum, octalNum, hexaNum);

//binary to decimal
const binaryStr = "101010";

const decimalNums = parseInt(binaryStr, 2);

//octal to decimal
const octalStr = "45";

const decimalOfOctal = parseInt(octalStr, 8);

// console.log(decimalOfOctal);

//isInteger()
const num = 10;
if (Number.isInteger(num)) {
  console.log(`${num} is an Integer`);
} else console.log(`${num} is not an Integer`);

// console.log(num);

//isInteger()
const str = 45;
if (isNaN(str)) {
  console.log(`${str} is not a Number`);
} else console.log(`${str} is a Number`);

// console.log(str);

//perseInt
const padding = "10.124px";
// const paddingInNumber = parseInt(padding);
const paddingInNumber = parseFloat(padding);

// console.log(padding);

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
const currDate = new date();

console.log(currDate);
