// Declarar un arreglo.
let autos = new Array('toyota', 'nissan','ferrari') // es mala practica.
//buena practica
const carros = ['Honda','volvo', 'BMW']
console.log( carros )

// Acceder a un elemento
console.log( carros[0] )

// recorrer arreglo.
for (let i = 0; i < carros.length; i++) {
    console.log( carros[i] )
}

// Modificar elementos de un arreglo.
autos[1] = 'Lamborgini'
console.log( autos[1] )

autos.push('Fiat') //Agrega un elemento al final del arreglo.
console.log( autos )

// Agregar elementos a un arreglo.
console.log( carros.length )

carros[carros.length] = 'Ford'
console.log( carros )

carros[6] = 'Camaro'
console.log( carros )

// Preguntar si es un arreglo.
console.log( typeof autos )
console.log(Array.isArray(autos))
console.log( autos instanceof Array )
