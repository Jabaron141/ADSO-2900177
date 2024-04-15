/**
 * Función para imprimir que número es mayor
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function may(pnum1,pnum2){
    let num1 = pnum1
    let num2 = pnum2
    if(num1 == num2){
        return "los valores ingresados son iguales";
    }
    else{
        if(num1 > num2){
            return num1;
        }
        else{
            return num2;
        }
    }
    
}