/**
 * Función para obtener el sueldo ganado por un trabajador
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

const to = function(pvalDia, pdiaTra){
    let sueldo  = suel(pvalDia, pdiaTra);
    let descuento = desc(pvalDia, pdiaTra);
    let total;
    total = sueldo - descuento;
    return total;
}