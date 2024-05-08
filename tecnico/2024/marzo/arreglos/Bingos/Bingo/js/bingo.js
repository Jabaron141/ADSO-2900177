let bingo = [];
let iteracion1;
let iteracion2;
let contador = 0;
let tabla;
let interno = [];

for (iteracion1 = 0; iteracion1<5; iteracion1++){
    interno = [];
    for (iteracion2 = 0; iteracion2<5; iteracion2++){
        contador = contador + 1;
        tabla = contador * 2;
        interno.push(tabla);
    }
    bingo.push(interno);
}

console.log(bingo)

console.log("Letra B \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][0]+ " ")
}

console.log("Letra I \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][1]+ " ")
}

console.log("Letra N \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][2]+ " ")
}

console.log("Letra G \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][3]+ " ")
}

console.log("Letra O \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][4]+ " ")
}


console.log("PRIMERA X \n");
for (iteracion1 = 0; iteracion1 < 3; iteracion1++){
  for (iteracion2 = 0; iteracion2 < 3; iteracion2++){
    if (iteracion1 %2 == 0 && iteracion2 %2 == 0){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else if (iteracion1 %2 == 1 && iteracion2 %2 == 1){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else{
      console.log(" ")
    } 
  }
}

console.log("SEGUNDA X \n");
for (iteracion1 = 0; iteracion1 < 3; iteracion1++){
  for (iteracion2 = 2; iteracion2 < 5; iteracion2++){
    if (iteracion1 %2 == 0 && iteracion2 %2 == 0){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else if (iteracion1 %2 == 1 && iteracion2 %2 == 1){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else{
      console.log(" ")
    } 
  }
}

console.log("TERCERA X \n");
for (iteracion1 = 2; iteracion1 < 5; iteracion1++){
  for (iteracion2 = 1; iteracion2 < 4; iteracion2++){
    if (iteracion1 %2 == 1 && iteracion2 %2 == 0){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else if (iteracion1 %2 == 0 && iteracion2 %2 == 1){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else{
      console.log(" ")
    } 
  }
}


console.log("X GRANDE \n")

for (iteracion1 = 0; iteracion1 < 5; iteracion1++){
  for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    if (iteracion1 %2 == 0 && iteracion2 %2 == 1){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else if (iteracion1 %2 == 1 && iteracion2 %2 == 0){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else{
      console.log(" ")
    } 
  }
}