document.body.addEventListener('keyup', (event) => {
    tocarSom(event.code.toLowerCase());
})

function tocarSom(tecla) {
    let somDaTecla = document.querySelector(`#s_${tecla}`);
    if (somDaTecla) {
        somDaTecla.currentTime = 0;
        somDaTecla.play();
    }
    mostrarTeclaPressionada(tecla);
}

function mostrarTeclaPressionada(teclaPressionada) {
    let tec = document.querySelector(`[data-key="${teclaPressionada}"]`);
    if (tec) {
        tec.classList.add('active');
        setTimeout(() => {
            tec.classList.remove('active');
        }, 300)
    }
}

document.querySelector('button').addEventListener('click', () => {
    let compo = document.querySelector('input').value;
    let compoArray = compo.split('');
    tocarComposicao(compoArray);
})

function tocarComposicao(composicao) {
    let wait = 0;
    for (let i of composicao) {
        setTimeout(() => {
            tocarSom(`key${i}`);
        }, wait)
        wait += 250;
    }
}