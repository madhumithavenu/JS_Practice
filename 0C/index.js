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