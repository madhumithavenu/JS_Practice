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

// let animal ={
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

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

let longEar = {
    earlength: 10,
    __proto__: rabbit
};

