let value;

value = false;
value = true;
value = 0;
value = 9;
value = -10;
value = 'Coriander';
value = '';
value = null;

// if (value) {
//     console.log('Value is Truthy. \tValue: ', value);
// } else {
//     console.log('Value is Falsy. \tValue: ', value);
// }

/* 
The Math.random() static d returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
*/

/* 
The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
*/

const max = 10;
let number = Math.random() * max;
number = Math.floor(number);
console.log('Value of number: ', number);

// number = Math.floor(Math.random() * max);

// Method 1:
// if (number > 2) {
//     number--;
// } else {
//     number++;
// }

// Method 2:
const boolValue = number > 2;
console.log('boolValue: ', boolValue);

// if (boolValue) {
//     number--;
// } else {
//     number++;
// }

//Method 3: Ternary Operator
//condition ? expressionIfTrue : expressionIfFalse
number > 2 ? number++ : number--;

console.log('After IF -> number: ', number);

// If else if && switch
const animal = 'Cat';
let emoji;

//We don't like it.
// if (animal === 'Dog') {
//     emoji = '🐶';
// } else {
//     if (animal === 'Tiger') {
//         emoji = '🐯';
//     } else {
//         emoji = '❓';
//     }
// }

// if (animal === 'Dog') {
//     emoji = '🐶';
// } else if (animal === 'Tiger') {
//     emoji = '🐯';
// } else if (animal === 'Elephant') {
//     emoji = '🐘';
// } else if (animal === 'Cat') {
//     emoji = '🐱';
// } else if (animal === 'Monkey') {
//     emoji = '🐒';
// } else {
//     emoji = '❓';
// }

switch (animal) {
    case 'Dog':
        emoji = '🐶';
        break;
    case 'Tiger':
        emoji = '🐯';
        break;
    case 'Elephant':
        emoji = '🐘';
        break;
    case 'Cat':
        emoji = '🐱';
        break;
    case 'Monkey':
        emoji = '🐒';
        break;
    default:
        emoji = '❓';
        break;
}

console.log('Animal is: ', animal, '\t Emoji is: ', emoji);
