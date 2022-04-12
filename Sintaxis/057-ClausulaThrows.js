"use strict";
let resultado = '';

try {
    //x = 10;
    if(isNaN(resultado)) throw 'No es un número';
    else if(resultado == '') throw 'Es una cadena vacía';
} catch (error) {
    console.log( error );
    console.log( error.name );
    console.log( error.message );
}