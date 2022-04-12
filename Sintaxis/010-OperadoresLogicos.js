// AND = &&
let a = 5
let valMin = 0, valMax = 10

console.log( a>= valMin && a <= valMax ) // Es verdadero si los dos condiciones son verdaderas.
console.log( a>= valMin && a >= valMax )

console.log( a>= valMin || a >= valMax ) // Es verdadero si una de las dos condsiciones es veradera.
console.log( a<= valMin || a >= valMax )

// Operador ternario es sinilar al if else.
// priemro va una condicion despues un signo ? que es la parte de veradero 
// despues un : para la parte false.
let resultado = (3 == 2) ? 'verdadero' : 'falso'
console.log( resultado )