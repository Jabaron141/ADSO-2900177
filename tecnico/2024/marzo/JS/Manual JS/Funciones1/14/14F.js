/**
 * Función para calcular el sueldo de una persona
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

function des(psal, ppen, parl, pret) {
    let sal = psal;
    let pen = ppen;
    let arl = parl;
    let ret = pret;
    let desc;
    desc = sal + pen + arl + ret;
    return desc;
}

function tot(psue, pdes, psubTrans) {
    let sue = psue;
    let des = pdes;
    let subTrans = psubTrans;
    let to;
    to = sue - des + subTrans;
    return to;
}

function subTra(psue){
    let sue= psue;
    let subTran = 0;
    if(sue<(2*1300000)){
        subTran = 114000;
    }
    return subTran;
}

function rete(psue){
    let sue= psue;
    let ret= 0;
    if(sue>(4*1300000)){
        ret=sue*0.04;
    }
    return ret;
}