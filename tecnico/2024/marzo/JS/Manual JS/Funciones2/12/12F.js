/**
 * Función para calcular el area de 3 cuadrados e imprimir cuál tiene el mayor area
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const are = function(plad){
    let lad = plad;
    let ar;
    ar = lad * lad;
    return ar;
}

const may = function(pcu1, pcu2, pcu3){
    let cu1 = pcu1;
    let cu2 = pcu2;
    let cu3 = pcu3;

    if (cu1==cu2 && cu1==cu3 && cu2==cu3) {
        return "ERROR SON IGUALES";
    }
    else{
        if (cu1>cu2 && cu1>cu3) {
            return cu1;
        }
        else{
            if (cu2>cu1 && cu2>cu3) {
                return cu2;
            }
            else{
                return cu3;
            }
        }
    }
}