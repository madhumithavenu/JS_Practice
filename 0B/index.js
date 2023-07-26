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
// let myName = '';
// let person =myName || 'Nobody';
// console.log(`you know, ${person} is a good girl`);

// let myName = 'Madhu';
// let person =myName && 'Nobody';
// console.log(`you know, ${person} is a good girl`);

//Ternary Operator
/* Ternary Operator checks the condition at first.
If the condition results in true: It executes the middle (left) statement.
If the condition results in false: It executes the last (right) statement.
Eg: var c = (condition) ? 55 : 65; */

var c = (55>7) ? 55 : 65;
console.log(c);

let condition=false;
(condition)? (console.log("First statement")):(console.log("Second Statement"));

//Switch Case
let position =' ';
switch(position){
    case 'First Place':

        console.log("You will get Gold Medal");
        break;
    case 'Second Place':

        console.log("You will get Silver Medal");
            break;
    case 'Third Place':

        console.log("You will get Bronze Medal");
                break;
    default:
        console.log("Baba ji ka Thullu");
        break;
}