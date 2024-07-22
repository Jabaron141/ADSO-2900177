/**
 * Función para hacer una tabla de multiplicar hasta 10 del número ingresado e imprimir los pares e impares
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const mult = function(pnum){
    let num = pnum;
    let res = 1;
    let multi = "";
    for(let con = 1; con <= 5; con++){
        multi = num * con;
        if (multi %2 == 0){
            multi += res+" es par\n";
        }else{
            multi += res+" es impar\n";
        }
    }
    return multi;
}