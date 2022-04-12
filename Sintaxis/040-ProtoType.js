// Constructor para personas.
function Persona( nombre, apellido, correo) {
    this.nombre/*Atributo*/ = nombre/*Parametro*/;
    this.apellido = apellido;
    this.correo = correo;
    this.nomCopleto = function () {
        return this.nombre + " " + this.apellido
    }
}

Persona.prototype.tel = '465456';

let padre = new Persona('Dalmacio', 'Catalán', 'dalmacio@gmail.com');
padre.tel = '798978';
console.log( padre.tel );

let madre = new Persona('Clara', 'Catalán', 'clara@gmail.com');
console.log( madre.tel );