let palavras = ['sorte', 'termo', 'nobre', 'assim', 'morte', 'vidas', 'audaz']
let linhaSelecionada = 1;
let colunaSelecionada = 1;
let palavraDoDia = palavras[Math.floor(Math.random() * palavras.length)].split('')
let letras = ['', '', '', '', ''];
let letrasA = [];
let letrasP = [];
let palavraDigitada;
let palavraDigitadaComparada;
let resultadoArea = document.getElementById("resultado");
let inputInicial = document
let podeDigitar = true;



inputInicial.addEventListener("keyup", (e) => {
    let letraTeclado = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    for (let l = 0; l < letraTeclado.length; l++) {
        if (letraTeclado[l] === e.key) {
            digitarLetra(e.key);
        }
    }
    if (e.key === 'Enter' || e.key === 'Backspace') {
        digitarLetra(e.key);
    }


})
const backspace = () => {
    let valorInputAtual = document.getElementById(`${linhaSelecionada}` + `${colunaSelecionada}`);
    valorInputAtual.value = '';
    colunaSelecionada > 1 && colunaSelecionada--;
}
const digitarLetra = (valorDigitado) => {
    if (podeDigitar) {
        let valorInputAtual = document.getElementById(`${linhaSelecionada}` + `${colunaSelecionada}`);

        if (valorDigitado === 'Enter') {
            submmit();

        } else {
            if (valorDigitado === 'Backspace') {

                backspace();

            } else {
                if (valorInputAtual.value === '' && colunaSelecionada <= 5) {

                    valorInputAtual.value = valorDigitado
                }
                if (colunaSelecionada < 5) {
                    colunaSelecionada++
                }

                //console.log(e)
            }

        }

    }

}

const submmit = () => {
    if (linhaSelecionada < 6) {
        letras.map((item, col) => {
            letras[col] = document.getElementById(`${linhaSelecionada}` + `${col + 1}`).value.toLowerCase();
            document.getElementById(`${linhaSelecionada}` + `${col + 1}`).style.backgroundColor = "red";
            document.getElementById(`${linhaSelecionada}` + `${col + 1}`).style.color = "white";
            palavraDoDia.map((letra) => {

                if (letras[col] === letra) {
                    document.getElementById(`${linhaSelecionada}` + `${col + 1}`).style.backgroundColor = "yellow";
                    document.getElementById(`${linhaSelecionada}` + `${col + 1}`).style.color = "black";
                }
            })
            palavraDigitada = letras.join("")
            if (letras[col] === palavraDoDia[col]) {
                document.getElementById(`${linhaSelecionada}` + `${col + 1}`).style.backgroundColor = "green";
                document.getElementById(`${linhaSelecionada}` + `${col + 1}`).style.color = "white";
            }

        })
        palavraDoDiaComparada = palavraDoDia.join("");
        console.log(palavraDoDiaComparada, palavraDigitada)
        if (palavraDigitada === palavraDoDiaComparada) {

            resultadoArea.innerHTML = "<div>Você acertou!! A palavra do dia é :" + `${palavraDoDiaComparada.toUpperCase()}` + "<h1>";
            resultadoArea.style.backgroundColor = "green";
            resultadoArea.style.color = "white";
            podeDigitar=false;
        } else {
            if (linhaSelecionada < 5) {
                ++linhaSelecionada;
                colunaSelecionada = 1;
                if (6 - linhaSelecionada > 1) {
                    resultadoArea.innerHTML = "<div> Você tem mais " + `${6 - linhaSelecionada}` + " tentativas<div>";
                } else {
                    resultadoArea.innerHTML = "<div> Você tem mais 1 tentativa<div>"
                }

                ativarProximaLinha();
            } else {
                resultadoArea.innerHTML = "<div>Boa tentativa<div>";
                podeDigitar=false;
            }

        }
    }
}
const ativarProximaLinha = () => {
    letras.map((item, col) => {
        //seleciona linha submetida
        letrasA[col] = document.getElementById(`${linhaSelecionada - 1}` + `${col + 1}`);
        //seleciona proxima linha
        letrasP[col] = document.getElementById(`${linhaSelecionada}` + `${col + 1}`);
        //desabilita linhas submetidas e ativa proxima  
        letrasA[col].disabled = true;
        letrasP[col].disabled = false;
    })

}
