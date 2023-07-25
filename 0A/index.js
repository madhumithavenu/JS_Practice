//Javascript is a scripting language which was initially used for Client Side Validation.
// Now is used for server side programming after the induction of specification ES6.

/*console.log("Hello World");
console.log("My Name is Madhu");
console.log(2002);*/

// There are six primary data-types in JavaScript(excluding symbol)
// a)Number b)String c)Boolean d)Null e)Undefined f)Object

// console.log(5);
// console.log(25.69);

// console.log('JavaScript');
// console.log('My name is Madhu! I love #JScript');

// console.log(5 > 6);
// console.log(5<=25);

// Null -vs- Undefined

// var a = null;
// console.log(a);

// var b;
// console.log(b);

// Arthematic Operations

console.log(65 + 55);
console.log(65 - 55);
console.log(65 * 55);
console.log(65 / 55);
console.log(65 % 55);

// String Concatenation
console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World');

// String length
console.log('Hello'.length); //5
console.log("My Name is Madhu".length); //16

//String Methods
console.log('Hello'.toUpperCase());
console.log('VAnaKam'.toLowerCase());
console.log('Super Ranga'.startsWith('S'));
console.log('Super Ranga'.startsWith('R'));

console.log('               No Space Please               '.trim());

//Build-in Objects
console.log(Math.random());
console.log(Math.floor(46.7)); //46
console.log(Math.ceil(46.7)); //47
console.log(Number.isInteger(75)); //true
console.log(Number.isInteger(75.33)); //false

//Create and use Variables
var myName ='Madhu';
var age =21;

console.log(myName);
console.log(age);
console.log('My name is ' + myName + ' & my age is ' + age);

//Local Variables using :let
let myName ='Nischal';
let age =15;

console.log(myName);
console.log(age);
console.log('My name is ' + myName + ' & my age is ' + age);

//Constant - are very similar to variables whose values cannot be re-assigned anywhere in the program.
//Constants are declared using the keyword 'const' in javascript.
//If we try to change the value of the constant we get an error.

const myMom = 'Divya';
const age = 34;
console.log('My mom is ' +myMom+ ' & her age is ' +age);

//Unary Arthematic Operator
var num =55;

num += 10; //65 | Equivalent: num = num + 10;
num -= 20; //45 | Equivalent: num = num - 20;
num *= 100; //4500 | Equivalent: num = num * 100;
num /= 50; //90 | Equivalent: num = num / 50;
num %= 4; //2 | Equivalent: num = num % 4;