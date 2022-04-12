// Constructor para personas.
function Persona( nombre, apellido, correo) {
    this.nombre/*Atributo*/ = nombre/*Parametro*/;
    this.apellido = apellido;
    this.correo = correo;
    this.nomCopleto = function () {
        return this.nombre + " " + this.apellido
    }
}

let padre = new Persona('Dalmacio', 'Catalán', 'dalmacio@gmail.com');
console.log( padre.nomCopleto() );

let madre = new Persona('Clara', 'Catalán', 'clara@gmail.com');
console.log( madre.nomCopleto() );