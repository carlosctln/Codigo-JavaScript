// Hoisting consiste en llamar una funció antes de definirla.
miFuncion(2, 4);
function miFuncion(a, b) {
    console.log( a + b );
}

miFuncion(2, 3);

function Suma(a, b) {
    return a + b;
}

let suma = Suma(5, 3);
console.log( suma );
