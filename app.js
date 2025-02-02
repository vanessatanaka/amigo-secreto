//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lAmigos = [];


function fAdicionarAmigo() {
    amigo = document.querySelector('input').value;
    if(amigo != ""){
        if(lAmigos.includes(amigo)) {
            fLimparCampoAmigo();
            return fAdicionarAmigo();        
        }
        else {
            lAmigos.push(amigo);
            fAtualizarLAmigos();
            console.log(lAmigos);
            fLimparCampoAmigo();
            return amigo;
        }
    }
    else {
        alert("Por favor, insira um nome.");
    }    
}


function fLimparCampoAmigo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}


function fAtualizarLAmigos() {
    document.getElementById('listaAmigos').innerHTML = lAmigos.map(amigo=>`<li>${amigo}</li>`).join('');
}


function fSortearAmigo(){
    if(lAmigos != '') {
        amigoSorteado = lAmigos[Math.floor(Math.random() * lAmigos.length)];
        console.log(amigoSorteado);
        //Chamei a função fAtualizarLAmigos, mas não funcionou. Como fazer para exibir o resultado na tela com a função que criei?
        //Coloquei fAtualizarLAmigos(amigoSorteado) e fAtualizarLAmigos(), mas não deu certo.
        document.getElementById('listaAmigos').innerHTML = amigoSorteado;  
    }
    else {
        alert("Por favor, insira um nome.");        
    }     
}