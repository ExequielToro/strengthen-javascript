// if, else, else


// if (si)

let age = 37

if (age == 37){
    //bloque
    console.log("La edad es 37")
}

// else ( si o no)

if (age !=37){

    console.log("L edad es 37")

} else{
    console.log(" La edad no es 37")
}

// else if (si no, si)

if (age == 38) {
    console.log("La edad es 37")
} else if (age > 18){
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}

// Operador ternario

 const mess = age == 37 ? "La edad es 37" : "La edad no es 37"
 console.log(mess)

 // switch

 let day = 7
 let dayName

 switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de día incorrecto"
    
 }

 console.log(dayName)