'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre y se puede guardar dentro de una variable
//Se utiliza para hacer un callback(una funcion que se ejecuta una dentro de otra)

function suma(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

/*


suma(4,6, function(dato){
    console.log("La suma es:"+ dato);
},function(dato){
    console.log("La suma por dos es:", (dato * 2));
});

*/
//Las funciones por flecha igual se pueden sustituir por este simbolo => y es exacatamente igual que declarar una funcion

suma(4,6, dato =>{
    console.log("La suma es:"+ dato);
},
dato =>{
    console.log("La suma por dos es:", (dato * 2));
});


 