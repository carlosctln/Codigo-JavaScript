// Constructor para personas.
function Persona( nombre, apellido, correo) {
    this.nombre/*Atributo*/ = nombre/*Parametro*/;
    this.apellido = apellido;
    this.correo = correo;
}

let padre = new Persona('Dalmacio', 'Catalán', 'dalmacio@gmail.com');
console.log( padre );

let madre = new Persona('Clara', 'Catalán', 'clara@gmail.com');
console.log( madre );