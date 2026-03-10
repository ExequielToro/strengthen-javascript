// Loops o bucles

//for

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`) 

}

const numbers = [1,2,3,4,5]

for (let i = 0; i < 5; i++){
    console.log(`elemento:  ${numbers[i]}`)

}

const numberss = [1,2,3,4,5,6,7]

for (let i = 0; i < numberss.length; i++){
    console.log(`elemento:  ${numberss[i]}`)

}


// while 

let i = 0
while (i < 5) {
    console.log(`hola ${i}`)
    i++
}

// do while

i= 6
do {
    console.log(`hola ${i}`)
    i++
} while (i < 5)

// for of

const myArray = [1, 2,3,4]

const mySet = new Set(["pablo", "Toro", "Estrella", 37, true])

const myMap = new Map([
    ["name", "Pablo"],
    ["email","pablo1988@gmail.com"],
    ["age", 37]
])

myString = " ¡ Hola, Mundo !"

for (let  valor of myArray){
    console.log(valor)
}

for ( let valor of mySet){
    console.log(valor)
}

for (let valor of myMap){
    console.log(valor)
}

for (let valor of myString){
    console.log(valor)
}

// Buenas pràcticas

// break y continue 

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
        
    } else if (i == 7){

    }
    console.log(`Hola ${i}`)

}