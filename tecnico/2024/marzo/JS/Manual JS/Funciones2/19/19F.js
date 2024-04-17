/**
 * Función para hacer una tabla de multiplicar hasta 10 y decir si el resultado es par o impar
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const mult = function(pnum){
    let num = pnum;
    let con = 0;
    let res = 0;
    let multi = "";
    while (con < 5) {
        con = con + 1;
        multi = num * con;
        if(multi % 2 == 0){
            multi += res+" es par"+"\n";
        }else{
            multi += res+" es impar"+"\n";
        }
    }
    return multi;
}