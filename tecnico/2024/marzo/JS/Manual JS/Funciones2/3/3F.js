/**
 * Función para hcer la resta, multiplicación y división de dos números
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

let numUno;
let numDos;

const suma = function(pnumUno,pnumDos){
    let sumar;
    numUno = pnumUno;
    numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar
}
const rest = function(pnumUno,pnumDos){
    let restar;
    numUno = pnumUno;
    numDos = pnumDos;
    restar = numUno - numDos;
    return restar
}
const mult = function(pnumUno,pnumDos){
    let multiplicar;
    numUno = pnumUno;
    numDos = pnumDos;
    multiplicar = numUno * numDos;
    return multiplicar
}
const div = function(pnumUno,pnumDos){
    let dividir;
    numUno = pnumUno;
    numDos = pnumDos;
    dividir = numUno / numDos;
    return dividir
}
const ope = function(pope,pnumUno,pnumDos){
    let ope = pope
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