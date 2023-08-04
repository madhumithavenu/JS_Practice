import { celsiusToFahrenheit, fahrenhietToCelsius } from "./converters-es6.js";

const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click',clickMe);

function clickMe(){
    let element = document.getElementById("container");
    element.innerHTML= `<h1>Boiling Point is : ${celsiusToFahrenheit(100)}
    & Freezing Point is : ${celsiusToFahrenheit(0)}</h1>
    <h2>Human Body Temperature is : ${fahrenhietToCelsius(98.6)} celsius`;
}

console.log(`Water Boiling point is ${celsiusToFahrenheit(100)} Degree Fahrenhiet`);