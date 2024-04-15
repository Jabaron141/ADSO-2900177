/**
 * Función para obtener el sueldo ganado por un trabajador
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const sue = function(pvalDia, pdiaTra) {
    let valDia = pvalDia;
    let diaTra = pdiaTra;
    let suel;
    suel = valDia * diaTra;
    return suel;
}

const sal = function(psue) {
    let sue = psue;
    let salu;
    salu = sue * 0.12;
    return salu;
}

const pen = function(psue) {
    let sue = psue;
    let pens;
    pens = sue * 0.16;
    return pens;
}

const arl = function(psue) {
    let sue = psue;
    let arL;
    arL = sue * 0.052;
    return arL;
}

const des = function(psal, ppen, parl) {
    let sal = psal;
    let pen = ppen;
    let arl = parl;
    let desc;
    desc = sal + pen + arl;
    return desc;
}

const tot = function(psue, pdes) {
    let sue = psue;
    let des = pdes;
    let to;
    to = sue - des;
    return to;
}