/**
 * Función para calcular 3 edades, su promedio y si es mayor de edad o no
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const eda = function(pfecNa){
    let fecNa = pfecNa;
    let fecAc = 2024;
    let edad;
    edad = fecAc - fecNa;
    return edad;
}

const pro = function(peda1, peda2, peda3){
    let eda1 = peda1;
    let eda2 = peda2;
    let eda3 = peda3;
    let prom;
    prom = (eda1+eda2+eda3)/3;
    return prom;
}

const may = function(ped){
    let ed = ped;
    if (parseInt(ed)>17) {
        return "es mayor de edad";
    }
    else{
        return "es menor de edad";
    }
}