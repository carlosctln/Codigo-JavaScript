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

// Uso de apply.
console.log( persona1.nomCompleto('Lic', '78965412') );

let arreglo = ['Ing', '45632189']
console.log( persona1.nomCompleto.apply( persona2, arreglo ));