const persona = {
    nombre: 'Carlos',
    apellido: 'Catalán'
}

function cambiarValorObjeto(p1) {
    p1.nombre = 'Daniel';
    p1.apellido = 'Perez'
}

cambiarValorObjeto(persona);
console.log( persona )
