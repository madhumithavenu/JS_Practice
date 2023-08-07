/* let balajiBath = function(){
    console.log(`\n Balaji Woke Up`);
    console.log(`Balaji is Bathing`);
    console.log(`Balaji is Ready`);
}
let kishenBath = function(){
    console.log(`\n Kishen Woke up`);
    console.log(` Kishen is Bathing`);
    console.log(` Kishen is Ready`);
}
// balajiBath();
// kishenBath();
kishenBath();
balajiBath(); */

//Mentos Zindagi
/*let balajiBath = function(){
    console.log(`\n Balaji Woke Up`);
    console.log(`Balaji is Bathing`);
    console.log(`Balaji is Ready`);
}
let kishenBath = function(){
    setTimeout(() => {console.log(`\n Kishen Woke up`)},2000);
    setTimeout(() => {console.log(` Kishen is Bathing`)},3000);
    setTimeout(() => {console.log(` Kishen is Ready`)},5000);
}
kishenBath();
balajiBath(); 

/*let balajiBath = function(){
    console.log(`\n Balaji Woke Up`);
    console.log(`Balaji is Bathing`);
    console.log(`Balaji is Ready`);
}
let kishenBath = function(){
    setTimeout(() => {console.log(`\n Kishen Woke up`)},2000);
    setTimeout(() => {console.log(` Kishen is Bathing`)},3000);
    setTimeout(() => {console.log(` Kishen is Ready`)},5000);
    setTimeout(balajiBath,7000);
}
kishenBath(balajiBath); 

Why Call Back Function.
JS is an event driven language.
Instead of waiting for a response from a pending event, before moving on, JS will keep executing other events.
In the meantime JS will keep a watch on previous pending events, and will execute the same at an appropriate time.

Callback Function are a way to make sure certain code doesn't execute until other code has already finished execution.

In Asynchronous programming language like a JS: Callback function are absolutely necessity. *.

*/

// const profiles = {
//     'balaji': {
//         fullname: 'Balaji KR',
//         age: 35,
//         married: true,
//         hobbies: ['Defence', 'Finance', 'Foreign Affairs']
//     },
//     'seema': {
//         fullname: 'Seema H',
//         age: 30,
//         married: true,
//         hobbies: ['Cooking', 'Painting', 'Art & Crafts']
//     },
//     'kishen': {
//         fullname: 'Kishen KB',
//         age: 3,
//         married: false,
//         hobbies: ['football', 'Video games']
//     },
//     'rajeev': {
//         fullname: 'Rajeevalochana KV',
//         age: 70,
//         married: true,
//         hobbies: ['Watching TV']
//     }
// }


// /* Requirement:
// 1. Display keys of all profile after 2 seconds.
// 2. Display profile of 'kishen' after 3 seconds (from one).
// 3. Display kishen's age after 2 seconds(from two).
// 4. Display kishen's Hobbies after 4 seconds (from three). */

//Stage-1

/* function goToHell(pros){
    setTimeout((objs)=>{
        let keys = Object.keys(objs);
        console.log(keys);
    },2000,pros);
}
 goToHell(profiles); */

//Stage-2
function goToHell(pros) {
    setTimeout((objs) => {
        let keys = Object.keys(objs);
        console.log(keys);
        setTimeout((key, objs) => {
            console.log(objs[key]);

            setTimeout((sub) => {
                console.log(`Age of Kishen is: ${sub.age}`);
                setTimeout((sub) => {
                    console.log(`Hobbies of Kishen are: ${sub.hobbies}`);
                }, 4000, sub);
            }, 2000, objs['kishen']);
        }, 3000, 'kishen', objs);
    }, 2000, pros);
}
goToHell(profiles);

/* Promises in JS
Promises in JS are used to handle Asynchronous Operations.
A promise is an object that keep track about whether a certain event has happened already or not.
It also determines what will happen after the event.
Promises has three stages: Pending, Completed, Rejected. */

/*const bringChocolates = function(){
   let didIBringTheChocolates = false;
   // console.log("Getting ready to go to market");
   // console.log("Booking a cab to the store");
   // console.log("Selecting the chocolate");
   // console.log("Watching the payment");

   didIBringTheChocolates = false;

   if(didIBringTheChocolates==true){
       console.log(`Kishen says: Thank you appa!!`);
   }
   else{
       console.log(`Kishen is crying: I hate you!!`);
   }
}
bringChocolates();
 
Handling Promises
Promises have a structured way to handle different condition.
Plain if/else condition does not give us the ability to handle yhings in a structured way.
If promises carefully executed: resolve() method is executed.
If promises have failed in executing : reject() method will be executed.
In the meantime the browser will be continuing other work pending in its hands.

To create a promise we write:
let anyPromise = new Promise(resolve, reject);

To execute a promise we write:
anyPromise.then(resolve-fun).catch(reject-fun);
 
*/

const bringChocolates = function (resolve, reject) {
    let didIBringTheChocolates = false;
    setTimeout(() => { console.log("Getting ready to go to market") }, 2000);
    setTimeout(() => { console.log("Booking a cab to the store") }, 4000);
    setTimeout(() => { console.log("Selecting the chocolate") }, 6000);
    setTimeout(() => { console.log("Making the payment") }, 8000);

    setTimeout(() => {
        didIBringTheChocolates = true;

        if (didIBringTheChocolates == true) {
            resolve();
        }
        else {
            reject();
        }

    },12000);
}

function eatTheChocolates(){
    console.log(`Kishen says: Thank you appa!!`);
}

function cryInCorner(){
    console.log(`Kishen is crying: I hate you`);
}

let iPromiseToBringChocolates = new Promise(bringChocolates);
iPromiseToBringChocolates.then(eatTheChocolates).catch(cryInCorner);


const profiles = {
    'balaji': {
        fullname: 'Balaji KR',
        age: 35,
        married: true,
        hobbies: ['Defence', 'Finance', 'Foreign Affairs']
    },
    'seema': {
        fullname: 'Seema H',
        age: 30,
        married: true,
        hobbies: ['Cooking', 'Painting', 'Art & Crafts']
    },
    'kishen': {
        fullname: 'Kishen KB',
        age: 3,
        married: false,
        hobbies: ['football', 'Video games']
    },
    'rajeev': {
        fullname: 'Rajeevalochana KV',
        age: 70,
        married: true,
        hobbies: ['Watching TV']
    }
}


/* Requirement:
1. Display keys of all profile after 2 seconds.
2. Display profile of 'kishen' after 3 seconds (from one).
3. Display kishen's age after 2 seconds(from two).
4. Display kishen's Hobbies after 4 seconds (from three). */

let goToHell = new Promise(keysPromiseFunction);//Creating new Promise

function keysPromiseFunction(resolve,reject){
    //Callback Function for Promises
    setTimeout((objs)=>{
        let keys = Object.keys(objs);
        (keys.length > 0)?
        resolve(keys) :
        reject(`Error while Parsing keys from Object`);
    },2000, profiles);
}

function displayKeys(keys){
    //Callback Function for Resolve
    console.log(keys);
}

function error(msg){
    //Callback Function for Reject
    console.log(msg);
}
goToHell.then(displayKeys).catch(error);//Envoking the promise