// Si no se agrega un constructor JavaScript agrega uno vacáo en automaticamente.
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );
