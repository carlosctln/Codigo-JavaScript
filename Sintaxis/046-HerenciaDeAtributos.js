class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido( apellido ){
        this._apellido = apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, depa){
        super(nombre, apellido); // Llama al constructor de la clase padre.
        this._depa = depa;
    }
    get depa(){
        return this._depa;
    }

    set depa(depa){
        this._depa = depa;
    }
}

let persona1 = new Persona('carlos', 'Catalán');
console.log( persona1 );

let empleado1 = new Empleado('Daniel', 'Catalán', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombre );
