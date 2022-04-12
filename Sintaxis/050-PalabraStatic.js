// Los métodos estaticos se asocian a la clase y no a los objetos
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

    nomCompleto(){
        return this._nombre + " " + this._apellido
    }

    //Sobreescribiendo el método de la clase Padre (Object).
    toString(){
        // Se aplica polimorfismo.
        return this.nomCompleto();
    }
    static saludar(){
        console.log( 'Hola desde el metodo static' );
    }

    static saludar1(persona){
        console.log( persona.nombre + " " + persona.apellido );
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
    // Sobreescritura
    nomCompleto(){
        return super.nomCompleto() + ", " + this._depa;
    }
}

let persona1 = new Persona('carlos', 'Catalán');
console.log( persona1 );

let empleado1 = new Empleado('Daniel', 'Catalán', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.toString() );

//persona1.saludar(); no es posible llamar un objeto estatico dedes un objeto.
Persona.saludar();
Persona.saludar1(persona1);

Empleado.saludar();
Empleado.saludar1(empleado1)
