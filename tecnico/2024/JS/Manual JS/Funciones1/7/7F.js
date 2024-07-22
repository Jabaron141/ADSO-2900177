/**
 * Función para sacar el area de un cuadrado, rectangulo, y triangulo
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function arCuAndRec(paltRec, pbasRec) {
    let alt = paltRec;
    let bas = pbasRec;
    let arCuRec;
    arCuRec = alt * bas;
    return arCuRec;
}

function arTri(paltTri, pbasTri) {
    let alt = paltTri;
    let bas = pbasTri;
    let ar;
    ar = (alt * bas)/2;
    return ar;
}