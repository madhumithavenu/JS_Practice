/* Node Environment-vs-Browser Environment
The node runtime environment and the module.exports and require() syntax.
The browser's runtime environment and the ES6 we use import/export syntax. */


/*function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

function fahrenhietToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

export { celsiusToFahrenheit, fahrenhietToCelsius }; */

export function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

export function fahrenhietToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

const milliToCenti = (millimeter)=>{
    return millimeter / 10;
}

const centiToMeter = (centimeter)=>{
    return centimeter * 100;
}
const nanoMeter = 0.000000001;

export default nanoMeter;

export{ milliToCenti, centiToMeter};
