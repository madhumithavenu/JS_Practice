//Arrays & Loops
/* Arrays are data structures in Javascript which will help store values of same data-type in other languages, but multiple objects in Javascript */
// let southasia =['India','Pakistan','Bangladesh'];
// console.log(southasia);

let southasia=[];
southasia [0] = 'India';
southasia [1] = 'Pakistan';
southasia [2] = 'Bangladesh';
console.log(southasia);

//Accessing Arrays
let southeastAsia = ['India','Pakistan','Bangladesh','Buthan','Burma','Nepal','Loas','Combodia','Vietnam'];
southeastAsia[4]='Mayanmar';
console.log("Burma's name has been changed to"+ southeastAsia[4]+ "recently");

let topEconomy = southeastAsia[0];
console.log(`Richest Economy in South Asia is  ${topEconomy}!!`);

console.log(`If we try to access an array out of index we get :${southeastAsia} `);

//Const Arrays
/* Const Arrays can be altered from the inside. We can add new element using Arrays.push() method.
But we cannot assign the variable to some-other array or a random value.This will result in the error */

const northAmerica =['Canada','United States of America','Mexico'];

northAmerica[1] = 'USA';
console.log(northAmerica);

northAmerica.push('Panama');
console.log(northAmerica);

northAmerica = ['Colombia','Berazil'];

//Lengtth Variable
let southAsia = ['India','Pakistan','bangladesh'];
let southeastAsia = ['India','Pakistan','Bangladesh','Buthan','Burma','Nepal'];

console.log(southAsia.length);
console.log(southeastAsia.length);

let str = 'My name is Antony Gonsalvis';
console.log(str.length);

//Push| Pop
/* push() & pop() methods are used to add & remove elements to an array from the end(to the end). */

let nato =['USA','UK','Germany','Canada','France','Italy','Turkey'];

nato.push('Romania','Greece','latvia','Lithuania','Estonia');
console.log(nato); /* [
    'USA',       'UK',
    'Germany',   'Canada',
    'France',    'Italy',
    'Turkey',    'Romania',
    'Greece',    'latvia',
    'Lithuania', 'Estonia'
  ] */


nato.pop();
nato.pop();
nato.pop();
console.log(nato); /*[
    'USA',     'UK',
    'Germany', 'Canada',
    'France',  'Italy',
    'Turkey',  'Romania',
    'Greece'
  ] */
//Unshift | Shift
/* unshift() & shift() methods are used to add & remove elements to an array from the start (to the start)*/
nato.unshift('Ukraine','Finland','Poland');
console.log(nato);

nato.shift();
nato.shift();
console.log(nato);