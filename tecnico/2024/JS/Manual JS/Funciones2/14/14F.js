/**
 * Función para calcular el sueldo de una persona
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const suel = function(pvalDia, pdiaTra) {
    let valDia = pvalDia;
    let diaTra = pdiaTra;
    let su = diaTra * valDia;
    return   su;
}


const salu = function(pvalDia, pdiaTra) {
    let sa = suel(pvalDia, pdiaTra) * 0.12;
    return sa;
}

const pens = function(pvalDia, pdiaTra) {
    let pe = suel(pvalDia, pdiaTra) * 0.16;
    return pe;
}

const Arl = function(pvalDia, pdiaTra) {
    let ar = suel(pvalDia, pdiaTra) * 0.052;
    return ar;
}


const desc = function(pvalDia, pdiaTra){
    let salud = salu(pvalDia, pdiaTra);
    let pension = pens(pvalDia, pdiaTra);
    let arl = Arl(pvalDia, pdiaTra);
    let de;
    de = salud + pension + arl;
    return de;
}

const subTrans = function(pvalDia, pdiaTra){
    let subTra = 0;
    if(suel(pvalDia, pdiaTra) < (2*1300000)){
        subTra = subTra + 114000;
    }else{
        subTra = subTra + 0;
    }
    return subTra;
}

const rete = function(pvalDia, pdiaTra){
    let reten = 0;
    if(suel(pvalDia, pdiaTra)>(4*1300000)){
        reten = suel(pvalDia, pdiaTra) * 0.04;
    }else{
        reten = reten + 0;
    }
    return reten;
}

const to = function(pvalDia, pdiaTra){
    let sueldo = suel(pvalDia, pdiaTra);
    let subTransporte = subTrans(pvalDia, pdiaTra);
    let descuento = desc(pvalDia, pdiaTra);
    let retencion = rete(pvalDia, pdiaTra);
    let total;
    total = (sueldo + subTransporte) - (descuento + retencion);
    return total;
}