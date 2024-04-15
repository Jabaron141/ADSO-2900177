/**
 * Función para hacer las tablas de multiplicar que desee el usuario hasta donde el usuario indique
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

const mult = function(pnum1, pnum2){
    let num1 = pnum1;
    let num2 = pnum2;
    let res = 0;
    let par = 0;
    let imp = 0;
    let re;

    for (let con1 = 1; con1 <= num1; con1++) {
        console.log("TABLA DEL "+con1);
        for (let con2 = 1; con2 <= num2; con2++) {
            res = con1 * con2;
            console.log(con1+" x "+con2+" = "+res);
            if (res % 2 == 0) {
                par = par + 1;
                console.log("buzz");
            }
            else{
                imp = imp + 1;
                console.log("bass");
            }
        }
        console.log("");
    }
    console.log("Hay "+par+" resultados pares");
    console.log("Hay "+imp+" resultados impares");
    return re;
}