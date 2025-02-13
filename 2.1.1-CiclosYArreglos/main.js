/* let mensaje = prompt("Ingrese un mensaje");

while (mensaje) {
    console.log(mensaje);
    mensaje = prompt("Ingrese un mensaje");
}
*/

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log("Fin del ciclo");

/* let vidas = 3;
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = parseInt(prompt("Adivina el número del 1 al 10"));

while(numeroUsuario !== numeroAleatorio && vidas > 0) {
    vidas--;
    console.log("Te quedan " + vidas + " vidas");
    numeroUsuario = parseInt(prompt("Adivina el número del 1 al 10"));
}

if(vidas > 0) {
    console.log("Ganaste");
} else {
    console.log("El numero era " + numeroAleatorio);
} 
*/

let nombres = ["Juan", "Pedro", "Diego", "Ana", "Maria"];

console.log(nombres[4]);


for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
    console.log(i);
}

for(let i = nombres.length - 1; i >= 0; i--){
    console.log(nombres[i]);
    console.log(i);
}

nombres.push("Luis");
nombres.pop();
nombres.unshift("Luis");
nombres.shift();

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
for (let i = 0; i < numeros.length; i++){
    suma += numeros[i];
}
console.log(suma);

const persona = {
    nombre: "Diego",
    edad: 21,
    ciudad: "CDMX",
    mayorEdad: true,
    pasatiempos: ["videojuegos", "gym", "guitarra"],
}

console.log(persona["pasatiempos"]);
console.log(persona.pasatiempos);

const frutas = ["manzana", "pera", "uva", "sandia", "fresa"];

const cantidadFrutas = {
    manzana: 5,
    pera: 3,
    uva: 10,
    sandia: 1,
    fresa: 15 
}

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    console.log(cantidadFrutas[frutas[i]]);
}