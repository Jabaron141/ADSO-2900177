document.addEventListener('DOMContentLoaded', function() {
    let bingo = [];
    let nums = [];
    let cont = 0;
    let num_cuadro;
    let html_script = '';
    let letras_bingo = ['B', 'I', 'N', 'G', 'O'];

    console.log("\nBingo");
    for (let fila_num = 0; fila_num < 5; fila_num++) {
        nums = [];
        for (let col_num = 0; col_num < 5; col_num++) {
            cont += 1;
            num_cuadro = cont * 3;
            nums.push(num_cuadro);
        }
        bingo.push(nums);
    }
    console.log(bingo);

    for (let table_color = 0; table_color < 5; table_color++) {
        html_script += '<table class="table"><tr>';
        for (let columna = 0; columna < letras_bingo.length; columna++) {
            html_script += '<th class="borde color-letra">' + letras_bingo[columna] + '</th>';
        }
        html_script += '</tr>';
        for (let fila = 0; fila < 5; fila++) {
            html_script += '<tr>';
            for (let columna = 0; columna < 5; columna++) {
                if (columna === table_color) {
                    html_script += '<td class="borde color-1"><strong>' + bingo[fila][columna] + '</strong></td>';
                } else {
                    html_script += '<td class="borde">' + bingo[fila][columna] + '</td>';
                }
            }
            html_script += '</tr>';
        }
        html_script += '</table>';
    }

    html_script += '<table class="table"><tr>';
    for (let columna = 0; columna < letras_bingo.length; columna++) {
        html_script += '<th class="borde color-letra">' + letras_bingo[columna] + '</th>';
    }
    html_script += '</tr>';
    for (let fila = 0; fila < 5; fila++) {
        html_script += '<tr>';
        for (let columna = 0; columna < 5; columna++) {
            if (fila === columna || fila + columna === 4) {
                html_script += '<td class="borde color-1">' + bingo[fila][columna] + '</td>';
            } else {
                html_script += '<td class="borde">' + bingo[fila][columna] + '</td>';
            }
        }
        html_script += '</tr>';
    }
    html_script += '</table>';

    html_script += '<table class="table"><tr>';
    for (let columna = 0; columna < letras_bingo.length; columna++) {
        html_script += '<th class="borde color-letra">' + letras_bingo[columna] + '</th>';
    }
    html_script += '</tr>';
    for (let fila = 0; fila < 5; fila++) {
        html_script += '<tr>';
        for (let columna = 0; columna < 5; columna++) {
            if (fila <= 3 && columna >= 1 && columna <= 4 && fila % 2 === 0 && columna % 2 === 1) {
                html_script += '<td class="color-1 borde">' + bingo[fila][columna] + '</td>';
            } else if (fila <= 2 && columna >= 1 && columna <= 2 && fila % 2 === 1 && columna % 2 === 0) {
                html_script += '<td class="color-1 borde">' + bingo[fila][columna] + '</td>';
            } else if (fila >= 2 && columna <= 3 && fila % 2 === 0 && columna % 2 === 0) {
                html_script += '<td class="color-2 borde">' + bingo[fila][columna] + '</td>';
            } else if (fila >= 2 && columna <= 2 && fila % 2 === 1 && columna % 2 === 1) {
                html_script += '<td class="color-2 borde">' + bingo[fila][columna] + '</td>';
            } else if (fila >= 2 && columna >= 2 && fila % 2 === 0 && columna % 2 === 0) {
                html_script += '<td class="color-3 borde">' + bingo[fila][columna] + '</td>';
            } else if (fila >= 2 && columna >= 2 && fila % 2 === 1 && columna % 2 === 1) {
                html_script += '<td class="color-3 borde">' + bingo[fila][columna] + '</td>';
            } else {
                html_script += '<td class="borde">' + bingo[fila][columna] + '</td>';
            }
        }
        html_script += '</tr>';
    }
    html_script += '</table>';

    document.getElementById('bingo-1').innerHTML = html_script;
});