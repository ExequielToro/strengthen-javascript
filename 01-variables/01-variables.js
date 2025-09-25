// var

// USAR lowerCamelCase
/*
La primera palabra empieza con minúscula.

Cada palabra siguiente empieza con mayúscula.

No se usan espacios ni guiones bajos.
*/
/*
var helloWorld = " Hello js "
console.log(helloWorld)

var helloWorld = " Hello js de nuevo"
console.log(helloWorld)

 //var tiene alcance (scope) de función,
 //  no de bloque. Esto puede causar errores sutiles:

/* if (true) {
    var x = 10;
}
console.log(x); // 10, aunque esté dentro del if
*/

/*Esto puede generar variables “fugas” fuera del bloque donde no deberían existir.

var también permite re-declarar la misma variable sin error:
*/


// let

/*let helloWorld2 = " Hello js 2 "
console.log(helloWorld2)

helloWorld2 = " Hello js de nuevo 2"
console.log(helloWorld2)


// const

const helloWorld3 = " Hello js 3 "
console.log(helloWorld3) 

//error

//helloWorld3 = " Hello js de nuevo 3"
//console.log(helloWorld3)*/

//mini-saludos

// Declaramos variables
/*var nombre = prompt("Ingresa tu nombre:");   // puede cambiar cada vez que el usuario escribe
let edad = prompt("Ingresa tu edad:");      // let porque puede cambiar
const ciudad = "Santiago";                  // ciudad fija

// Mostramos en consola
console.log("Hola " + nombre + "!");
console.log("Tienes " + edad + " años");
console.log("Vives en " + ciudad);*/


var nombre = prompt("Ingresa tu nombre:");
let edad = prompt("Ingresa tu edad:");
const ciudad = "Santiago";

document.write("Hola " + nombre + "!<br>");
document.write("Tienes " + edad + " años<br>");
document.write("Vives en " + ciudad);
