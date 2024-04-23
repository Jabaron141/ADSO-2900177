/**
 * Función para calcular el sueldo de una persona
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function suel(pvalDia, pdiaTra) {
    let valDia = pvalDia;
    let diaTra = pdiaTra;
    let su = diaTra * valDia;
    return   su;
}

function salu(pvalDia, pdiaTra) {
    let sa = suel(pvalDia, pdiaTra) * 0.12;
    return sa;
}

function pens(pvalDia, pdiaTra) {
    let pe = suel(pvalDia, pdiaTra) * 0.16;
    return pe;
}

function Arl(pvalDia, pdiaTra) {
    let ar = suel(pvalDia, pdiaTra) * 0.052;
    return ar;
}

function desc(pvalDia, pdiaTra){
    let salud = salu(pvalDia, pdiaTra);
    let pension = pens(pvalDia, pdiaTra);
    let arl = Arl(pvalDia, pdiaTra);
    let de;
    de = salud + pension + arl;
    return de;
}

function subTrans(pvalDia, pdiaTra){
    let subTra = 0;
    if(suel(pvalDia, pdiaTra) < (2*1300000)){
        subTra = subTra + 114000;
    }else{
        subTra = subTra + 0;
    }
    return subTra;
}

function rete(pvalDia, pdiaTra){
    let reten = 0;
    if(suel(pvalDia, pdiaTra)>(4*1300000)){
        reten = suel(pvalDia, pdiaTra) * 0.04;
    }else{
        reten = reten + 0;
    }
    return reten;
}

function to(pvalDia, pdiaTra){
    let sueldo = suel(pvalDia, pdiaTra);
    let subTransporte = subTrans(pvalDia, pdiaTra);
    let descuento = desc(pvalDia, pdiaTra);
    let retencion = rete(pvalDia, pdiaTra);
    let total;
    total = (sueldo + subTransporte) - (descuento + retencion);
    return total;
}