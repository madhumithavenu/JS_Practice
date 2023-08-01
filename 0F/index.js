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
let personOne ={
    firstname: 'Madhu',
    lastname: 'Mitha',

    printName(){
        console.log(this.firstname+ "" + this.lastname);
    }
}

let personTwo ={
    firstname: "Sachin",
    lastname: "Tendulkar",
}
personOne.printName.call(personTwo);