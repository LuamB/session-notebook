// This is a comment

// Variables

var oldUse;
oldUse = "Try not to use this!";

console.log("old Use: ", oldUse);

/*
Ways to run JS files 
1. In the terminal: system or VS terminal.
From the current folder write: 
node fileName.js

2. In VS code: Run > Run without Debugging > select 'node'

3. In the browser: html file required. Open dev tools and go to console to see the console.logs.

*/

//  Since 2015 we use this to create variables
let newVar = "I can change in time!";
const myValueWillNotChange = "You are stuck with me!";

console.log("newVar: ", newVar);
console.log(
  "myValueWillNotChange",
  myValueWillNotChange
); /* Always add some text when logging the console, e.g. name of variable */

console.log("Data Types");

//BOOLEANS
const myBoolean = false;
console.log("my Boolean: ", myBoolean);

//STRINGS
const myString = "Is this a string? 129";
console.log("myString: "), myString;

//NUMBERS
const myNum = 129;
console.log("myNum: ", myNum);

// BigInt
const myBigInt = 3000n; /* n tells the system to reserve more space */
console.log("myBigInt: ", myBigInt);

//null
const myNull = null;
console.log("myNull: ", myNull);

// Undefined
let myUndefined;
console.log("myUndefined: ", myUndefined);

//ARRAY
const myArray = [
  "Element 1",
  2,
  "Element 3",
  false,
  5,
]; /* Arrays can contain any type of element */
console.log("myArray: ", myArray);

//OBJECT
const myObject = {
  cohortName: "Corianer",
  amountSudents: 16,
  academy: "Spiced",
  knowsJS: true,
};
console.log("myObject: ", myObject);

// Let's do math!

console.log("Do you see me?");

const isANumber = "1";
let amIaNumber = 2;
let students = 16;

console.log("isANumber", isANumber);
console.log("amIaNumber", amIaNumber);

/* SUM

Math is only applied if all variables are numbers. 
If one of the vars is a string, all others vars will be converted to a string. */

let sum = isANumber + amIaNumber + students;
console.log("sum: ", sum);
console.log("Data type of sum: ", typeof sum);
/* 12, undefined */

// 2 Strings
const myString1 = "Hi class!";
const myString2 = "Really math :S";

console.log("myString1 + myString2: ", myString1 + myString2);

// If one var is not a number we need to convert
let isItWhatItIs = parseInt(isANumber) + amIaNumber;
console.log("isItWhatItIs: ", isItWhatItIs);

console.log("-----SUM-----");
console.log("1. Initial amIaNumber: ", amIaNumber);

amIaNumber = amIaNumber + 1;
console.log("2. amIaNumber = amIaNumber + 1: ", amIaNumber);

amIaNumber += 1;
console.log(
  "3. amIaNumber += 1",
  amIaNumber
); /* Adds 1 (or another number) to itself */

amIaNumber++;
console.log("4. amIaNumber++", amIaNumber); /* Adds 1 to itself */

// console.log('Math.PI', Math.PI);

const giveMore = 3;
amIaNumber += giveMore;
console.log("5. amIaNumber += giveMore", amIaNumber);

/* SUBTRACT

Math is applied even if one or more variables are number-strings . 
If one of the vars is a number-string (e.g. '1', '8', but not 'one', 'eight'), 
it will be converted to a number. */

console.log("-----SUBTRACT-----");

console.log("Type of isANumber: ", isANumber);
console.log("Type of amIaNumber: ", amIaNumber);

let sub = amIaNumber - isANumber;
console.log("sub: ", sub);
console.log("Type of sub: ", typeof sub);

const numberString = "10";
sub = isANumber - numberString;
console.log("sub = isANumber - numberString: ", sub);
console.log("Type of sub: ", typeof sub);

console.log("Subtract 1: ");
amIaNumber = amIaNumber - 1;
console.log("1. amIaNumber = amIaNumber -1", amIaNumber);

amIaNumber -= 1;
console.log("2. amIaNumber -= 1", amIaNumber);

amIaNumber--;
console.log("3. amIaNumber --", amIaNumber);

amIaNumber -= giveMore;
console.log("4. amIaNumber -= giveMore: ", amIaNumber);

amIaNumber = 10;
amIaNumber /= 2;
console.log("5. amIaNumber /= 2: ", amIaNumber);

amIaNumber *= 2;
console.log("6. amIaNumber *= 2: ", amIaNumber);

// Remainder (Modulus)
amIaNumber = 9;
amIaNumber %= 2;
console.log("amIaNumber %=2: ", amIaNumber);

// Exponentials
amIaNumber = 2;

const exponent = 2;

amIaNumber = amIaNumber ** exponent;
console.log("amIaNumber: ", amIaNumber);
