// if/else/else if/ternaria

//1. Imprime por consola tu nombre si una variable toma su valor

let = "Pablo Toro"
console.log(let)

//2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

// Usuario y contraseña establecidos
const usuarioCorrecto = "pablo";
const contraseñaCorrecta = "1234";

// Datos ingresados por el usuario
const usuarioIngresado = "pablo";
const contraseñaIngresada = "1234";

// Validación
if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
    console.log("Acceso permitido: usuario y contraseña correctos.");
} else {
    console.log("Acceso denegado: usuario o contraseña incorrectos.");
}


//3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

const numero = 0; // Cambia este valor para probar

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}



//4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cúantos años le faltan

const persona = 17

if (persona >=18){
    console.log("Es mayor de edad, puede votar tiene " + persona + " años");
} else if (persona<18){
    console.log("Es menor de edad, no puede votar");
} else {
    const calcular = 18 - persona;
    console.log("No puede votar. Te faltan " + calcular + "años para votar")
}

//------------

const edad = 12; // Cambia este valor para probar

if (edad >= 18) {
    console.log("Puedes votar, tienes " + edad + " años.");
} else {
    const añosRestantes = 18 - edad;
    console.log("No puedes votar. Te faltan " + añosRestantes + " años para poder votar.");
}


//5. Usa el operdador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

 const age = 37
 const mess = age == 37 ? "La edad es 37" : "La edad no es 37"
 console.log(mess)

 if (age == 38) {
    console.log("La edad es 37 y es adulto")
} else if (age > 18){
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}

//6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable mes

 let day = 3
 let dayName

 switch (day) {
    case 0:
        dayName = "verano"
        break
    case 1:
        dayName = "invierno"
        break
    case 2:
        dayName = "primavera"
        break
    case 3:
        dayName = "otoño"
        break
    default:
        dayName = "Numero de estación incorrecta"
    
 }
console.log(dayName)
//7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

let dey = 0
let dayyname

switch (dey) {
    case 0:
        dayyname = "mes de la 30 dias"
    break
    case 1: 
        dayyname = "mes de 31 dias"
    break 
    case 2:
        dayyname = "mes de 29 dias"
    defaut: 
        dayyname = "numero incorrecto"

}
console.log(dayyname)
//8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idio = 3
let daiNamee

switch (idio){
    case 0:
        daiNamee = "ingles"
    break
    case 1:
        daiNamee = "español"
    defaut:
        daiNamee = "Hola Mundo"
}

console.log(daiNamee)


//9. Usa un switch para hacer nuevo el ejercico 6

let diy = 3
 let daiName

 switch (diy) {
    case 0:
        daiName = "verano"
        break
    case 1:
        daiName = "invierno"
        break
    case 2:
        daiName = "primavera"
        break
    case 3:
        daiName = "otoño"
        break
    default:
        daiName = "Numero de estación incorrecta"
    
 }
console.log(daiName)

//10. Usa un switch para hacer de nuevo ejercicio 7

let deeey = 0
let dayyyyname

switch (deeey) {
    case 0:
        dayyyyname = "mes de la 30 dias"
    break
    case 1: 
        dayyname = "mes de 31 dias"
    break 
    case 2:
        dayyname = "mes de 29 dias"
    defaut: 
        dayyname = "numero incorrecto"

}
console.log(dayyyyname)