// Una función callback es una función que se pasa como parametro de otra función.

function miFuncion1() {
    console.log( 'funcion 1' );
}

function miFuncion2() {
    console.log( 'funcion 2' );
}

miFuncion1();
miFuncion2();

// Función de tipo callback.

function imprimir(mensaje) {
    console.log( 'El resultado de la suma es: ' + mensaje );
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(res)
}

sumar(5,3, imprimir);
