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
