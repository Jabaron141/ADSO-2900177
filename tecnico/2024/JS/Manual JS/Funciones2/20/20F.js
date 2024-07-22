/**
 * Función para contar hasta el número ingresado
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const cont = function(pnum){
    let num = pnum;
    let res = "";
    for(let con = 1; con <= num; con++){
        res += con+"\n";
    }
    return res;
}