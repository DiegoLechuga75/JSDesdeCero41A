const persona = {
    nombre: "Diego",
    edad: 21,
    ciudad: "CDMX",
    mayorEdad: true,
    pasatiempos: ["videojuegos", "gym", "guitarra"],
    mascota: {
        nombre: "Mantequilla",
        edad: 2,
        raza: "Gato",
    },
    saludar: function () {
        console.log("Holaaaa soy " + this.nombre);
    },
    persentarse: function () {
        console.log(`Hola me llamo ${this.nombre} tengo ${this.edad} años y mi mascota se llama ${this.mascota.nombre}`);
    },
}
console.log(persona);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);

console.log(persona.nombre);
console.log(persona.edad);

for (let i = 0; i < persona.pasatiempos.length; i++) {
    const element = persona.pasatiempos[i];
    console.log(element);
}

console.log(persona.mascota.nombre);

console.log(persona["nombre"]);

persona.saludar();

let { nombre, edad, ciudad } = persona;
console.log(nombre);

const persona2 = {
    nombre: 'Daniel ',
    edad: 29,
    ciudad: 'CDMX',
    mayorDeEdad: true,
    pasatiempos: ['videojuegos', 'ciclismo', 'nadar'],

    mascotas: {
        nombre: "bugy",
        edad: 3,
        raza: 'gato'
    }
}

console.log("hola soy " + persona2.nombre + "mis pasatiempos  son " + persona2.pasatiempos + " y tengo una mascota que se llama " + persona2.mascotas.nombre);

persona.persentarse();

const albums = [
    {
        nombre: "Album 1",
        canciones: ["cancion 1", "cancion 2", "cancion 3"],
    },
    {
        nombre: "Album 2",
        canciones: ["cancion 3"],
    },
    {
        nombre: "Album 3",
        canciones: ["cancion 1", "cancion 2"],
    },
]

for(let i = 0; i < albums.length; i++){
    console.log(albums[i].nombre);
    for(let j = 0; j < albums[i].canciones.length; j++){
        console.log(albums[i].canciones[j]);
    }
}

class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }

    cumplirAnios(){
        this.edad++;
    }
}

const persona3 = new Persona("Diego", 21, "Masculino");
const persona4 = new Persona("Ana", 23, "Femenino");

console.log(persona3);
console.log(persona4);

persona3.saludar();
persona4.saludar();

persona3.cumplirAnios();

class Estudiante extends Persona {
    constructor(nombre, edad, genero, carrera){
        super(nombre, edad, genero);
        this.carrera = carrera;
    }

    estudiar(){
        console.log(`Estoy estudiando ${this.carrera}`);
    }
}

const estudiante = new Estudiante("Diego", 21, "Masculino", "Ing. en Computación");
console.log(estudiante);

estudiante.saludar();