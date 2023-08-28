'use strict'

//Parametros Rest y Spread

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Manzana", "Naranja", "Uva", "Tuna", "Melon", "Coco", "Fresa");

var frutas = ["Manzana", "Naranja"];
listadoFrutas(...frutas, "Uva", "Tuna", "Melon", "Coco", "Fresa");