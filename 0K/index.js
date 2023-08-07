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
let balajiBath = function(){
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
setTimeout(balajiBath,7000);