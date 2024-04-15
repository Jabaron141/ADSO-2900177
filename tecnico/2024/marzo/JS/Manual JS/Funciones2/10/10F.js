/**
 * Función para saber la edad de una persona
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const ed = function(pfecNa) {
    let fecNa = pfecNa;
    let fecAc = 2024;
    let eda = parseInt(fecAc) - parseInt(fecNa);
    let res;
    if(eda > 17){
        console.log("Usted tiene " + eda + " años y es mayor de edad");
    }
    else{
        console.log("Usted tiene " + eda + " años y es menor de edad");
    }
    return res;
}