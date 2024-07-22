/**
 * Función para obtener el sueldo ganado por un trabajador
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

function to(pvalDia, pdiaTra){
    let sueldo = suel(pvalDia, pdiaTra);
    let descuento = desc(pvalDia, pdiaTra);
    let total;
    total = sueldo - descuento;
    return total;
}