// el modo estrcito obliga a declarar las funciones y variables antes de usarlas.
// Tsambién se puede usar adentro de una función.

"use strict";

x = 10;
console.log( x );

let y = 10;
console.log( y );

miFuncion();

function miFuncion() {
    "use strict";
    z = 15
    console.log( z );
}

miFuncion();