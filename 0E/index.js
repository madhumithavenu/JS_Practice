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