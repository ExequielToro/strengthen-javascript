// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["pablo", "Toro", "Estrella", 37, true])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("pablo1988@gmail.com")

console.log(mySet)

mySet.delete("pablo1988@gmail.com")

console.log(mySet)

console.log(mySet.delete("pablo"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("pablo"))
console.log(mySet.has("Toro"))

// size

console.log(mySet.size)

// Convertir un set en array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("pablo1988@gmail.com")
mySet.add("pablo1988@gmail.com")

console.log(mySet)


