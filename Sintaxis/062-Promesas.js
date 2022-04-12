let miPromesa = new Promise((resolver, rechazar)=> {
    //let expresion = true;
    let expresion = false;
    if(expresion)
        resolver('Resolvió correcto');
    else
    rechazar('Se produjo un error');
});

//miPromesa.then(valor => console.log( valor ), error => console.log( error ));

miPromesa.then(valor => console.log( valor )).catch(error => console.log(error));
