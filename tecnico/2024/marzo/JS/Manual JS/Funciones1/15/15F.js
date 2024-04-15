/**
 * Función para calcular la nota de una persona
 * Autor: Jorge Baron Corredor
 * Fecha: Lunes 01 de abril de 2024
*/

function not(pnot1, pnot2, pnot3){
    let not1 = pnot1;
    let not2 = pnot2;
    let not3 = pnot3;
    let por1 = parseFloat(not1) * 0.3;
    let por2 = parseFloat(not2) * 0.3;
    let por3 = parseFloat(not3) * 0.4;
    let suma = parseFloat(por1) + parseFloat(por2) + parseFloat(por3);
    let res;

    console.log("El la primer nota (" + not1 + ") con su respectivo porcentaje es " + por1 + "\n");
    console.log("El la segunda nota (" + not2 + ") con su respectivo porcentaje es " + por2 + "\n");
    console.log("El la tercer nota (" + not3 + ") con su respectivo porcentaje es " + por3 + "\n");
    console.log("Su nota final es de " + suma + "\n");
    if (suma>4.5) {
        console.log("Su nota es superior");
    }
    else{
        if (suma<=4.5 && suma>3.5) {
            console.log("Su nota es buena");
        }
        else{
            if (suma<=3.5 && suma>3) {
                console.log("Su nota es media");
            }
            else{
                console.log("Su nota es mala");
            }
        }
    }

    return res; 
}