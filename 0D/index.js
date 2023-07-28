//Higher Order Functions
const addTwoNumbers =(a, b)=>{
    console.log(`Sum of the two numbers: ${a + b}`);
}
addTwoNumbers(7,8);

let addMethod = addTwoNumbers;

addTwoNumbers(5 ,6);// Invoking Method using Variable 1
addMethod(5, 6); //Invoking Method  using Variable 2

//Prnting Function Name
console.log(addTwoNumbers);
console.log(addMethod);
console.log(addTwoNumbers.name);
console.log(addMethod.name);