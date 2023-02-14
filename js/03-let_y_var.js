'use strict'

//pruebas coon let y var

//prueba con var
var numero = 40;
console.log(numero) // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}


console.log(numero);

//´prueba con let

let texto = "Curso de JS con David";
console.log(texto); //valor es el mismo

if(true){
    let texto = "Este es un nuevo curso";
    console.log(texto); //el valor es el de arriba
}

console.log(texto); // valor curso JS