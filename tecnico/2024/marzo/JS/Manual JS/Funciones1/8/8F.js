/**
 * Función para obtener el sueldo ganado por un trabajador
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function sue(pvalDia, pdiaTra) {
    let valDia = pvalDia;
    let diaTra = pdiaTra;
    let suel;
    suel = valDia * diaTra;
    return suel;
}

function sal(psue) {
    let sue = psue;
    let salu;
    salu = sue * 0.12;
    return salu;
}

function pen(psue) {
    let sue = psue;
    let pens;
    pens = sue * 0.16;
    return pens;
}

function arl(psue) {
    let sue = psue;
    let arL;
    arL = sue * 0.052;
    return arL;
}

function des(psal, ppen, parl) {
    let sal = psal;
    let pen = ppen;
    let arl = parl;
    let desc;
    desc = sal + pen + arl;
    return desc;
}

function tot(psue, pdes) {
    let sue = psue;
    let des = pdes;
    let to;
    to = sue - des;
    return to;
}