let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nomCompleto: function(titulo, tel){
        return  titulo + ": " + this.nombre + " " + this.apellido + " " + ", " + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Catalán',
}

// Uso de call con argumentos.
console.log( persona1.nomCompleto('Lic', '45646565') );

console.log( persona1.nomCompleto.call( persona2, 'Ing', '45643246' ));