//Higher Order Functions
const addTwoNumbers =(a, b)=>{
    console.log(`Sum of the two numbers: ${a + b}`);
}
addTwoNumbers(7,8);

let addMethod = addTwoNumbers;

addTwoNumbers(5 ,6);// Invoking Method using Variable 1
addMethod(5, 6); //Invoking Method  using Variable 2

//Prnting Function Name
console.log(addTwoNumbers);//[Function: addTwoNumbers]
console.log(addMethod);//[Function: addTwoNumbers]
console.log(addTwoNumbers.name);//addTwoNumbers
console.log(addMethod.name);//addTwoNumbers

//call Back Functions (Aam Zindagi)
const add = (x,y)=>{
    console.log(`Sum of the two numbers: ${x + y}`);
}
add(5, 6);
// const add = function(x,y){
//     console.log(`Sum of the two numbers: ${x + y}`);
// }

//(mentos Zindagi)
const sum = (param)=>{
    param(5,6);
    console.log(`Finished adding two numbers`);
}
const add1 = (x,y)=>{
    console.log(`Sum of the two numbers: ${x + y}`);
}
sum(add1); //Sum of the two numbers: 11
           //Finished adding two numbers

//Mentos Zindagi with a Twist
const sum1 = (param, a, b)=>{
    param(a,b);
    console.log(`Finished adding Two Numbers`);
}
const add2 = (x,y)=>{
    console.log(`Sum of the two numbers: ${x + y}`);
}
sum1(add2, 10,15)
// Sum of the two numbers: 25
// Finished adding Two Numbers

/* Iterators
They are methods used on arrays to work on the same.
Some of the common iterators are forEach(), map(), Filter() */

// const fruitsSalad = ['apple','banana','orange','kiwi','custard'];

// let itrFruits = function(fruit){
//     console.log(`10 gms of ${fruit}`);
// }

// fruitsSalad.forEach(itrFruits);
// 10 gms of apple
// 10 gms of banana
// 10 gms of orange
// 10 gms of kiwi
// 10 gms of custard

//mentos Zindagi
// const fruitsSalad = ['apple','banana','orange','kiwi','custard'];

// fruitsSalad.forEach(function(fruit){
//     console.log(`10 gms of ${fruit}`);
// });

//Mentos Zindagi with Arrow Function
const fruitsSalad = ['apple','banana','orange','kiwi','custard'];

fruitsSalad.forEach((fruit)=>{
    console.log(`10 gms of ${fruit}`);
});
// fruitsSalad.forEach(fruit=>{
//     console.log(`10 gms of ${fruit}`);
// });

//Map Functions
/*forEach() pops out an element of an array & it operates on it.
map() works in the same WebAssembly, but it returns a new array with added logic.*/

// const numbers = [1, 2, 3, 4, 5,7];

// const logic = function (num){
//     return num *num;
// }
// const squares = numbers.map(logic);
// console.log(squares);//[ 1, 4, 9, 16, 25, 49 ]

// const numbers = [1, 2, 3, 4, 5,7];

// const squares = numbers.map(function(num){
//     return num *num;
// });

// console.log(squares);

//Mentos Zindagi with Arrow Function

const numbers = [1, 2, 3, 4, 5,7];

// const squares = numbers.map((num)=>{
//     return num *num;
// });
// const squares = numbers.map(num=>{
//     return num *num;
// });

const squares = numbers.map(num=> num *num);
console.log(squares);

//Filtered Method
/* Filter method returns a new after filtering the elements from existing array.
.filter() returns an array of elements after filtering out certain elements from the original array.
the callback function (logic method) for the .filter() method should return true or false. */

// const mixedArray =['apple','banana',5.4,8,'kiwi','3.147',9.5,'25',true,false];
// const logic =function (item){
//     if (typeof item === 'boolean'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const num = mixedArray.filter(logic);
// console.log(num);//[ 5.4, 8, 9.5 ]

// const mixedArray =['apple','banana',5.4,8,'kiwi','3.147',9.5,'25',true,false];
// const logic =function (item){
//     return(typeof item === 'string')? true : false
// }
// const num = mixedArray.filter(logic);
// console.log(num);

const mixedArray =['apple','banana',5.4,8,'kiwi','3.147',9.5,'25',true,false];
// const num = mixedArray.filter(function(item){
//     return(typeof item === 'number')? true : false
// });
// const num = mixedArray.filter(item=>{
//     return(typeof item === 'number')? true : false
// });
const num = mixedArray.filter(item=>(typeof item === 'number')? true : false);
console.log(num);

//Find Index Method
/* findIndex() method retrieves the index of first element of the array which matches with the true Condition in the logic. */

let fruits = ['apple','pineapple','banana','dragon-fruit','orange','kiwi'];

let fruitNum = fruits.findIndex((fruit)=>{
    return fruit === 'banana';
});
console.log(fruitNum);//2

let startsWithD = fruits.findIndex((fruit)=>{
    return fruit[0] === 'd';
});
console.log(startsWithD);//3