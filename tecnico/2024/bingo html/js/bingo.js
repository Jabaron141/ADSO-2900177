/**
 * Jorge A. Baron C.
 * 22/07/2024
 * bingo js
 */

document.addEventListener('DOMContentLoaded', function(){
    let bingo = [];
    let letras = ['B', 'I', 'N', 'G', 'O'];
    let printResultado = '';

    for(let i = 0; i < 5; i++) {
        let interno = [];
        for(let j = 0; j < 5; j++) {
            interno.push((i * 5 + j + 1) * 3);
        }
        bingo.push(interno);
    }

    function crearTabla(condiciones) {
        let tabla = '<table class="table"><tr>';
        for (let letra of letras) {
            tabla += '<th class="borde color-letra">' + letra + '</th>';
        }
        tabla += '</tr>';
        for(let i = 0; i < 5; i++) {
            tabla += '<tr>';
            for(let j = 0; j < 5; j++) {
                let claseExtra = '';
                if (condiciones(i, j)) {
                    claseExtra = ' color-1';
                }
                tabla += '<td class="borde' + claseExtra + '">' + bingo[i][j] + '</td>';
            }
            tabla += '</tr>';
        }
        tabla += '</table>';
        return tabla;
    }

    printResultado += crearTabla(() => false);

    for (let i = 0; i < 5; i++) {
        printResultado += crearTabla((x, y) => x === i && x === y);
    }

    printResultado += crearTabla((x, y) => x === y || x + y === 4);

    printResultado += crearTabla((x, y) => 
        (x <= 3 && y >= 1 && y <= 4 && x % 2 === 0 && y % 2 === 1) ||
        (x <= 2 && y >= 1 && y <= 2 && x % 2 === 1 && y % 2 === 0) ||
        (x >= 2 && y <= 3 && x % 2 === 0 && y % 2 === 0) ||
        (x >= 2 && y <= 2 && x % 2 === 1 && y % 2 === 1) ||
        (x >= 2 && y >= 2 && x % 2 === 0 && y % 2 === 0) ||
        (x >= 2 && y >= 2 && x % 2 === 1 && y % 2 === 1)
    );

    document.getElementById('bingo-1').innerHTML = printResultado;
});
