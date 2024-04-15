/**
 * Función para hacer la tabla de multiplicar hasta 10 del número ingresado
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function mult(pnum){
    let num = pnum;
    let con = 0;
    let res = 0;
    let re;

    while (con<5) {
        con = parseInt(con) + 1;
        res = parseFloat(num)*parseFloat(con);
        console.log(num+" x "+con+" = "+res);
    }
    return re;
}