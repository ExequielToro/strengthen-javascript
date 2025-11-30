
// 1. Crea un array que almacene cinco animales

myArray = ["perro", "gato", "león", "jirafa","caballo"]
""
console.log(myArray)

let appBlo = new Array("pablo", 37)

console.log(appBlo)

// 2. Añade dos más. Uno al principio y otro al final

myArray = ["perro", "gato", "león", "jirafa","caballo"]

console.log(myArray.push("tortuga","conejo"))

console.log(myArray)

// 3.   Elimina el que se encuentra en tercera posición


myArray.splice(3, 1); // elimina 1 elemento desde el índice 2

console.log(myArray);



// 4. Crea un set que almacene cinco libros

let mySet = new Set()

mySet = new Set(["libro1","libro2","libro3","libro4","libro5"])

console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("libro6","Libro1") // Lo quise cambiar por una mayúscula pero tampoco me dejo.

console.log(mySet)

// no se puede almacenar un repetido por que la función sed almacena valores únicos

// 6. Elimina uno concreto a tu elección

mySet.delete("libro5")

console.log(mySet)


// 7. Crea un mapa que asocie el número del mes a su nombre

const myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

console.log(myMap);


// 8. Comprueba si el número 5 existe en el map e imprime su valor

console.log(myMap.has(5))

// 9. Añade el mapa una clave con un array como que almacene los meses de verano

let mesesVerano = [
    myMap.get(12),
    myMap.get(1),
    myMap.get(2)
];

myMap.set("verano", mesesVerano);

console.log(myMap);


// 10. Crea un Array, transformalo a un Set y almacénalo en un Map

let myaArray = [1, 2,3,4];

// 2. Transformarlo a un Set
let myySet = new Set(myaArray);   // el Set elimina valores duplicados automáticamente

// 3. Almacenar el Set dentro de un Map
let myyMap = new Map();
myyMap.set("transforme", myySet);

// Mostrar resultado
console.log(myyMap);
console.log(myyMap.get("transforme"));
