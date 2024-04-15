function sumar(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function obtNums() {
    let num1 = prompt("Digite el valor del primer número");
    let num2 = prompt("Digite el valor del segundo número");
    return [num1, num2];
}

let numeros = obtNums();
let resultado = sumar(numeros[0], numeros[1]);