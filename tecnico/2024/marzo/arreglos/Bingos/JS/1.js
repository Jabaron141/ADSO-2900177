let arregloNumero = [];
let arregloFrutas = [];
let iteracion;
let sizeArrayNumeros;
let sizeArrayFrutas;

arregloNumero = [2,4,6,8,10,12,14,16,18];
arregloFrutas = ['Mora','Piña','Fresa','Limón','Naranja','Guanabana'];

sizeArrayNumeros = arregloNumero.length;
sizeArrayFrutas = arregloFrutas.length;

console.log("Arreglo de Numeros: "+arregloNumero);
console.log("Arreglo de Frutas: "+arregloFrutas);
console.log("Mostrar Fruta: "+arregloFrutas[3]);
console.log("Mostrar Numero: "+arregloNumero[6]);

for (iteracion = 0; iteracion<sizeArrayNumeros; iteracion++){
    console.log("Numeros "+iteracion+": "+arregloNumero[iteracion]);
}

let matriz = [];
let sizeMatriz;
let sizeInterno;

matriz = [
    [2,3,4,5],
    [9,8,7, "Hola"],
    [3,5,7,8,9]
];

sizeMatriz = matriz.length

console.log("MATRIZ");
console.log(matriz);

for (let iteracion1 = 0; iteracion1<sizeMatriz; iteracion1++){
    sizeInterno = matriz[iteracion1].length
    for (let iteracion2 = 0; iteracion2<sizeInterno; iteracion2++){
        console.log("Numeros "+iteracion2+": "+matriz[iteracion1][iteracion2]);
    }
}