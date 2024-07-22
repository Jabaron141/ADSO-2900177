/**
 * Función para hacer la tabla de multiplicar hasta 10 del número ingresado
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function mult(pnum){
    let num = pnum;
    let con = 0;
    let res = 0;
    let multi = "";
    while (con < 10) {
        con = con + 1;
        res = num * con;
        multi += num+" x "+con+" = "+res+"\n";
    }
    return multi;
}