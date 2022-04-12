let miPromesa = new Promise((resolver, rechazar)=> {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
    rechazar('Se produjo un error');
});

let promesa = new Promise((resolver) => {
    console.log( 'Inicio promesa' );
    setTimeout(() => resolver('Saludos con promesa y timeout'), 3000);
    console.log( 'Fin promesa' );
});

promesa.then(valor => console.log( valor ));
