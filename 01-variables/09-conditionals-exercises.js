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



//6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable mes

//7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

//8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

//9. Usa un switch para hacer nuevo el ejercico 6

//10. Usa un switch para hacer de nuevo ejercicio 7

