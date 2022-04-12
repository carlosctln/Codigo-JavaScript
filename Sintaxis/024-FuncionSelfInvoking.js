// Las dunciones self invoking son funciones que se mandan a llamar ellas mismas.
// Ya  que no se le asigna un nombre o se asigna una variable estas funciones solo se pueden usar una vez.
(function(){
    console.log( 'Ejecutando la funcion' );
})();

(function(a, b){
    console.log( a + b );
})(2,3);
