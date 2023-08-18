// let arr = ['Balaji', 'Seema'];

//EXAMPLE 1

// let animal ={
//     eats: true  
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal;


//EXAMPLE 2
/*
let animal ={
    eats: true,
    walk() {
        alert("Animal walk");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {    //EXAMPLE 3
    earlength: 10,
    __proto__: rabbit
}; */


// let animal ={
//     eats: true,
//     walk() {
//         //This method won't be used by rabbit .
//     }
// };
// let rabbit = {
//     __proto__: animal
// };

 /* rabbit.walk = function(){
    alert("Rabbit! Bounce-bounce!");
};

let user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },
    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

let father = {
    name: "Sanjay",
    city: "Shimla",
    showInfo: function(){
        console.log(`My name is ${this.name} from ${this.city}`);
    }
    /* showInfo(){
        console.log(`My name is ${this.name} from ${this.city}`);
    }
}

let son = {
    name: "Sagan"
}
son.__proto__ = father;    
*/



let animal ={
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};



for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

if (isOwn) {
    alert(`Our: ${prop}`);
} else{
    alert(`Inherited: ${prop}`);
}
}
undefined