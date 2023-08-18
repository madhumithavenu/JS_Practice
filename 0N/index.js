// let arr = ['Balaji', 'Seema'];

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

// rabbit.__proto__ = animal;

