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

/*
Estou pegando todas as peças da bateria para poder fazer com que o toque reproduza seus sons.
Peguei todas as divs que tinham a classe key e fiz um forEach em nelas.
O forEach vai ser o seguinte: Adicione um evento de clique para todos os itens. (Para fazer isso o forEach tem que ter acesso aos itens, ou seja, ter o primeiro parâmetro)
Como o valor da data-key das minhas divs são: key"algo", dá pra usar perfeitamente em tocarSom, que precisa de um key"algo" tambem...
Logo, dá pra chamar tocarSom() com o valor dessa variável que foi clicada.
*/
document.querySelectorAll('.key').forEach((value) => {
    value.addEventListener('click', () => {
        const tecla = value.getAttribute('data-key');
        tocarSom(tecla);
    });
});
