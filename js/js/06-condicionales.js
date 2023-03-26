'use strict'

//condiconales if
// es una estructura de control o unas instrucciones que nos van a permitir comparar algo
// Si A = B haz algo


var edad = 18;
var nombre = "Alexis Vega";

if(edad => 18){
    console.log(nombre + " "+ "Es mayor de edad");
}else{
    console.log(nombre + ""+ "Eres menor de edad");
}

/*
Operadores Logicos
//AND (Y): &&
OR(O): ||
NEGACION: !
*/
var year = 2018;
//negacion

if(year != 2016){
    console.log("El año no es 2023, realmente es: " +year);
}

//AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era acutal");
}else{
    console.log("Estamos en la era moderna");
}

//OR
if(year == 2008 || year >= 2018 && year == 2020){
    console.log("Estamos en el año incorrecto");
}else{
    console.log("No es el año correcto");
}


/*
var edad1 = 10;
var edad2 = 12;

//Si pasa esto
if(edad1 > edad2){
    //Ejecuta esto
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

*/