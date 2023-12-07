/* let's do math! */

console.log('Do you see me');

const isANumber = '100';
let amIaNumber = 2;
let students = 16;

console.log('isANumber', isANumber);
console.log('amIaNumber', amIaNumber);

/* SUM +
 If one of the variables is a string, it treat all as a string and put one string next to the other.
 If variables are number, it do the math */

console.log('----------- SUM -----------');

let sum = amIaNumber + isANumber + students;
console.log('sum: ', sum);
console.log('Type of sum: ', typeof sum);

// 2 Stings
const myString = 'Hi class!';
const myString2 = 'Really math :S';
console.log('myString + myString2: ', myString + myString2);

// Is one variable is a string we need to convert it to a number with parseInt
let itIsWhatItIs = parseInt(isANumber) + amIaNumber;
console.log('itIsWhatItIs: ', itIsWhatItIs);

console.log('ADDing 1: ');
console.log('1. Initial amIaNumber: ', amIaNumber);
amIaNumber = amIaNumber + 1;
console.log('2. amIaNumber = amIaNumber + 1: ', amIaNumber);
amIaNumber += 1;
console.log('3. amIaNumber += 1: ', amIaNumber);
amIaNumber++;
console.log('4. amIaNumber++: ', amIaNumber);

// console.log('Math.PI', Math.PI);

const giveMeMore = 3;
amIaNumber += giveMeMore;
console.log('5. amIaNumber += giveMeMore: ', amIaNumber);
console.log('-----------------------------------------------');

console.log('----------- Subtract -----------');

console.log('typeof isANumber', typeof isANumber);
console.log('isANumber: ', isANumber);
console.log('amIaNumber: ', amIaNumber);

let sub = amIaNumber - isANumber;
console.log('sub: ', sub);
console.log('Type of sub: ', typeof sub);

const numberString = '10';
sub = isANumber - numberString;
console.log('sub = isANumber - numberString: ', sub);
console.log('Type of sub: ', typeof sub);

console.log('Subtract 1: ');
amIaNumber = amIaNumber - 1;
console.log('1. amIaNumber = amIaNumber - 1: ', amIaNumber);
amIaNumber -= 1;
console.log('2. amIaNumber-= 1:', amIaNumber);
amIaNumber--;
console.log('3. amIaNumber--: ', amIaNumber);

amIaNumber -= giveMeMore;
console.log('4. amIaNumber -= giveMeMore: ', amIaNumber);
console.log('-----------------------------------------------');

// Division
amIaNumber = 10;
amIaNumber /= 2;
console.log('amIaNumber /=2: ', amIaNumber);

//Multi
amIaNumber *= 2;
console.log('amIaNumber *=2: ', amIaNumber);

// Remainder
amIaNumber = 9;
amIaNumber %= 2;
console.log('amIaNumber %=2: ', amIaNumber);

// Potentiates
amIaNumber = 2;

const potential = 3;

amIaNumber = amIaNumber ** potential;
console.log('amIaNumber: ', amIaNumber);
