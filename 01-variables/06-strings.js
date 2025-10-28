// Strings

let myName = "Pablo"
let greeting = "Hola, " + myName + "!"


console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length) // tamaño de cadena de texto

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[11])


console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Pablo"))
console.log(greeting.indexOf("toro")) // no hay ningun indice que corresponda significa eñ -1
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Pablo"))
console.log(greeting.includes("toro")) // es pra ver si existe la variable
console.log(greeting.slice(0,10))
console.log(greeting.replace("pablo", "toro"))

// Template literals ( plantillas literales)

let message = `Hola, este es
 mi curso de JS`

console.log(message)

let email = "pablotoro1988@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)