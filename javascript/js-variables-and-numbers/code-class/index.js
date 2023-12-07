/* Variables and data types! */

//  This is a comment

/* 
Ways to run JS files:
1. In the terminal. It could be the system terminal or VS terminal. To run the code we should be standing in the folder of the file and write in the terminal:
    node fileName.js

2. In VS code, with Run without Debugging (select node) 

3. In the browser. For this we need and html page. We open the developer tools and go to console to see our console.log's
*/

// This was use before 2015
var oldUse;
oldUse = 'Try not to use it!';

// console.log('old Use: ', oldUse);

// We use this one from 2015
let newVariable = 'I can Change in time';
const myValueWillNotChange = 'You are stuck with me!';

// console.log('newVariable: ', newVariable);
// console.log('myValueWillNotChange: ', myValueWillNotChange);

console.log('Data Types');

//  Booleans:
const myBoolean = true;
console.log('myBoolean: ', myBoolean);

//Strings
const myString = 'Is this a string? 129';
console.log('myString: ', myString);

//Number
const myNumber = 123;
console.log('myNumber: ', myNumber);

//BigInt
const myBigInt = 3000n;
console.log('myBigInt: ', myBigInt);

//null
const myNull = null;
console.log('myNull: ', myNull);

//Array
const myArray = ['Element 1', 2, 'Element 3', false, 5];
console.log('myArray: ', myArray);

//Object
const myObject = {
    cohortName: 'Coriander',
    amountStudents: 16,
    academy: 'Spiced',
    knowsJs: true,
};
console.log('myObject: ', myObject);

let myUndefine;
console.log('myUndefine: ', myUndefine);
