let a = 3, b = 2, c = '3'

// Operador de igualdad revisa el valor sin importar el tipo.
let z = a == b 
let w = (a == c)
z = (a == b)
console.log( z )
console.log( w )

// Operador de igualdad extricta evisa si los valores sonj iguales y tambien los tipos.
w = (a === c)
console.log( w )

// Operador de diferencia
z = (a!= c) // no importa el tipo
console.log( z )

// Operador de diferencia extricta.
w = (a !== c)
console.log( w )

// 
