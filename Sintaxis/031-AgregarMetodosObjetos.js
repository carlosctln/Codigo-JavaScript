let persona = {
    nombre: 'Carlos',
    apellido: 'Catalán',
    correo: 'catalanc12@gmial.com',
    edad: 27,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log( persona.nombreCompleto() );
