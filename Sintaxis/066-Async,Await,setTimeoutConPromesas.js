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

// async/await
// await sólo se puede usar dentro de una función declarada con async.
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise ( resolver => {
        resolver('Promesa con await' );
    });
    console.log( await miPromesa );
}

// Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver =>{
        console.log('Inicio de la función');
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
        console.log('Fin de la función');
    });
    console.log( await miPromesa );
}

funcionConPromesaAwaitTimeout();
