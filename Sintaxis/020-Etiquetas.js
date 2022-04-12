// El uso de etiquetas no es buena practica.
inicio: // Las etiquetas sirven para incdicar a donde se ira el flujo del programa.
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0){
        continue inicio // Hace que el ciclo pase a la siguiente iteración
    }
    console.log( i )
}