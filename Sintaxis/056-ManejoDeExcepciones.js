"use strict";

try{
    let y = 0;
    x = 10;
    miFuncion();
}catch(error){
    console.log( error );
}finally{ //Siempre se ejecuta y es opcional.
    console.log( 'termina la revisión de errores...' );
}

console.log( 'Continuamos...' );


