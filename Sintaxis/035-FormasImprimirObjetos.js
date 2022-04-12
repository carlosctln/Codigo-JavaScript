let persona = {
    nombre: 'Carlos',
    apellido: 'Catalán',
    correo: 'catalanc12@gmial.com',
    edad: 27,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

// Concatenar cada valor de cada propiedad.
console.log( persona.nombre + ', ' + persona.apellido );

// for in.
for(nomPropiedad in persona){
    console.log( persona[nomPropiedad] );
}

// Retorna el objeto como un arreglo.
let personaArray = Object.values( persona );
console.log( personaArray );

let personaString = JSON.stringify( persona );
console.log( personaString );
