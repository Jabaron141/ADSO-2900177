/**
 * Función para hacer el factorial del número que sea ingresado
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function fact(pnum){
    let num = pnum;
    let con = 0;
    let fac = 1;
    let res;

    while (con<num) {
        con = parseInt(con) + 1;
        console.log(fac+" x "+con);
        fac = parseFloat(fac)*parseFloat(con);
    }
    console.log("El factorial de "+num+" es "+fac);

    return res;
}