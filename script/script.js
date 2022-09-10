let linhaSelecionada = 1;
let palavraDoDia = "sorte";
let letras = [];
let letrasA = [];
let letrasP = [];
let palavraDigitada;
const submmit = () => {
    letras[0] = document.getElementById(`${linhaSelecionada}` + "1").value.toLowerCase();
    letras[1] = document.getElementById(`${linhaSelecionada}` + "2").value.toLowerCase();
    letras[2] = document.getElementById(`${linhaSelecionada}` + "3").value.toLowerCase();
    letras[3] = document.getElementById(`${linhaSelecionada}` + "4").value.toLowerCase();
    letras[4] = document.getElementById(`${linhaSelecionada}` + "5").value.toLowerCase();


    for (i = 0; i < letras.length; i++) {
        document.getElementById(`${linhaSelecionada}` + `${i + 1}`).style.backgroundColor = "red"
        document.getElementById(`${linhaSelecionada}` + `${i + 1}`).style.color = "white"
        for (j = 0; j < palavraDoDia.length; j++) {

            if (letras[i] === palavraDoDia[j]) {
                document.getElementById(`${linhaSelecionada}` + `${i + 1}`).style.backgroundColor = "yellow"
                document.getElementById(`${linhaSelecionada}` + `${i + 1}`).style.color = "black"
            }

            if (letras[i] === palavraDoDia[i]) {
                document.getElementById(`${linhaSelecionada}` + `${i + 1}`).style.backgroundColor = "green"
                document.getElementById(`${linhaSelecionada}` + `${i + 1}`).style.color = "white"
            }


        }
        palavraDigitada = letras.join("");


    }
    if (palavraDigitada === palavraDoDia) {
        document.getElementById("resultado").innerHTML = "<h1>Você acertou!! A palavra do dia é :" + `${palavraDoDia}` + "<h1>";

    } else {
        if (linhaSelecionada < 5) {
            ++linhaSelecionada
            document.getElementById("resultado").innerHTML = "<h1> Você tem mais " + `${6 - linhaSelecionada}` + " tentativas<h1>";
            ativarProximaLinha()
        } else {
            document.getElementById("resultado").innerHTML = "<h1>Boa tentativa<h1>";
        }

    }
}
const ativarProximaLinha = () => {
    //seleciona linha submetida
    letrasA[1] = document.getElementById(`${linhaSelecionada - 1}` + "1")
    letrasA[2] = document.getElementById(`${linhaSelecionada - 1}` + "2")
    letrasA[3] = document.getElementById(`${linhaSelecionada - 1}` + "3")
    letrasA[4] = document.getElementById(`${linhaSelecionada - 1}` + "4")
    letrasA[5] = document.getElementById(`${linhaSelecionada - 1}` + "5")
    //seleciona proxima linha
    letrasP[1] = document.getElementById(`${linhaSelecionada}` + "1")
    letrasP[2] = document.getElementById(`${linhaSelecionada}` + "2")
    letrasP[3] = document.getElementById(`${linhaSelecionada}` + "3")
    letrasP[4] = document.getElementById(`${linhaSelecionada}` + "4")
    letrasP[5] = document.getElementById(`${linhaSelecionada}` + "5")

    for (let i = 1; i <= 5; i++) {
        //desabilita linhas submetidas e ativa proxima  
        letrasA[i].disabled = true;
        letrasP[i].disabled = false;
    }
}