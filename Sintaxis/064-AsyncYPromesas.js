let miPromesa = new Promise((resolver, rechazar)=> {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
    rechazar('Se produjo un error');
});

let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('Saludos con promesa y timeout'), 3000);
});

// async indica que una función regresa una promesa.
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log( valor ))
