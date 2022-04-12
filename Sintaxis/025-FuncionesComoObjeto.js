function miFuncion(a, b) {
    console.log( arguments.length )
    return a + b;
}

console.log( typeof miFuncion );
let miFuncionEnTexto = miFuncion.toString();
console.log( miFuncionEnTexto )
