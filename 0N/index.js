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


let animal ={
    eats: true,
    walk() {
        
    }
};
let rabbit = {
    __proto__: animal
};

rabbit.walk = function(){
    alert("Rabbit! Bounce-bounce!");
};