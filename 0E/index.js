//Objects in JS
let dog = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,
    'responds to': ['whistle', 'clap', 'throw ball'],
    tag_no: 776
}

let dogColor = dog.color;
console.log(`Color of the Dog is: ${dogColor}`);//Color of the Dog is: Orange
console.log(`The dog is weighing ${dog.weight} Kilos`);//The dog is weighing 18 Kilos

let response = dog['responds to'];
console.log(`My dog responds to ${response}`);//My dog responds to whistle,clap,throw ball
console.log(dog.tag_no);//776

let baby = {
    cat: 'kitten',
    dog: 'puppy',
    kangaroo: 'zoey',
    'horse baby': 'fawn',
    'baby duck': 'duckling',
    'lion': 'cub',
    sheep: 'lamb'
}
console.log(baby); //Prints the whole objects
console.log(baby.cat);//kitten
console.log(baby['horse baby']);//fawn
console.log(baby['baby duck']);//duckling
console.log(baby.lion);//cub

baby.cow = 'Calf';
baby['baby Monkey'] = 'Infants';

delete baby.sheep;
delete baby['baby duck'];

console.log(baby);
/*{
    cat: 'kitten',
    dog: 'puppy',
    kangaroo: 'zoey',
    'horse baby': 'fawn',
    lion: 'cub',
    cow: 'Calf',
    'baby Monkey': 'Infants'
  }*/

//Function Expression as Properties
const actions = {
    sayHello: function () {
        console.log("Hello Everyone");
    },
    sayNamaste: function (person) {
        console.log(`Namaste ${person}, How are you?`);
    },
    add: function (num1, num2) {
        return num1 + num2;
    }
}
actions.sayHello();
actions.sayNamaste('Madhu');
console.log(`Sum of two numbers is : ${actions.add(10, 15)}`);
/* Hello Everyone
Namaste Madhu, How are you?
Sum of two numbers is : 25

Pass By Reference
We can pass an object's reference as an argument of a method call(function call).
this process is known as pass by reference. */

let profile = {
    fullName: 'Balaji KR',
    status: 'Single',
    children: 0,
    parents: ['Rajeevalochana KV', 'Padma Rekha V'],
    salaried: true
}

const modifyName = function (obj, changedName) {
    obj.fullName = changedName;
}
const addChild = (obj) => {
    obj.children = obj.children + 1;
}
modifyName(profile, 'BKR');
console.log(profile);

addChild(profile);
console.log(profile);

//Iterate using for..in
let baby1 = {
    cat: 'kitten',
    dog: 'puppy',
    kangaroo: 'zoey',
    'horse baby': 'fawn',
    'baby duck': 'duckling',
    'lion': 'cub',
    sheep: 'lamb'
}

for (let key in baby1){
    console.log(`Child of ${key} is called: ${baby1[key]}`);
}

//Hybrid objects (Advanced Objects)

let dog1 ={
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,

    hungry(){
        console.log("Wagging the tail");
    },
    getInfo(){
        return `My dog is a ${this.breed}, is ${this.color} in color &weights ${this.weight} kilos`;
    
    }
}
dog1.hungry();
console.log(dog1.getInfo());
/*wagging the tail
My dog is a Golden Retrevier, is Orange in color &weights 18 kilos.*/

//Wrong way of Representing Methods
let dog2 ={
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight1: 18,

    hungry:()=>{
        console.log("Wagging the tail");
    },
    getInfo:()=>{
        return `My dog is a ${this.breed}, is ${this.color} in color &weights ${this.weight} kilos`;
    
    }
}
dog2.hungry();
console.log(dog2.getInfo());
/*Wagging the tail
My dog is a undefined, is undefined in color &weights undefined kilos. 
Arrow Function cannot be used.*/

//Get Methods
let dog3 ={
    _breed: 'Golden Retrevier',
    color: 'Orange',
    _weight: 18,
    get breed(){
        return this._breed;
    },
    get weight(){
        return this._weight
    },

    hungry(){
        console.log("Wagging the tail");
    },
    showInfo(){
        return `My dog is a ${this.breed}, is ${this.color} in color &weights ${this.weight} kilos`;
    }
}
console.log(dog3.breed);
console.log(dog3.weight);
console.log(dog3.color);
dog3.hungry();
console.log(dog3.showInfo());
/* Golden Retrevier
18
Orange
Wagging the tail
My dog is a Golden Retrevier, is Orange in color &weights 18 kilos*/

