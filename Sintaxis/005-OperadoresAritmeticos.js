/*
Operador       Description
 +              Suma y concatenación
 -              Resta
 *              Multiplicación.
 **             Exponente.
 /              Division
 %              Modulo.
 ++             Incremento.
 --             Decremento.    
*/ 

let a, b, c
a = 3, b= 5
c = a + b
console.log( 'El resultado de la suma es: ' + c )

c = b - a
console.log( 'La resta es:' + c )

c = b * a
console.log( 'La multiplicación es:' + c )

c = b / a
console.log( 'La división es:' + c )

c = b ** a
console.log( 'La potencia es:' + c )

c = b % a
console.log( 'El módulo es:' + c )
//pre-incremento
z = ++a // aumenta z y a queda igual
console.log( 'imcrementa en uno ' + z )
--a
console.log( 'Decrementa en un ' + a )
// post-incremento
z = a++ //aumenta el valor de a pero el valor anterior de a lo guarda en z
console.log( 'imcrementa en uno ' + a )
a--
console.log( 'Decrementa en un ' + a )

a += 1
console.log( 'imcrementa en uno ' + a )
a-= 1
console.log( 'Decrementa en un ' + a )
