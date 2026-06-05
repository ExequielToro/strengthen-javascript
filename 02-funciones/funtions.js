// Funciones

// Simples

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i <5; i++)[
    myFunc()
]

// Parámetros


function myParents(name) {
    console.log(`¡Hola, ${name}!`)
}

myParents("Pablo")

myParents("Toro")

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`!Hola, ${name}!`)
}

myFunc2("Pablo Toro")

// Arrow funntions

const myFunc3 = (name) => {
    console.log(`!Hola, ${name}!`)
}

myFunc3(" Pablo Toro")

const myFunc4 = (name) => console.log(`!Hola, ${name}!`)

myFunc4("Pablo Toro")

// Parámetros

function sum(a, b){
    console.log(a + b)
}

sum(5,10)

function defautSum(a = 0, b = 0) {
    console.log(a + b)
}

defautSum()
defautSum(5)
defautSum(5,10)
defautSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a + b
}

let result = mult(5, 10)
console.log(result)

