let persona = {

    nombre: 'Carlos',
    apellido/*nombre de la propiedad*/ : 'Catalán'/*valor de la propiedad*/,
    correo: 'catalanc12@gmial.com',
    edad: 27
}

console.log( persona.nombre );

console.log( persona['apellido'] );

for(propiedad in persona){
    console.log( propiedad ); // accedemos al nombre de la propiedad.
    console.log( persona[propiedad] ); // accedemos al valor de la propiedad.
}
