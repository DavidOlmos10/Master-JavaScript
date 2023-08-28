'use strict'


/*

//Funciones
//Es una agrupacion de instrucciones, las cuales tienen un nombre en concreto y tienen como tal una tarea
// que se ejecutara cuando la mandes a llamar

//Se define la funcion
function calculadora(){
   
    //Conjunto de instrucciones 
    console.log("Hola soy la calculadora");
    console.log("si soy yo");
   return "Hola, soy la calculadora";  // Con la palabara return regresa un valor 
    
}

//Mandar a llamar la funcion

var resultado = calculadora();

console.log(resultado);

*/

//Parametros
//Creamos los parametros num1 y num 2 dentro de la funcion calculadora

/*

function calculadora(numero1, numero2){

    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("*****************************************");

   // return "Hola, soy la calculadora";  // Con la palabara return regresa un valor 
    
}

//Mandamos a llamar a los parametros dentro de la funcion calculadora
//Le asiganmos dos valores distintos a los parametros ya creados
//calculadora(12,8);
//calculadora(98,2);



for(var i = 1; i <=10; i++){
    console.log(i);
    calculadora(i, 8);
}

*/

/*

//Parametros Opcionales
//Son aquellos parametros que no son obligatorios pasar ningun resultado

function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("*****************************************");
    }else{
         document.write("Suma: "+(numero1+numero2)+"<br/>");
         document.write("Resta: "+(numero1-numero2)+"<br/>");
         document.write("Multiplicacion: "+(numero1*numero2)+"<br/>");
         document.write("Division: "+(numero1/numero2)+"<br/>");
         document.write("*****************************************");
    }

   // return "Hola, soy la calculadora";  // Con la palabara return regresa un valor 
    
}

calculadora(1,4);
calculadora(2,5,true);
*/

//Funciones dentro de otras funciones

//Creamos 2 nuevas funciones, una llamada porConsola y otra llamada porPantalla

function porConsola(numero1, numero2){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("*****************************************");
}

function porPantalla(numero1, numero2){
    document.write("Suma: "+(numero1+numero2)+"<br/>");
    document.write("Resta: "+(numero1-numero2)+"<br/>");
    document.write("Multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("Division: "+(numero1/numero2)+"<br/>");
    document.write("*****************************************");
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }

    return true;
}

calculadora(1,4);
calculadora(2,5,true)
calculadora(4,5,true);