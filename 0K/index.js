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

const profiles = {
    'balaji':{
        fullname: 'Balaji KR',
        age: 35,
        married: true,
        hobbies: ['Defence','Finance','Foreign Affairs']
    },
    'seema':{
        fullname: 'Seema H',
        age: 30,
        married: true,
        hobbies: ['Cooking','Painting','Art & Crafts']
    },
    'kishen':{
        fullname: 'Kishen KB',
        age: 3,
        married: false,
        hobbies: ['football','Video games']
    },
    'rajeev':{
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

//Stage-1

/* function goToHell(pros){
    setTimeout((objs)=>{
        let keys = Object.keys(objs);
        console.log(keys);
    },2000,pros);
}
 goToHell(profiles); */

//Stage-2
function goToHell(pros){
    setTimeout((objs)=>{
        let keys = Object.keys(objs);
        console.log(keys);
        setTimeout((key,objs)=>{
            console.log(objs[key]);
        },3000, 'kishen',objs)
    },2000,pros);
}
 goToHell(profiles);
