// Tipo de dato string
var nombre = 'Carlos'
console.log(nombre)
// para saber el tipo de dato que la variable almacena
console.log(typeof nombre)

// Tipo de dato númerico
var numero = 1000
console.log(numero)

// Tipo de dato objeto
var objeto = {
    nombre: 'Daniel',
    apellido: 'Catalán',
    telefono: 15266555
}

console.log(objeto)

// Tipo de dato lógico (true, false)
var bandera = true 
console.log(bandera)

// Tipo de dato función
function miFuncion(){}

console.log(miFuncion)

// Tipo de dato Symbol.
var simbolo = Symbol('mi simbolo'); // Se utiliza para crear un valor unico para una variable
console.log(simbolo)

// Tipo clase es una funcion.
class Persona{
    // Contructor
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}
console.log(Persona)

// Tipo undefined.
var x
console.log(x)
z = undefined
console.log(z)

// Tipo null = ausencia de valor.
var y = null
console.log(y)
 
// valores vacios
var e = ''
console.log(e)
