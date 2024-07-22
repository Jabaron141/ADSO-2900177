/**
 * Función para imprimir que número es el mayor de 3 números 
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const may = function(pnum1, pnum2, pnum3) {
    let num1 = pnum1;
    let num2 = pnum2;
    let num3 = pnum3;
    if (parseFloat(num1)==parseFloat(num2) && parseFloat(num1)==parseFloat(num3) && parseFloat(num2)==parseFloat(num3)) {
        return "los 3 números digitados son iguales";
    }
    else{
        if (parseFloat(num1)>parseFloat(num2) && parseFloat(num1)>parseFloat(num3)) {
            return num1;
        }
        else{
            if (parseFloat(num2)>parseFloat(num1) && parseFloat(num2)>parseFloat(num3)) {
                return num2;
            }
            else{
                return num3;
            }
        }
    }
}