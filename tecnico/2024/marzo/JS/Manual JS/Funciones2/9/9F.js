/**
 * Función para imprimir que número es mayor
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const may = function(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let res;
    if(num1 == num2){
        console.log(num1 + " y " + num2 + " son iguales");
    }
    else{
        if(num1 > num2){
            console.log(num1 + " es mayor que " + num2);
        }
        else{
            console.log(num2 + " es mayor que " + num1);
        }
    }
    return res;
}