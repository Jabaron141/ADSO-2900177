/**
 * Función para imprimir que número es el mayor de 3 números 
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function may(pnum1, pnum2, pnum3) {
    let num1 = pnum1;
    let num2 = pnum2;
    let num3 = pnum3;
    if (parseFloat(num1)==parseFloat(num2) && parseFloat(num1)==parseFloat(num3) && parseFloat(num2)==parseFloat(num3)) {
        return "los 3 números digitados son iguales";
    }
    else{
        if (parseFloat(num1)>parseFloat(num2) && parseFloat(num1)>parseFloat(num3)) {
            console.log("el número "+num1+" es el mayor de los 3 números");
        }
        else{
            if (parseFloat(num2)>parseFloat(num1) && parseFloat(num2)>parseFloat(num3)) {
                console.log("el número "+num2+" es el mayor de los 3 números");
            }
            else{
                console.log("el número "+num3+" es el mayor de los 3 números");
            }
        }
    }
}