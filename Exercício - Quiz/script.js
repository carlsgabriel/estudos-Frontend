let questaoAtual = 0;

function mostrarConteudo() {
    if (questions[questaoAtual]) {
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.questionArea .question').innerHTML = questions[questaoAtual].question;
        let option = '';
        for (let i in questions[questaoAtual].options) {
            option += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${questions[questaoAtual].options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = option;

        document.querySelectorAll('.option').forEach((item) => {
            item.addEventListener('click', opcaoClicada);
        });

        let pctBarra = (questaoAtual / questions.length) * 100;
        document.querySelector('.progress--bar').style.width = `${pctBarra}%`;
    } else {
        finalizarQuiz();
    }
}



mostrarConteudo();



let audioAcertou = document.querySelector('#audio-acertou');
let audioErrou = document.querySelector('#audio-errou');

let opcoesCorretas = 0;

function opcaoClicada(event) {
    let opClicada = parseInt(event.target.getAttribute('data-op'));

    if (questions[questaoAtual].answer === opClicada) {
        opcoesCorretas++;
        if (audioAcertou) {
            audioErrou.pause();
            audioAcertou.currentTime = 0;
            audioAcertou.play();
        }
    } else {
        if (audioErrou) {
            audioAcertou.pause();
            audioErrou.currentTime = 0;
            audioErrou.play();
        }
    }

    questaoAtual++;
    mostrarConteudo();
}


let audioNota10 = document.querySelector('#audio-nota10');
let audioNotaAcima7 = document.querySelector('#audio-notaAcima7');
let audioNotaAbaixo7 = document.querySelector('#audio-notaAbaixo7');
let audioNota0 = document.querySelector('#audio-nota0');

let pctUsuario = 0;

function finalizarQuiz() {
    let pctUsuario = (opcoesCorretas / questions.length) * 100;

    document.querySelector('.progress--bar').style.width = '100%';

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

    let congrats = '';
    if (opcoesCorretas == 0) {
        audioErrou.pause();
        audioAcertou.pause();
        audioNota0.play();
        congrats = 'Você sabe o que é JavaScript?';
    } else if (opcoesCorretas > 0 && opcoesCorretas < 7) {
        audioErrou.pause();
        audioAcertou.pause();
        audioNotaAbaixo7.play();
        congrats = 'Infelizmente você não atingiu a média...';
    } else if (opcoesCorretas >= 7 && opcoesCorretas < 10) {
        audioErrou.pause();
        audioAcertou.pause();
        audioNotaAcima7.play();
        congrats = 'Parabéns!'
    } else {
        audioErrou.pause();
        audioAcertou.pause();
        audioNota10.play();
        congrats = 'Parabens, você tirou a nota máxima!'
    }
    document.querySelector('.scoreText1').innerHTML = congrats;
    document.querySelector('.scorePct').innerHTML = `Acertou ${pctUsuario}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu 10 questões e acertou ${opcoesCorretas}.`;
}



document.querySelector('button').addEventListener('click', resetarQuiz);

function resetarQuiz() {
    questaoAtual = 0;
    opcoesCorretas = 0;
    pctUsuario = 0;

    document.querySelector('.progress--bar').style.width = '0%';

    mostrarConteudo();
}