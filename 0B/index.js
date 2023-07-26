//Conditions and functions
// In javascript 'if','else if','else' are the conditional Statements

// let flag = true;
// if (flag) {
//     console.log("Salute, Salute, Salute");
// }



//Non-Boolean inside IF condition
/*  if we are using non-boolean values as a condition in IF:
    a) For Number: 0 is considered as false.
    b) Any other number is considered as false.
    c) For String '',"",null are considered as false.
    d) Any undefined or null or NaN(not a number) will be considered as false.*/

let flag = 55.5;
if(flag){
    console.log("Flag is Truthy");
}
else{
    console.log("Flag is Falsy");
}

// Short-Circuit Assignment
let myName = '';
let person =myName || 'Nobody';
console.log(`you know, ${person} is a good girl`);