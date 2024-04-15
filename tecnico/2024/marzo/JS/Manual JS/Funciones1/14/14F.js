/**
 * Función para calcular el sueldo de una persona
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function to(pvalDia, pdiaTra){
    let valDia = pvalDia;
    let diaTra = pdiaTra;
    let sue = parseFloat(valDia) * parseFloat(diaTra);
    let sal = parseFloat(sue) * 0.12;
    let pen = parseFloat(sue) * 0.16;
    let arl = parseFloat(sue) * 0.052;
    let salMin = 1300000;
    let ret = 0;
    let subTra = 0;
    let res;

    if (sue<(2*salMin)) {
        subTra = subTra+114000;
        console.log("El valor del subsidio de transporte que se le agrega es de " + subTra + "$\n");
    }
    if (sue>(4*salMin)) {
        ret = sue*0.04;
        console.log("El descuento por retención es " + ret + "$\n");
    }
    let des = parseFloat(sal) + parseFloat(pen) + parseFloat(arl) + parseFloat(ret);
    let tot = parseFloat(sue) + parseFloat(subTra) - parseFloat(des);

    console.log("El descuento de salud es " + sal + "$\n");
    console.log("El descuento de pension es " + pen + "$\n");
    console.log("El descuento de la arl es " + arl + "$\n");
    console.log("El sueldo sin descuento es de " + sue + "$\n");
    console.log("El sueldo total es de " + tot + "$\n");

    return res; 
}