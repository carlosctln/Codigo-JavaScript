// Paso por valor es cuando se usan tipos que no son objetos.
// Los tipos primitivos son los que no tienen metodos o atributos relacionados.
let x = 10;

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x); // 10
console.log( x )
