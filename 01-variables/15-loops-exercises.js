// Nota: Explora diferentes sintaxis de bucles para resolver los ejercicios

//1. Crea un bucle que imprima los nùmeros del 1 al 20

for (let i = 1; i < 21; i++) {
    console.log(`${i}`) 

}

//2. Crea un bucle que sume todos los nùmeros del 1 al 100 y muestre el resultado

let i = 0
while (i < 101) {
    console.log(`resultado=${i}`)
    i++
}

//3. Crea un bucle que imprime todos los nùmeros pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*Explicación técnica

for (let i = 1; i <= 50; i++)

Inicializa i en 1.

El ciclo se ejecuta mientras i sea menor o igual a 50.

i++ incrementa el contador en 1 en cada iteración.

i % 2 === 0

El operador módulo (%) devuelve el resto de la división.

Si un número dividido por 2 tiene resto 0, significa que es par.

console.log(i)

Imprime el número en la consola */


//4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const mySet = new Set(["pablo", "Toro", "Estrella", "pepe", "Toño"])

for ( let valor of mySet){
    console.log(valor)
}

//5. Escribe un bucle que cuente el nùmero de vocales en una cadena de texto

myString = " ¡ Hola, Mundo !"

for (let  valor of myString){
    console.log(valor)
}

// ------------------------------------

let texto = "Diviertiendome un rato";

let contador = 0;
let vocales = "aeiouAEIOU";

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contador++;
    }
}

console.log("Número de vocales:", contador);

/*Explicación

texto: es la cadena que vamos a analizar.

contador: variable que guarda cuántas vocales encontramos.

vocales: string que contiene todas las vocales (minúsculas y mayúsculas).

for: recorre cada posición del texto usando texto.length.

includes(): verifica si el carácter actual es una vocal.

Si es vocal → incrementa contador*/

//6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [2, 3, 4, 5];
let producto = 1;

for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}

console.log("El producto es:", producto);

/*Explicación

numeros → Array con los números.

producto = 1 → Se inicia en 1 porque es el elemento neutro de la multiplicación.

for → Recorre todo el arreglo usando numeros.length.

producto *= numeros[i] → Multiplica el valor acumulado por cada número del array.

console.log → Muestra el resultado final.*/

/*1 × 2 = 2
2 × 3 = 6
6 × 4 = 24
24 × 5 = 120*/

let numerosa = [2, 3, 4, 5];

let productoo = numerosa.reduce(function(acumulador, numero) {
    return acumulador * numero;
}, 1);

console.log("El productooo es::::", productoo);



//7. Escribe un bucle que imprima la tabla de multiplicar de 5

let numero = 5;

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}

//8. Usa un bucle para invertir una cadena de texto

let textoo = "Hola";
let textoInvertido = "";

for (let i = textoo.length - 1; i >= 0; i--) {
    textoInvertido += textoo[i];
}

console.log(textoInvertido);

//9. Usa un bucle para generar los primeros 10 números de la secuencia de fibonacci


let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);
    
    let siguiente = a + b;
    a = b;
    b = siguiente;
}
//10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numerosss = [5, 12, 8, 20, 3, 15];
let mayores = [];

for (let i = 0; i < numerosss.length; i++) {
    if (numerosss[i] > 10) {
        mayores.push(numerosss[i]);
    }
}

console.log(mayores);

/*Explicación

numeros → Array original.

mayores → Nuevo array donde guardaremos los números mayores a 10.

for → Recorre todos los elementos del array.

if (numeros[i] > 10) → Verifica si el número es mayor a 10.

push() → Agrega el número al nuevo array.*/