//Set Methods
let dog4 ={
    _breed: 'Golden Retrevier',
    color: 'Orange',
    _weight: 18,
    get breed(){
        return this._breed;
    },
    get weight(){
        return this._breed;
    },
    set breed(newBreed){
        if(typeof newBreed ==='string'){
            this._breed=newBreed;
        }
    },
    set weight(num){
        if(typeof num ==='number' && num > 0){
            this._weight=num;
        }
        else{
            console.log("Please Enter a valid Number above 0");
        }
    }

}
console.log(`Dog Breed Before: ${dog4.breed}`);
console.log(`Dog Breed Before: ${dog4.weight}`);
console.log(`Dog Breed Before: ${dog4.color}`);

dog4.breed='German Sheperd';
dog4.weight=23;
dog4.color='Blackish Brown';

console.log(`Dog Breed After: ${dog4.breed}`);
console.log(`Dog Breed After: ${dog4.weight}`);
console.log(`Dog Breed After: ${dog4.color}`);
/*Dog Breed Before: Golden Retrevier
Dog Breed Before: Golden Retrevier
Dog Breed Before: Orange
Dog Breed After: German Sheperd
Dog Breed After: German Sheperd
Dog Breed After: Blackish Brown
 */
//Factory
const dogFactory = (breed, weight, color, violent)=>{
    return{
        _breed: 'Golden Retrevier',
        color: 'Orange',
        _weight: 18,
        _violent: violent,

        showInfo(){
            console.log(`My dog is a ${this.breed},
            whose color is ${this.color}
            & it weights ${this.weight} kilos`);

            this._violent ? console.log("It is Ferocius \n") : console.log("It is Sweet \n");;
        }

    }
}
let d1 = dogFactory('Labrador',18,'Orange',false);
d1.showInfo();
const dogKeys = Object.keys(d1);
console.log(dogKeys);
const dogEntries = Object.entries(d1);
console.log(dogEntries);
const modifiedDog = Object.assign({tail: 'Long &Furry', response_time: 2}, d1);
const modEnt = Object.entries(modifiedDog);
console.log(modEnt);


// let d2 = dogFactory('German Sheaperd',22,'black',true)
// d2.showInfo();

// //Using Setter Getter on Factory Objects
// const dogFactory1 = (breed, weight, color, violent)=>{
//     return{
//         _breed: 'Golden Retrevier',
//         _color: 'Orange',
//         _weight: 18,
//         _violent: violent,
//         get breed(){
//             return this._breed;
//         },
//         get weight(){
//             return this._breed;
//         },
//         get color(){
//             return this._color;
//         },
//         get weight(){
//             return this._violent;
//         },
//         set breed(br){
//             if(typeof br ==='string'){
//                 this._breed=br;
//             }
//         },
//         set weight(wei){
//             (typeof wei ==='number' && wei > 0) ?
//                 this._weight = wei : console.log(`Please enter a valid Number`);
//             },
//         set color(col){
//             if(typeof col ==='string') this._color= col; 
//         },
//         set violent(vio){
//             (typeof vio ==='boolean') ?
//                 this._violent = vio : console.log(`Enter a valid Boolean true or false`);
//             },



//         showInfo(){
//             console.log(`My dog is a ${this.breed},
//             whose color is ${this.color}
//             & it weights ${this.weight} kilos`);

//             this._violent ? console.log("It is Ferocius \n") : console.log("It is Sweet \n");;
//         }

//     }

// }
// let d1 = dogFactory1('Labrador',18,'Orange',false);

// const dogKeys = Object.keys(d1);
// console.log(dogKeys);

// const dogEntries = Object.entries(d1);
// console.log(dogEntries);
// const dogKeys = Object.keys(d1);
// console.log(dogKeys);
// let dog5 ={
//     breed: 'Golden Retrevier',
//     color: 'Orange',
//     weight: 18,

//     hungry(){
//         console.log("Wagging the tail");
//     },
//     getInfo(){
//         return `My dog is a ${this.breed}, is ${this.color} in color &weights ${this.weight} kilos`;
    
//     }
// }

//Spread Operator
const profile1={
    firstName : 'Balaji',
    lastName :'KR'
};
const address ={
    country:'India',
    city: 'Bengaluru'
};
const user ={
    ...profile1,
    gender:'male',
    ...address
}
console.log(user);