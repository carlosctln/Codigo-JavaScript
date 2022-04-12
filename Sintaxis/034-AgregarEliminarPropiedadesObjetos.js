let persona = {
    nombre: 'Carlos',
    apellido: 'Catalán',
    correo: 'catalanc12@gmial.com',
    edad: 27,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

// Agragar propiedad
persona.tel = '46554';
console.log( persona );

//Eliminar propiedad
delete persona.tel
console.log( persona );
