/*let personOne ={
   firstname: 'Madhu',
   lastname: 'Mitha',

   printName(){
       console.log(this.firstname+ "" + this.lastname);
   }
}

let personTwo ={
   firstname: "Sachin",
   lastname: "Tendulkar",
   printName(){
       console.log(this.firstname+ "" + this.lastname);
   }
}
personOne.printName();//MadhuMitha
personTwo.printName();//SachinTendulkar */

//Function Barrowing
// let personOne ={
//     firstname: 'Madhu',
//     lastname: 'Mitha',

//     printName(){
//         console.log(this.firstname+ "" + this.lastname);
//     }
// }

// let personTwo ={
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }
// personOne.printName.call(personTwo);//SachinTendulkar

// Approach 2(Aam Zindagi)
// let printName = function (obj) { 
//     console.log(obj.firstname+ " "+obj.lastname);
// }

// let personOne = {
//     firstname: 'Madhu',
//     lastname: 'Mitha',
// }

// let personTwo = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }
// printName(personOne);
// printName(personTwo);

//Approach 2(Mentos Zindagi)
 /* let printName = function () { 
    console.log(this.firstname+ " "+this.lastname);
}

let personOne = {
    firstname: 'Madhu',
    lastname: 'Mitha',
}

let personTwo = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}
printName.call(personOne);
printName.call(personTwo); */

//Approach 3(Mentos Zindagi)
/* let personOne = {
    firstname: 'Madhu',
    lastname: 'Mitha',
}

let personTwo = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}
let printName = function(hometown ,state){
    console.log(` \n ${this.firstname} ${this.lastname}
    From ${hometown}, ${state}`);
}
printName.call(personOne, 'Bengaluru', 'karnataka');
printName.call(personTwo,'Mumbai'); */

//Using Apply Method 
 /* let personOne = {
    firstname: 'Madhu',
    lastname: 'Mitha',
}

let personTwo = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}
let printName = function(hometown ,state){
    console.log(` \n ${this.firstname} ${this.lastname}
    From ${hometown}, ${state}`);
}
printName.call(personOne, ['Bengaluru', 'karnataka']);
printName.call(personTwo,['Mumbai']);
Madhu Mitha
    From Bengaluru,karnataka, undefined
 
 Sachin Tendulkar
    From Mumbai, undefined */

/* call & Apply
call () method is using 'pass by reference' as we pass the object on which the method is to be called(with some additional parameters: comma seperated)
apply() method is using 'pass by reference' as we pass the object on which the method is to be caled(with some additional parameter as an array.) 

Bind Method
bind() method returns a Function, but binds the function to the object & arguments we are passing (and keeps it ready.)
To invoke it , we have to exclusively use the call() method (if of the same line.)
-or- invoke it by using a parenthesis in the consecutive line,by accepting the return of the function object(returned by the bind method).*/

/*let personOne = {
    firstname: 'Madhu',
    lastname: 'Mitha',
}

let personTwo = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}
let printName = function(hometown ,state){
    console.log(` \n ${this.firstname} ${this.lastname}
    From ${hometown}, ${state}`);
}
let f1 = printName.bind(personOne, 'Bengaluru', 'karnataka');
let f2 = printName.bind(personTwo,'Mumbai');

console.log(f1);
console.log(f2);
f1();
f2();*/

//Bind Function Execution (Using call method)
let personOne = {
    firstname: 'Madhu',
    lastname: 'Mitha',
}

let personTwo = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}
let printName = function(hometown ,state){
    console.log(` \n ${this.firstname} ${this.lastname}
    From ${hometown}, ${state}`);
}
let f1 = printName.bind(personOne, 'Bengaluru', 'karnataka').call();
let f2 = printName.bind(personTwo,'Mumbai').call();
