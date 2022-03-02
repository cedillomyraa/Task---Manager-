//object literal: easy but not reusable you will need to retype everything 
function object(){
    let d1 = {
        name:"Fido",
    age: 3
};
        
};
object(); //calling the function


function Dog(name,age){
    this.name=name;
    this.age=age;
}
//object constructor: will need a function the one above
let d3= new Dog("Dude", 1);
let d4= new Dog("Lola", 3)

class Cat{
    //aouto called when creating obj.
    constructor(name,age,color){
        this.name=name;
        this.age=age;
        this.color=color;
    }
}
//classes way to display on html ex. class above below are your peramiters
let c1 = new Cat("Taco", 3, "blue");
let c2 = new Cat("Sushi", 5, "pink");
console.log(c1,c2);