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

//Functions in JS
/* Functions are block of code with the name(identifier),which when invoked performs certain set of operations.
 A function can have various inputs & it will return one output. */

 function sayHello(){
    console.log("Hello Everyone");
 }
 function remindMe(){
    console.log("Water the plants");
 }
 sayHello();
 sayHello();
 sayHello();

 remindMe();
 remindMe();

 //Parameters and Arguments
 /* Inputs Defined at the start of the function is known as Parameters.
 Input values we pass while we invoke the function are known as Argyments. */

 function sayHello(myName){
    console.log("Hello Mr." + myName + "! How are you?");
 }
 function sayNamaste(myName){
    console.log(`Namaste ${myName}! Welcome Home!`);
 }
function areaOfRectangle(length, breath){
    let area = length * breath;
    console.log(`Area of the Rectangle is: ${area}`);
}
function areaOfTriangle(b, h){
    let area = 0.5 * b * h;
    console.log('Area of triangle is:' +area);
}
sayHello('Kishan');
sayNamaste('Seema'); //namaste Seema
areaOfRectangle(20,10); //200
areaOfTriangle(20,30); //300

//Default Arguments
/* While Declaring a function parameters, we can even declare its default values.
In case the user forgets to pass the arguments, default arguments will be considered for processing */

function sayNamaste(myName='Random person'){
    console.log(`Namaste ${myName}! Welcome Home!`);
 }
function areaOfRectangle(length=10, breath=10){
    let area = length * breath;
    console.log(`Area of the Rectangle is: ${area}`);
}
function areaOfTriangle(b=5, h=5){
    let area = 0.5 * b * h;
    console.log('Area of triangle is:' +area);
}

sayNamaste();
areaOfRectangle();//100
areaOfTriangle();// 12.5

//Return Statement
function areaOfRectangle(length=10, breath=10){
    let area = length * breath;
    console.log(`Area of the Rectangle is: ${area}`);
}
function areaOfTriangle(b,h){
    let area =0.5 * b* h;
    return area;
}
areaOfRectangle(15,20);

var triangleArea = areaOfTriangle(10,15);
console.log(triangleArea);

//Helper Functions
// Invoking one function inside another function is a common pratice. Such functions are called Helper Functions.

function mangoWeight(count){
    return count * 0.25;
}
function mangoCost(count){
    return mangoWeight(count)*175;
}

var costOfMangos = mangoCost(25);
console.log(`Cost of 25 mangoes is : Rs.${costOfMangos} only/-`);
console.log("Cost of 35 mangoes is : Rs." + mangoCost(35) + "only/-");
console.log(`Cost of 45 mangoes is : Rs.${mangoCost(45)} only/-`);

//Function Expression(Anonymous Functions)
/* Function Expression is nothing but a function object referred by a variable.
As we dont name anything it is called Anonymous Functions
With this we can transfer the function object to some-other variable &start invoking by that name */

function areaOfTriangle(b,h){
    let area = 0.5 *b*h;
    return area;
}
var triangleArea = function(b,h){
    let area = 0.5 * b *h;
    return area;
}
console.log(`Area using Function: ${areaOfTriangle(10,15)}`);
console.log(`Area using Function Expression: ${triangleArea(10,5)}`);

//Transferring Function Expression

var triangleArea = function (b,h){
    let area = 0.5 *b*h;
    return area;
}

var area = triangleArea;
//triangleArea=null;

console.log(`Using 'area' Variable: ${area(5,7)}`);
console.log(`Using 'triangleArea' Variable: ${triangleArea(5,7)}`);

//Arrow Head Functions
var area = (base, height)=>{
let area = 0.5 *base * height;
return area;
}
var sayHello = ()=>{
    console.log("Hello Everyone");
}
var sayNamaste = myName=>{
    console.log(`Namaste ${myName}! Welcome Home`);
}

console.log(`Area of the Triangle is: ${area(5,8)}`);
sayHello();
sayNamaste("Seema");


var triangleArea =(base, height)=> 0.5 * base * height;
console.log(`Area of the Triangle is: ${triangleArea(5,8)}`);

//Scope
/* {..} demarcates scope in JS.
Variables created inside a method or a if, else if block, or the parameters inside a function(created using let keyword)live &die after the scope ends.
Global Scope are variables created outside any scope, can be accessable till the end of the program.
Local Scope are variables created inside those above mentioned blocks.*/

//Scope of Local Variables(var & let)
for(let j=1;j>5;j++){
    console.log("Hello");
}
console.log(j);