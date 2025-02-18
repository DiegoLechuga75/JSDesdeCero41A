function anosParaElRetiro(edad){
    const edadDeRetiro = 65;
    return edadDeRetiro - edad;
}


let tiempoParaRetirarme = anosParaElRetiro(21);

console.log(tiempoParaRetirarme);
console.log(anosParaElRetiro(30));



function esTarde(hora){
    if(hora > 12){
        return "Es tarde";
    } else {
        return "Es temprano";
    }
}


console.log(esTarde(13));
console.log(esTarde(10));

function saludo(nombre) {
    return "Hola " + nombre;
}

console.log(saludo("Pancracio"));
console.log(saludo("Diego"));

let repeticiones = 0;

function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}

function factorialIterativo(num){
    let resultado = 1;
    for(let i = 1; i <= num; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));
console.log(factorialIterativo(5));

const originalArray = [5, 3, 8, 1, 2, 7, 4, 6];
const copyArray = Array.from(originalArray);

function bubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(copyArray));
console.log(originalArray);
