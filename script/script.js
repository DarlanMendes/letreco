let linhaSelecionada='1';
let palavraDoDia = "sorte";
let letras=[]

const submmit=()=>{
     letras[0] =document.getElementById(`${linhaSelecionada}`+"1").value.toLowerCase();
     letras[1] =document.getElementById(`${linhaSelecionada}`+"2").value.toLowerCase();
     letras[2] =document.getElementById(`${linhaSelecionada}`+"3").value.toLowerCase();
     letras[3] =document.getElementById(`${linhaSelecionada}`+"4").value.toLowerCase();
     letras[4] =document.getElementById(`${linhaSelecionada}`+"5").value.toLowerCase();
     console.log(letras)
     for (i=0; i<letras.length; i++){
        for(j=0;j<palavraDoDia.length;j++){
            if(letras[i]===palavraDoDia[j]){
                document.getElementById(`${linhaSelecionada }`+`${i+1}`).style.backgroundColor="yellow"
                document.getElementById(`${linhaSelecionada }`+`${i+1}`).style.color="black"
            }else{
                document.getElementById(`${linhaSelecionada }`+`${i+1}`).style.backgroundColor="red"
                document.getElementById(`${linhaSelecionada }`+`${i+1}`).style.color="white"
            }
            if(letras[i]===palavraDoDia[i]){
                document.getElementById(`${linhaSelecionada }`+`${i+1}`).style.backgroundColor="green"
                document.getElementById(`${linhaSelecionada }`+`${i+1}`).style.color="white"
            }
        }
        let palavraDigitada= letras.join("");
        if(palavraDigitada===palavraDoDia){
            document.getElementById("resultado").innerHTML="<h1>Você acertou!! A palavra do dia é :"+`${palavraDoDia}`+"<h1>";
        }else{
            document.getElementById("resultado").innerHTML="<h1>Boa tentativa<h1>";
        }

     }
     
}