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

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log( gerente1.obtenerDetalles() );
