'use strict'

//Transformacion de textos o cadenas

var numero = 444;
var texto1 = "Esto es una prueba con David";
var texto2 = "Es un muy buen curso";

/*

//Convertimos el numero a un String
 var dato = numero.toString();
 //Vamos a convertir el texto a mayusculas
    // dato = texto1.toUpperCase();
    // console.log(dato);
 //Vamos a convertir el texto a minusculas
    dato = texto2.toLowerCase();
  //  console.log(dato);
  // console.log( typeof dato);
  

  // Calcular longitud

  var nombre = "David Olmos";

 // console.log(nombre.length);

  // Concatenar = unir textos

 // var textoTotal = texto1 + " " +texto2;
 var textoTotal = texto1.concat(" "+ texto2);
  console.log(textoTotal);

  //Meteodos de busquedas
  // cahrAt: sirve para sacar una letra en concreto
  //Startswith: Con este metodo podemos buscar un texto
  //Includes: Este metodo sirve para buscar una palabra
    
      var busqueda = texto1.indexOf("prueba");
     console.log(busqueda);
    

    var busqueda = texto1.includes("David");
    console.log(busqueda);

*/

//Metodo de remplazo
// Split: Recortar las palabras y meterlas en un array
// trim: Recortar los espacios por delante o por detras que tenga el string
var busqueda = texto1.trim();
console.log(busqueda);

  