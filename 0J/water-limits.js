// function celsiusToFahrenheit(celsius){
//     return celsius * (9 / 5) + 32;
// }

const converters = require('./converters');

const freezingPointF = converters.celsiusToFahrenheit(0);
const boilingPointF = converters.celsiusToFahrenheit(100);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);