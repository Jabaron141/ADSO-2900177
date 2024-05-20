let arreglo = [];
let numeroDatos;
let iteracion;
let datosArreglo="";

arreglo = [2,4,6,8,10,12,14,16];

numeroDatos = arreglo.length;
console.log("Valores Iniciales: " + arreglo);
console.log("Numero de Datos: " + numeroDatos);

arreglo.push(18);
arreglo.push(20);
arreglo.push(22);

numeroDatos = arreglo.length;

console.log("Numero De Datos:" + arreglo);
console.log("Numero De Datos :" + numeroDatos);

for(iteracion=0; iteracion<numeroDatos; iteracion++){
    console.log("Datos "+ iteracion +": "+ arreglo[iteracion]);
    datosArreglo+="Datos "+ iteracion +": "+arreglo[iteracion]+"\n"; 
}
alert(datosArreglo);
