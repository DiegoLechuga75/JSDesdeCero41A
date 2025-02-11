/* let numero = 5;

console.log(numero);

console.log(numero + 5);

numero = numero + 15;

console.log(numero);

let nombre = "Diego";

console.log(nombre);

const nombre2 = "Juan";

console.log(nombre2);


console.log(5 + 10);

console.log(5 - 10);

console.log(5 * 10);

console.log(5 / 10);

console.log(5 % 10);

console.log(3 % 2);

console.log(5 ** 3);

let sumaTotal = 0;

sumaTotal += 5;

console.log(sumaTotal);

sumaTotal -= 5;

console.log(sumaTotal);

console.log(10 == "10");

console.log(10 === 10);

console.log(10 != "10");

console.log(10 !== "10");

console.log(10 > 5);

console.log(10 < 5);

console.log(10 <= 5);

console.log(10 >= 5);
 */


let numeroAleatorio = 4;

if(numeroAleatorio > 4){
    console.log("El número es mayor a 4");
} else if(numeroAleatorio < 4){
    console.log("El número es menor a 4");
} else {
    console.log("El número es igual a 4");
}

console.log("Aquí termina el programa");

let membresia = true;

let conexionAInternet = true;

if(membresia && conexionAInternet){
    console.log("Puedes ver la película");
} else {
    console.log("No puedes ver la película");
}

let nacionalidad = "Argentino";

let naturalizado = true;

if(nacionalidad === "Mexicano" || naturalizado){
    console.log("Puedes sacar tu pasaporte");
} else{
    console.log("No puedes sacar tu pasaporte");
}

if(!false){
    console.log("Es verdadero");
} else{
    console.log("Es falso");
}

console.log(!!false);

console.log(true == 1);

console.log(false == 0);

console.log(false == "");

console.log(true === "0");

if("0"){
    console.log("Es verdadero");
} else{
    console.log("Es falso");
}