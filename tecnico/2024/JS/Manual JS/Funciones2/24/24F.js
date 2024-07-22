/**
 * Función para hacer las tablas de multiplicar que desee el usuario hasta donde el usuario indique
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const mult = function(pnum1, pnum2){
    let num1 = pnum1;
    let num2 = pnum2;
    let con1=0;
    let par = 0;
    let imp = 0;
    let multi;
    let res="";
    while(con1 < num1){
        let con2 = 0
        con1 = con1+1;
        res += "\n  TABLA DEL "+con1+"\n";
        while(con2 < num2){
            con2 = con2+1;
            multi = con1*con2;
            res += con1+" x "+con2+" = "+multi+"\n";
            if(multi %2 == 0){
                par = par+1;
                res = res+"Buzz\n";
            }else{
                imp = imp+1
                res = res+"Bass\n";
            }
        }
    }
    return res+"\nhay "+par+" pares"+"\n"+"hay "+imp+" impares";
}