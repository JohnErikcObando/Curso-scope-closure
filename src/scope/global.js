// variables

var a; //declarando
var b = 'b'; //declarar y asignamos
b = 'bb'; //reasignar
var a = 'aa'; //redeclaracion


// Global Scope
var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// -------------------------------------

function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);

