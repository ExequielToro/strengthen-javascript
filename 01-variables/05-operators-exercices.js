// 1. Crear una variable para cada operación aritmética

 let  a = 6 
 let  b = 11

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso


//de las variables utilizadas para las operaciones aritmética


console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b) 
console.log(a ** b)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación


console.log(0 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(a == a) // Igualdad por valor
console.log(a === a) //Igualdad por identidad (por tipo y valor)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a > b)
console.log(a >= b)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "hola")


// 5. Utliza el operador lógico and

 console.log(6 > 11 && 15 > 20)

// 6. Utiliza el operador lógico or

 console.log(6 > 11 || 15 > 20)

// 7. Combina ambos operadores lógicos

 console.log(6 > 11 && 15 > 20 || 30 < 40)

// 8. Añade alguna negación

console.log(!(6 > 11 && 15 > 20))

// 9. Utiliza el operador ternario

 const isRaining = true
 isRaining ? console.log("esta lloviendo") : console.log("No esta lloviendo")

// 10. Combina operadores aritméticos, de comparación y lógicos

 console.log(6 > 11 || 15 > 20 || 30 > 40)
