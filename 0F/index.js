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
let printName = function () { 
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
printName.call(personTwo);