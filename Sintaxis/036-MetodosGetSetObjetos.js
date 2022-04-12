// set modifica la información
// get Obtiene la información
let persona = {
    nombre: 'Carlos',
    apellido: 'Catalán',
    correo: 'catalanc12@gmial.com',
    edad: 27,
    idioma: 'ES_GT',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log( persona.nombreCompleto );
console.log( persona.lang );

persona.lang = 'en';
console.log( persona.lang );
console.log( persona.idioma );
