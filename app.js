let listaDeNumerosAleatorios = [];
let limiteDeNumerosAleatorios = 50;
let quantidadeDeElementosNaLista = 0;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();


/* Funções */

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto 2.5');
    exibirTextoNaTela('p','Escolha um número entre 1 e 50');
};

function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if ( chute == numeroSecreto) {

        exibirTextoNaTela('h1','Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} tentativas`; 
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor e com o Tiozão não vai');
        } else {
            exibirTextoNaTela('p','o número secreto é maior e com o Tiozão não vai');
        }
        tentativas++;
        limparCampo();
    }

    
    console.log(chute == numeroSecreto);
    console.log('chute => ' + chute);
    console.log('numero secreto => ' + numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * limiteDeNumerosAleatorios) +1;
    let quantidadeDeElementosNaLista = listaDeNumerosAleatorios.length;

    if (quantidadeDeElementosNaLista == limiteDeNumerosAleatorios ) {
        quantidadeDeElementosNaLista = [];
    } 
    if ( listaDeNumerosAleatorios.includes(numeroEscolhido) ) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosAleatorios.push(numeroEscolhido);
        console.log('Lista de números aleatórios ' + listaDeNumerosAleatorios);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
