/**
 * Función para calcular el sueldo de una persona
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

const des = function(psal, ppen, parl, pret) {
    let sal = psal;
    let pen = ppen;
    let arl = parl;
    let ret = pret;
    let desc;
    desc = sal + pen + arl + ret;
    return desc;
}

const tot = function(psue, pdes, psubTrans) {
    let sue = psue;
    let des = pdes;
    let subTrans = psubTrans;
    let to;
    to = sue - des + subTrans;
    return to;
}

const subTra = function(psue){
    let sue= psue;
    let subTran = 0;
    if(sue<(2*1300000)){
        subTran = 114000;
    }else{
        subTran = 0;
    }
    return subTran;
}

const rete = function(psue){
    let sue = psue;
    let ret = 0;
    if(sue>(4*1300000)){
        ret = sue*0.04;
    }else{
        ret = 0;
    }
    return ret;
}