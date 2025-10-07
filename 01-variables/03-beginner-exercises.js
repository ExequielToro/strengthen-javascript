// 1. Escribe un comentario en una línea
// Wello Word
// 2. Escribe un comentarioi en varias líneas
/* Wello Word
a pleasure to meet you*/
// 3. Declara variables en valores asociados a todos los datos de tipo primitivos.

// Cadena de texto ( String)

let myname = "Pablo Toro"
let alias = "Pablete"
let email = "Pablotoro@gmail.com"

// numeros (number)

let age = 37 // entero
let height = 1.63 //decimal

// Booleanos( boolean)

let isTeacher= true
let isStudent= false

// Underfiend

let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol

let mySimbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(188989898989898989818181)
let myBigInt2 = 898989898989898n

// 4. Imprime por consola el valor de todas las variables



console.log( myname)
console.log( alias)
console.log( email)
console.log( age)
console.log( isTeacher)
console.log(height)
console.log(isStudent)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySimbol)
console.log (myBigInt)

// 5. Imprime por conosla el tipo de todas las variables
console.log(typeof myname)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySimbol)
console.log(typeof myBigInt)
// 6. A continuacíon, modifica los valores de las variables por otros del mismo tipo.

myname="Exequiel"
alias= 33
console.log(myname)
console.log(alias)

// 7. A continuacíon, modifica los valores de las variables por otros de distinto tipo
myname = 45
alias="Pablo"

console.log(myname)
console.log(alias)


// 8. Declara constantes con valores asociados de todos los tipos de datos primitivos.

const helloWorld3 = " Hello js 3 "
console.log(helloWorld3) 

const helloWorld2 = 33
console.log(helloWorld2) 

const helloWorld4 = true
console.log(helloWorld4) 

const nullva = null
console.log(nullva) 

const mySimbol1 = Symbol("mysymbol")
console.log(mySimbol1)


// 9. A continuación modifica los valores de las constantes

// R: no se puede modificar por que es una const


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// helloWorld2 = 34
/*const nombre = "Pablo";
nombre = "Juan";  Error: Assignment to constant variable*/
