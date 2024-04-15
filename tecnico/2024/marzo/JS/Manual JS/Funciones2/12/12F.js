/**
 * Función para calcular el area de 3 cuadrados e imprimir cuál tiene el mayor area
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const may = function(pl1, pl2, pl3){
    let l1 = pl1;
    let l2 = pl2;
    let l3 = pl3;
    let cu1 = l1 * l1;
    let cu2 = l2 * l2;
    let cu3 = l3 * l3;
    let res;

    if (cu1==cu2 && cu1==cu3 && cu2==cu3) {
        console.log("los 3 cuadrados tienen la misma area");
    }
    else{
        if (cu1>cu2 && cu1>cu3) {
            console.log("el primer cuadrado con un lado de "+l1+" unidades y un area de "+cu1+" es el mayor de los 3 cuadrados");
        }
        else{
            if (cu2>cu1 && cu2>cu3) {
                console.log("el segundo cuadrado con un lado de "+l2+" unidades y un area de "+cu2+" es el mayor de los 3 cuadrados");
            }
            else{
                console.log("el tercer cuadrado con un lado de "+l3+" unidades y un area de "+cu3+" es el mayor de los 3 cuadrados");
            }
        }
    }

    return res; 
}