/*
La diferencia entre un tipo primitivo y un objeto, es que el tipo primitivo no contiene propiedades ni tampoco métodos.

Un objeto puede contener propiedades y métodos.
*/

// Definir un nuevo objeto.

let persona = {
    nombre: 'Carlos',
    apellido: 'Catalán',
    correo: 'catalanc12@gmial.com',
    edad: 27
}

/*
El código después del igual crea una referencia en memoria con las propiedades de nombre, apellido, correo y edad
y esa referencia es la que se le asigna a la variabel de persona.

por ejemplo si se crea la referecia en memoria 0x333, la variable presona almacenara esa referencia
*/

// Imprimir los atributos del objeto.
console.log( persona.nombre );
console.log( persona.apellido );
console.log( persona.correo );
console.log( persona.edad );
console.log( persona );
