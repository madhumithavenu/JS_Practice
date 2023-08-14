/* Events & JSON
String is a representation of a information in character setInterval.applyThe below represents a string common in any computer language(Enclosed with Quotes).

Eg: "Hello World" //String
    'Amar 101 90' //String

If we expand the same string to some readable format:
'name= Amar id= 101 score= 90'  //String

In Javascript we can represent this string with a clear format: */

let str = `{name: 'Amar' , id:101 , score: 90}`  //String Json 
console.log(str.id);  //undefined

/* JS Object Notation
The above code will run but if we try to access values using dot operator it says undefined.
Please note variable 'str' is a plain string. To access values we need to represent it as JS Object Notation.*/

let obj = {
    name: 'Amar',
    id: 101,
    score: 90
}
console.log(obj.id); //101