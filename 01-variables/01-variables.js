// var

// USAR lowerCamelCase
/*
La primera palabra empieza con minúscula.

Cada palabra siguiente empieza con mayúscula.

No se usan espacios ni guiones bajos.
*/

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


// const