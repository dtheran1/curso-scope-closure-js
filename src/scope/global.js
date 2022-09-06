//Variables

var a; // declarando

var b = 'b' //Declaramos y asignamos
b = 'bb' //Reasignando la variable

var a = 'aa' //redeclaracion


//Global scope
var fruit = "Apple"; //Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'  //Global 🙄
    console.log(country);
}

countries()
console.log(country); //Colombia