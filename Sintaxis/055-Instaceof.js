class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}


class Gerente extends Empleado{
    constructor(nombre, sueldo, depa){
        super(nombre, sueldo)
        this.depa = depa;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}departamento: ${this.depa}`
    }
}

function imprimir(tipo){
    console.log( tipo.obtenerDetalles() );
    if(tipo instanceof Gerente){
        console.log( 'Es un objeto de tipo gerente' );
    }
    else if(tipo instanceof Empleado){
        console.log( 'Es un objeto de tipo empleado' );
    }
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

imprimir( empleado1 );
imprimir( gerente1 );
