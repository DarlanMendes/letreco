let linhaSelecionada = 1;
let colunaSelecionada = 1;
let palavraDoDia = ['s', 'o', 'r', 't', 'e'];
let letras = ['', '', '', '', ''];
let letrasA = [];
let letrasP = [];
let palavraDigitada;
let palavraDigitadaComparada;
let resultadoArea = document.getElementById("resultado");
let inputInicial = document

detectBrowser();

inputInicial.addEventListener("keyup", (e) => {
    let valorInputAtual = document.getElementById(`${linhaSelecionada}` + `${colunaSelecionada}`);

    if (e.key === 'Enter') {
        submmit();

    } else {
        if (e.key === 'Backspace') {

            valorInputAtual.value = '';
            colunaSelecionada > 1 && colunaSelecionada--;

        } else {
            if (valorInputAtual.value === '' && colunaSelecionada <= 5) {

                valorInputAtual.value = e.key
            }
            if (colunaSelecionada < 5) {
                colunaSelecionada++
            }

            //console.log(e)
        }

    }


})

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
            resultadoArea.style.color = "white"
        } else {
            if (linhaSelecionada < 5) {
                ++linhaSelecionada;
                colunaSelecionada = 1;
                if (6 - linhaSelecionada > 1) {
                    resultadoArea.innerHTML = "<div> Você tem mais " + `${6 - linhaSelecionada}` + " tentativas<div>"
                } else {
                    resultadoArea.innerHTML = "<div> Você tem mais 1 tentativa<div>"
                }

                ativarProximaLinha();
            } else {
                resultadoArea.innerHTML = "<div>Boa tentativa<div>";
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
function detectBrowser() {

    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else if (userAgent.match(/android/i)) {
        browserName = "Android";
    } else if (userAgent.match(/iphone/i)) {
        browserName = "iPhone";
    } else {
        browserName = "Unknown";
    }
    alert(browserName)
    console.log('navegador é:',browserName);
}