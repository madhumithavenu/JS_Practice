//An Inheritence tree defines the hirarchy for the given Entities.
//Entities below inherit all the properties & characterstics from entities above.

// class Alpha{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     showAlpha(){
//         console.log("Value of x :"+ this.x);
//         console.log("Value of y :"+ this.y);
//     }
// }
// class Beta extends Alpha{
//     constructor(x,y,z){
//         super(x,y);
//         this.z =z;
//     }
//     showBeta(){
//         console.log("Value of x :"+ this.x);
//         console.log("Value of y :"+ this.y);
//         console.log("Value of z :"+ this.z);
//     }
//     sum(){
//         return this.x + this.y + this.z;
//     }
// }
// let a = new Alpha(10,20);
// a.showAlpha();

// let b = new Beta(1,2,3);
// b.showBeta();
// console.log(`Sum of the object number is ${b.sum()}`);

/* Inheritance is a concept of inheriting properties(Members) of super class inside subclass.
A subclass inherits all the properties(Members) of a super class by extending it, using an 'extends' keyword.
A super class object contains only the members of super class (Alpha a = new Alpha();).
A subclass object contains both super class members and subclass members (Beta b = new Beta();).

Suppose we do not want to create an instance every time to invoke a method, we mark that method as static.
Static methods can be accessed only using class name & not by any reference variables (Unlike*/

class Alpha {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showAlpha() {
        console.log("Value of x :" + this.x);
        console.log("Value of y :" + this.y);
    }
    static sayHello(){
        console.log(`Hello Everyone!!`);
    }
}
class Beta extends Alpha {
    static sayNamaste(person){
        console.log(`Namaste ${person}, welcome to India`);
    }

    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
   
    showBeta() {
        console.log("Value of x :" + this.x);
        console.log("Value of y :" + this.y);
        console.log("Value of z :" + this.z);
    }
    sum() {
        return this.x + this.y + this.z;
    }
}
let a = new Alpha(10, 20);
a.showAlpha();

let b = new Beta(1, 2, 3);
b.showBeta();
console.log(`Sum of the object number is ${b.sum()}`);
Alpha.sayHello();
Beta.sayNamaste('Seema');