let numero = 3

let numText = 'valor desconocido'

switch(numero){ // Si los casos son iguales se pueden poeneser en la misma linea
    case 1: case 12:
        numText = 'numero uno'
        break
    case 2:
        numText = 'numero dos'
        break
    case 3:
        numText = 'numero tres'
        break
    case 4:
        numText = 'numero cuatro'
        break
    default:
        numText
}

console.log( numText )
