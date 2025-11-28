// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name", "Pablo"],
    ["email","pablo1988@gmail.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias","estrella")
myMap.set("name","Pablo Toro")

console.log(myMap)

// get // recupoerar el valor

console.log(myMap.get("name"))
console.log(myMap.get("surnam"))

// has // es para saber si es true o false
console.log(myMap.has("surna"))
console.log(myMap.has("name"))

// delete

myMap.delete("email")
console.log(myMap.delete("name"))

console.log(myMap)

// clear

//myMap.clear()

console.log(myMap)

// keys y values y entries

myMap.keys(myMap)

console.log(myMap)

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

console.log(myMap)