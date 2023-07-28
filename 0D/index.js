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
sum(add1);