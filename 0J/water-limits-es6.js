 import { celsiusToFahrenheit, fahrenhietToCelsius } from "./converters-es6.js";
import { milliToCenti, centiToMeter } from "./converters-es6.js";
import nano from './converters-es6.js'; 

// import * as resource from './converters-es6.js';

const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click',clickMe);

function clickMe(){
    let element = document.getElementById("container");
    element.innerHTML= `<h1>Boiling Point is : ${celsiusToFahrenheit(100)}
    & Freezing Point is : ${celsiusToFahrenheit(0)} <br><br>
    Human Body Temperature is: ${fahrenhietToCelsius(98.6)} celsius<br><br>
    100 milli meters is ${milliToCenti(100)} centi-meters, <br><br>
    10000 centi meters is ${centiToMeter(10000)} meters,<br> <br>
    One nanometers is ${nano} meters.
    </h1>`;
}

console.log(`Water Boiling point is ${celsiusToFahrenheit(100)} Degree Fahrenhiet`);