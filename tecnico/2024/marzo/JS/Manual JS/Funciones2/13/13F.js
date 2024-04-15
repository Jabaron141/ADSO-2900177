/**
 * Función para calcular 3 edades, su promedio y si es mayor de edad o no
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const ed = function(pfecNa1, pfecNa2, pfecNa3){
    let fecNa1 = pfecNa1;
    let fecNa2 = pfecNa2;
    let fecNa3 = pfecNa3;
    let fecAc = 2024;
    let eda1 = fecAc - fecNa1;
    let eda2 = fecAc - fecNa2;
    let eda3 = fecAc - fecNa3;
    let pro = (eda1+eda2+eda3)/3;
    let res;

    if (eda1>17) {
        console.log("la primera persona con una edad de "+eda1+" es mayor de edad");
    }
    else{
        console.log("la primera persona con una edad de "+eda1+" es menor de edad");
    }
    if (eda2>17) {
        console.log("la segunda persona con una edad de "+eda2+" es mayor de edad");
    }
    else{
        console.log("la segunda persona con una edad de "+eda2+" es menor de edad");
    }
    if (eda3>17) {
        console.log("la tercera persona con una edad de "+eda3+" es mayor de edad");
    }
    else{
        console.log("la tercera persona con una edad de "+eda3+" es menor de edad");
    }
    if (pro>17) {
        console.log("el promedio de las 3 edades no supera la mayoria de edad");
    }
    else{
        console.log("el promedio de las 3 edades supera la mayoria de edad");
    }

    return res; 
}