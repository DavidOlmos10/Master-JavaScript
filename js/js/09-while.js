'use strict'

//Blucw while
//Se comprueba una condicion y despues se ejcuta un bucle 
//Es un bluce indefenido
 
var year = 2018;

/*
while( year <= 2051){
    //Ejecuta eso
    console.log("Estamos enn el año:" + year);
    
    year ++;
}

*/

while(year != 1991){
    console.log("Este es el año: " +year);

    if(year = 2000){
        break;
    }

    year --;
}

//Do While
var year = 30;

do{
    alert("Solo cuando sea diferente a 20");
    year --;
}while(year > 25)