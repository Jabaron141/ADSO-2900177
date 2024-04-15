/**
 * Función para hacer una tabla de multiplicar hasta 10 del número ingresado
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function mult(pnum){
    let num = pnum;
    let res = 0;
    let re;

    for (let con = 1; con <= 10; con++) {
        res = parseFloat(num)*parseInt(con);
        console.log(num+" x "+con+" = "+res);
    }
    return re;
}