//An Inheritence tree defines the hirarchy for the given Entities.
//Entities below inherit all the properties & characterstics from entities above.

class Alpha{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    showAlpha(){
        console.log("Value of x :"+ this.x);
        console.log("Value of y :"+ this.y);
    }
}
class Beta extends Alpha{
    constructor(x,y,z){
        super(x,y);
        this.z =z;
    }
    showBeta(){
        console.log("Value of x :"+ this.x);
        console.log("Value of y :"+ this.y);
        console.log("Value of z :"+ this.z);
    }
    sum(){
        return this.x + this.y + this.z;
    }
}
let a = new Alpha(10,20);
a.showAlpha();

let b = new Beta(1,2,3);
b.showBeta();
console.log(`Sum of the object number is ${b.sum()}`);