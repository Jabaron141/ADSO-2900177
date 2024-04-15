/**
 * Función para hacer una tabla de multiplicar hasta 10 y decir si el resultado es par o impar
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function mult(pnum){
    let num = pnum;
    let con = 0;
    let res = 0;
    let re;
    
    while (con<10) {
        con = parseInt(con) + 1;
        res = parseFloat(num)*parseFloat(con);
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