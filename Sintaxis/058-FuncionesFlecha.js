// Las funciones flecha son funciones anonimas.
// En las funciones flecha no aplica el concepto de hoisting
let miFuncion = function () {
    console.log( 'saludo dede mi función' );
}

let miFuncionFlecha = () =>{
    console.log( 'Saludo dede mi función flecha' );
}

// Simplificando el código.

const miFuncionFlecha1 = () => console.log( 'saludo desde la funcion flecha 1' );

/*const saludar = () => {
    return 'saludos desde función flecha';
}*/

const saludar = () => 'saludos desde función flecha';

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Catalan'});

const funcionconParametros = (mensaje) => console.log( mensaje ); 
const funcionconParametros1 = mensaje => console.log( mensaje ); // Si solo es un parametro se omiten los parentesis.
miFuncion();
miFuncionFlecha();
miFuncionFlecha1();

console.log( saludar() );
console.log( regresaObjeto() );

const funcionvariosParametros = (opc1, opc2) => opc1 + opc2;

funcionconParametros('Hola mundo');
funcionconParametros1('Hola mundo1');

console.log( funcionvariosParametros(5, 6) );
