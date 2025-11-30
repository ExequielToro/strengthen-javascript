// array


// Declaración

let myArray  = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2,3,4]
myArray2 = new Array(1, 2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ["pablo", "toro","estrella", 37, true]
myArray2 = new Array(1, 2,3,4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "pablo"
myArray2[1] = "toro"
myArray2[2] = "estrella"

myArray2 = new Array(3)
myArray2[1] = "pablo"
myArray2[2] = "toro"
myArray2[4] = "estrella"

console.log(myArray2)

myArray =[]
myArray[2] = "pablo"
myArray[1] = "toro"

console.log(myArray)

// Metodos comunes

// push y pop

myArray =[]

myArray.push("pablo") // push agrega
myArray.push("toro")
myArray.push("estfrella")
myArray.push("37")

console.log(myArray)
console.log(myArray.pop()) // Elimina el ultimo y lo devuelve

myArray.pop()

console.log(myArray)

// shift  y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("pablo","estrella")
console.log(myArray)

// length

 // cuanto mide el array

console.log(myArray.length)

// clear

myArray = []
//myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray.push("Pablo", "toro","estrella",37, true)

let myNewArray = myArray.slice(1,3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray = ["Pablo", "toro","estrella",37, true]

myArray.splice(1,3, "nueva ") //elimina 
console.log(myArray)

