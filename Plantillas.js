'use strict'

//plantillas de texto

var nombre = prompt("Escribr un nombre");
var apellidos = prompt("Escribe tus apellidos");

 //var texto = "Mi nombre es: "+nombre+" <br/> Mis apellios son:" +apellidos;

 var texto = `
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mi apellido son: ${apellidos}</h3>
 `;

document.write(texto);