/**
 * Función para hacer una tabla de multiplicar hasta 10 del número ingresado e imprimir los pares e impares
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const mult = function(pnum){
    let num = pnum;
    let res = 0;
    let re;

    for (let con = 1; con <= 10; con++) {
        res = parseFloat(num)*parseInt(con);
        console.log(num+" x "+con+" = "+res);
        if (res % 2 == 0) {
            console.log("el resultado es par");
        }
        else{
            console.log("el resultado es impar");
        }
    }
    return re;
}