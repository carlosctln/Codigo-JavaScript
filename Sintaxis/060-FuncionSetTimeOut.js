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

// Llamdas asímcronas con el uso de setTimeOut.
function miFuncionCallback() {
    console.log( 'saludo asíncrono después de 3 segundos...' );
}
// El tiempo se especifica en milisegundos
setTimeout(miFuncionCallback, 3000)

setTimeout(function () {console.log( 'saludo asíncrono después de 6 segundos...' )}, 6000)

setTimeout( () => console.log( 'saludo asíncrono después de 9 segundos...' ), 9000 );
