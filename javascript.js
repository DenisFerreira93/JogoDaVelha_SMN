
let i = 0;
const o = "1";
const x = "2";
var celulas = [, , , , , , , ,];
var fim = false;


function inicio(id, posicao) {
    if (fim != true) {

        let elemento = document.getElementById(id);


        if (!elemento.querySelector('img')) { // esse seletor de elementos, retorna o primeiro valor encontrado na variavel

            if (i % 2 == 0) { // se resto for igual a 0, marca X, resto 1 marca O
                elemento.innerHTML = '<img src="./img/xgreen.png">'
                i++
                celulas[posicao] = "1";


            } else {
                elemento.innerHTML = '<img src="./img/oicon.png">'
                i++;
                celulas[posicao] = "2";
            }


        }


        analise(); // chamando a função
    }

    function analise() {
        if (celulas[1] == celulas[2] && celulas[2] == celulas[3] && (celulas[1] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[1] == celulas[2] && celulas[2] == celulas[3] && (celulas[1] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (celulas[4] == celulas[5] && celulas[5] == celulas[6] && (celulas[4] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[4] == celulas[5] && celulas[5] == celulas[6] && (celulas[4] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (celulas[7] == celulas[8] && celulas[8] == celulas[9] && (celulas[7] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[7] == celulas[8] && celulas[8] == celulas[9] && (celulas[7] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (celulas[1] == celulas[4] && celulas[4] == celulas[7] && (celulas[1] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[1] == celulas[4] && celulas[4] == celulas[7] && (celulas[1] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (celulas[2] == celulas[5] && celulas[5] == celulas[8] && (celulas[2] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[2] == celulas[5] && celulas[5] == celulas[8] && (celulas[2] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (celulas[3] == celulas[6] && celulas[6] == celulas[9] && (celulas[3] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[3] == celulas[6] && celulas[6] == celulas[9] && (celulas[3] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (celulas[1] == celulas[5] && celulas[5] == celulas[9] && (celulas[1] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[1] == celulas[5] && celulas[5] == celulas[9] && (celulas[1] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (celulas[3] == celulas[5] && celulas[5] == celulas[7] && (celulas[3] == "1")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador X venceu");
            fim = true;
        } else if (celulas[3] == celulas[5] && celulas[5] == celulas[7] && (celulas[3] == "2")) {
            resultado = document.getElementById("resultado").innerHTML = ("jogador O venceu");
            fim = true;
        } else if (i == 9) {
            resultado = document.getElementById("resultado").innerHTML = ('<img src="./img/velhaPalmirinha.png">' + "Deu velha");
            fim = true;
        }
    }
}

function reseta() {

    let divPai = document.querySelectorAll('#tabuleiro'); // pega todos os elementos, com todas as consigurações de cada div
    let filhos = divPai[0].childNodes; // seleciona cada elemento filho do tabuleiro

    filhos.forEach(function (filho) { //forEach = faça para cada (filho)
        filho.innerHTML = "";
    });
    celulas = [, , , , , , , ,]; // reiniciando o vetor das celulas
    i = 0; // reiniciando o indice
    fim = false; // reinicia o boolean
    document.getElementById("resultado").innerHTML = ""; // reiniciar todas as casas do tabuleiro e a imagem da velha
}

