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
