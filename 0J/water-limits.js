// function celsiusToFahrenheit(celsius){
//     return celsius * (9 / 5) + 32;
// }

const {celsiusToFahrenheit} = require('./converters');

const freezingPointF =celsiusToFahrenheit(0);
const boilingPointF = celsiusToFahrenheit(100);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);