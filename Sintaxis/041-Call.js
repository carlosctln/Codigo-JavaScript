// Llama a un método de un objeto desde otro objeto.

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nomCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Catalán',
}

// Uso de call
console.log( persona1.nomCompleto() );

console.log( persona1.nomCompleto.call( persona2 ));

