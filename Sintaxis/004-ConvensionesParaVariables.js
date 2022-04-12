/*
Para declarar variables se usan las palabras reservadas 'var' y 'let'
pero lo correcto es usar let

Los nombres de las variables no pueden empezar con números
*/
nombre = 'Carlos' // se puede pero no es buena practica
console.log(nombre)
let x
console.log(x)

// Declaración de constantes.
const PI = 3.1415926 // No se puede cambiar el valor de una constante
console.log(PI)

let nombreCompleto = 'Carlos Catalán'
console.log( nombreCompleto )

let w, y
w = 10, y = 21
let z = w + y
console.log( z )

// JavaScript deistinge entre mayúsculas y minúsculas
let nombreCompleto1 = 'Carlos Catalán'
let NombreCompleto1 = 'Daniel Catalán'
console.log( nombreCompleto1 ) // Imprime Carlos Catalán
console.log( NombreCompleto1 ) // Imprime Daniel Catalán

// Formas validas de declarar una variable
let _1
let $1
let a1
let A1