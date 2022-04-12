// Los métodos estaticos se asocian a la clase y no a los objetos
// Los atributos no estaticos se asocian con los objetos
class Persona{
    // Este atributo pertenece a la clase pero no a los objetos.
    static contObjectPersona = 0; // atributo de clase
    correo = 'dfalf@mail.com'; // Atributo de objeto.

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contObjectPersona < Persona.MAX_OBJ){
            this.idPresona = ++Persona.contObjectPersona;
        }else{
            console.log( 'Se ha alcanzado el máximo de objetos permitidos' );
        }

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
        return this.idPresona + " " + this._nombre + " " + this._apellido
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
let persona2 = new Persona('carlos', 'Catalán');
let persona3 = new Persona('carlos', 'Catalán');
let persona4 = new Persona('carlos', 'Catalán');
let persona5 = new Persona('carlos', 'Catalán');
let persona6 = new Persona('carlos', 'Catalán');
let persona7 = new Persona('carlos', 'Catalán');
console.log( persona1 );
console.log( persona1.toString() );

let empleado1 = new Empleado('Daniel', 'Catalán', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.toString() );

//persona1.saludar(); no es posible llamar un objeto estatico dedes un objeto.
Persona.saludar();
Persona.saludar1(persona1);

Empleado.saludar();
Empleado.saludar1(empleado1)

console.log( persona1.contObjectPersona );
console.log( Persona.contObjectPersona );

console.log( Empleado.contObjectPersona );
console.log( persona1.correo );
console.log( empleado1.correo );

console.log( Persona.MAX_OBJ );
