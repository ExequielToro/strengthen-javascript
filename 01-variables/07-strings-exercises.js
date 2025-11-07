// 1. Cocatena la longitud de una cadena de texto

let myName = "Pablo"
let greeting = "Hola, " + myName + "!"

console.log(greeting)

// 2. Muestra la longitud de una cadena de texto

console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string

console.log(greeting[0])
console.log(greeting[11])

// 4. Convierte a mayúscula y minúscula un string

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `Hola, este es
mi curso de JS
y me encanta programar`

console.log(message)


// 6. Interpola el valor de una variable en un string

let email = "pablotoro1988@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)



// 7. Reemplaza todos los espacios en blanco de un string por guiones

let emaail = "pablotoro1988@gmail.com"

console.log(`Hola,-${myName}!-Tu-email-es-${emaail}`)

let resultado = greeting.replaceAll(" ", "-");
console.log(resultado);

let texto = "Hola mundo desde JavaScript";
let myNamee = "Pablo";
let emaill = "pablo@email.com";

// 1. Reemplazamos los espacios por guiones
let textoConGuiones = texto.replaceAll(" ", "-");

// 2. Interpolamos variables en un nuevo string
let resultadoo = `${textoConGuiones} - Hola, ${myNamee}! - Tu email es ${emaill}`;

console.log(resultadoo);


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes("Pablo"))


// 9. Comprueba si dos string son iguales

console.log(greeting.includes("Pablo"))
console.log(greeting.includes("toro"))



// 10. Comprueba si dos strings tienen la misma longitud

console.log(greeting.slice(0,10))
console.log(greeting.slice(0,10))

