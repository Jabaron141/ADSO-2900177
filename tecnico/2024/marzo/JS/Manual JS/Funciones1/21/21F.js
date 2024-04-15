/**
 * Función para hacer el factorial del número ingresado
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function fact(pnum){
    let num = pnum;
    let fac = 1;
    let res;

    for (let con = 1; con <= num; con++) {
        console.log(fac+" x "+con);
        fac = parseFloat(fac)*parseFloat(con);
    }
    console.log("El factorial de "+num+" es "+fac);
    return res;
}