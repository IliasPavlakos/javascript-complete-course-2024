// let firstName = 'Ilias';
// let lastName = 'Pavlakos';
//
// console.log(firstName + ' ' + lastName);
//
// let PI = Math.PI;
// console.log(PI);

// let aNumberVar = 1;
// let aStringVar = 'Hello World';
// let aBooleanVar = true;
// let aUndefinedVar = undefined;
// let aNullVar = null;

// A single line comment

/*
A multiline comment
*/

// console.log(typeof aNumberVar);
// console.log(typeof aStringVar);
// console.log(typeof aBooleanVar);
// console.log(typeof aUndefinedVar);
// console.log(typeof aNullVar); // return object with is a known bug - legacy
//
// aNumberVar = '1';
//
// console.log(typeof aNumberVar); // changed to string

// let age = 25;
// age = 26;
//
// const minAge = 0; // can't be changed
// // minAge = 100; // Causes error
//
// // Causes error because of no initial value
// // const job;
//
// var otherAge = 32; // legacy - must be avoided
//
// lastName = 'Stark'; // don't need to declare variable - bad idea, never do this, always declare variable
// console.log(lastName)

const ageIlias = 2024 - 1998;
console.log(ageIlias);

console.log(2 ** 3 === 8)

let x = 1;

x += 1;
console.log(x === 2);

x *= 2;
console.log(x === 4);

console.log(x++ === 4);
console.log(x === 5);
console.log(++x === 6);

console.log(x >= 6);