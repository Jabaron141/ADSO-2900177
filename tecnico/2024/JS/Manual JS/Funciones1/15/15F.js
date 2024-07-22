/**
 * Función para calcular la nota de una persona
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function pornot(pnot, pporc) {
    let not = pnot;
    let porce = pporc;
    let rnot;
    rnot = not * porce;
    return rnot;
}

function suma(pnumUno, pnumDos, pnumTre) {
    let numUno = pnumUno;
    let numDos = pnumDos;
    let numTre = pnumTre;
    let sumar;
    sumar = numUno + numDos + numTre;
    return sumar;
}

function may(psuma){
    let suma = psuma;
    if (suma>4.5) {
        return "Su nota final es superior";
    }
    else{
        if (suma<=4.5 && suma>3.5) {
            return "Su nota final es buena";
        }
        else{
            if (suma<=3.5 && suma>3) {
                return "Su nota final es media";
            }
            else{
                return "Su nota final es mala";
            }
        }
    }
}