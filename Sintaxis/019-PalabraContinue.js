let a = 0

while(a <= 10){
    ++a
    if (a % 2 == 0){
        continue // Hace que el ciclo pase a la siguiente iteración
    }
    console.log( a )
}

a = 0
do{
    ++a
    if (a % 3 != 0){
        continue // Hace que el ciclo pase a la siguiente iteración
    }
    console.log( a )
}while(a <= 10)

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0){
        continue // Hace que el ciclo pase a la siguiente iteración
    }
    console.log( i )
}
