// 0PERADORES

// Operadores Aritméticos

let  a = 5 
let  b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable )
myVariable  += 2
console.log(myVariable )

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación


console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) 
console.log(a == a) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == "hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// El boolean true

// Falsy values (valores falsos)

// 0
// On
// null
// underfiend
// NaN
// El boolean false
// Cadena de texto vacías

// Operadores lógicos

 // and (&&)
 console.log(5 > 10 && 15 > 20)
 console.log(5 < 10 && 15 < 20)
 console.log(5 < 10 && 15 > 20)
 console.log(5 > 10 && 15 > 20 && 30 > 40)

 // or (||)
 // si se cumple una condición por lo menmos va hacer verdadero

 console.log(5 > 10 || 15 > 20)
 console.log(5 < 10 || 15 < 20)
 console.log(5 < 10 || 15 > 20)
 console.log(5 > 10 || 15 > 20 || 30 > 40)

 console.log(5 > 10 && 15 > 20 || 30 < 40)

 // not (!)
 console.log(!true)
 console.log(!(5 > 10 && 15 > 20))
 console.log(!(5 > 10 && 15 > 20))
  
 // Operadores ternarios

 const isRaining = true
 isRaining ? console.log("esta lloviendo") : console.log("No esta lloviendo")

 const isRainingg = false
 isRainingg ? console.log("esta lloviendo") : console.log("No esta lloviendo")