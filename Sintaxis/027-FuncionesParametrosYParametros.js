// Los parametros son las varaibles que resibe la funcion y los argumetno son las variables que enviamos a la función

let sumar = function(a, b, c = 2){
    console.log( arguments[0] );
    console.log( arguments[1] );
    console.log( arguments[2] );
    console.log( arguments[3] );
    return a + b + arguments[2];
}

resultado = sumar(4, 5, 6, 7);
resultado1 = sumar(9) // JavaScript permite enviar menos paametros a las funciones.
console.log( resultado );

// Sumar Argumentos

let resultado =  SumarTodo(5, 4, 13, 10, 9);
console.log( resultado)

function SumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


