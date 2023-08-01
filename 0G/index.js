/* This Keyword
'this' keyword in java/javascript is used to eliminate conflict between local variables and object level variables.
'this' keyword always holds the reference of currently Executing Objects*/

//Creating Objects
class Dog {
    constructor(breed, weight, color, violent) {
        this._breed = breed;
        this._weight = weight;
        this._color = color;
        this._violent = violent;
    }
    showInfo() {
        console.log(`My Dog is a ${this._breed},
        whose color is ${this._color}
        & it weights ${this._weight} kilos`);
        this._violent ? console.log("It is Ferocius \n") : console.log("It is Sweet \n");
    }
    get breed() {
        return this._breed;
    }
    get weight() {
        return this._weight;
    }
    get color() {
        return this._color;
    }
    get violent() {
        return this._violent;
    }
    set breed(newBreed) {
        if (typeof newBreed === 'string') {
            this._breed = newBreed;
        }
    }
    set color(newColor) {
        if (typeof newColor === 'string') {
            this._color = newColor;
        }
    }
    set weight(num) {
        if (typeof num === 'string' && num > 0) {
            this._weight = num;
        }
        else {
            console.log("Plese enter a valid Number above 0");
        }
    }
    set violent(nature) {
        if (typeof nature === 'boolean') {
            this._violent = nature;
        }
    }
}

let d1 = new Dog('Golden Retriever', 18,'Orange', false);
let d2 = new Dog('Alsetion', 12,'Black', true);
let d3 = new Dog('Rotwiler', 15,'Brown', true);
let d4 = new Dog('Labrador', 14,'Cream', false);

d1.showInfo();
d2.showInfo();
d3.showInfo();
d4.showInfo();