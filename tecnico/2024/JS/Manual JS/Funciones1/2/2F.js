/**
 * Función para sumar dos números
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

let numUno;
let numDos;

function suma(pnumUno,pnumDos){
    let sumar;
    numUno = pnumUno;
    numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar;
}

function rest(pnumUno,pnumDos){
    let restar;
    numUno = pnumUno;
    numDos = pnumDos;
    restar = numUno - numDos;
    return restar;
}

function mult(pnumUno,pnumDos){
    let multiplicar;
    numUno = pnumUno;
    numDos = pnumDos;
    multiplicar = numUno * numDos;
    return multiplicar;
}

function div(pnumUno,pnumDos){
    let dividir;
    numUno = pnumUno;
    numDos = pnumDos;
    dividir = numUno / numDos;
    return dividir;
}

function ope(pope,pnumUno,pnumDos){
    let ope = pope;
    numUno = pnumUno;
    numDos = pnumDos;
    if(ope=="suma"){
        return suma(numUno,numDos);
    }
    else if(ope=="rest"){
        return rest(numUno,numDos);
    }
    else if(ope=="mult"){
        return mult(numUno,numDos);
    }  
    else if(ope=="div"){
        return div(numUno,numDos);
    }
    else{
        return "Error!!! no reconoce operador";
    }
}