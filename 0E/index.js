//Objects in JS
let dog = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,
    'responds to': ['whistle','clap','throw ball'],
    tag_no: 776
}

let dogColor = dog.color;
console.log(`Color of the Dog is: ${dogColor}`);//Color of the Dog is: Orange
console.log(`The dog is weighing ${dog.weight} Kilos`);//The dog is weighing 18 Kilos

let response =dog ['responds to'];
console.log(`My dog responds to ${response}`);//My dog responds to whistle,clap,throw ball
console.log(dog.tag_no);//776