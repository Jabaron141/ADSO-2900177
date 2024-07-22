/**
 * Función para contar el número que ingrese el usuario
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function cont(pnum){
    let num = pnum;
    let con = 0;
    let res = "";
    while(con<num){
        con = con+1;
        res += con+"\n";
    }
    return res;
}