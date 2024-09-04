//Selecionando os elementos que vão ser manipulados
let mostradorDigital = document.querySelector('.digital');
let ponteiroSegundo = document.querySelector('.p_s');
let ponteiroMinuto = document.querySelector('.p_m');
let ponteiroHora = document.querySelector('.p_h');
let body = document.querySelector('body');

/*
Função responsável por mostrar as horas na tela
*/
function atualizarHora() {
    let horarioAtual = new Date();
    let milisegundoAtual = horarioAtual.getMilliseconds();
    let segundoAtual = horarioAtual.getSeconds();
    let minutoAtual = horarioAtual.getMinutes();
    let horaAtual = horarioAtual.getHours();

    //Manipular o background do body para que ele mude de acordo com a hora.
    if(horaAtual > 6 && horaAtual < 12){
        body.style.background = 'linear-gradient(to bottom,#87CEEB,#B0E0E6)';
    } else if (horaAtual < 18){
        body.style.background = 'linear-gradient(to bottom, #87CEFA, #FFB6C1, #FF8C00);';
    } else {
        body.style.background = 'linear-gradient(to bottom, #000033, #000000)';
        document.querySelector('h1').style.color = '#FFF';
        document.querySelector('.digital').style.color = '#FFF';
    }

    //Adicionando as horas, minutos e segundo no mostrador digital.
    mostradorDigital.innerHTML = `${adicionarZero(horaAtual)}:${adicionarZero(minutoAtual)}:${adicionarZero(segundoAtual)}`;

    /*
    O calculo aqui é o seguinte:
    O circulo tem 360 graus
    360(graus) dividido por 60(segundos) -> 6
    360(graus) dividido por 60(minutos) -> 6
    360(graus) dividido por 12(horas) -> 30         OBS: foi 12 porque no relógio só há 12 ponteiros para referenciar as horas
    ou seja, 1 segundo e minuto significam 6 graus no circulo, 1 hora significa 30 graus.

    tem que ser inserido o "-90" porque a posição 0deg no rotate() fica no ponteiro das 3 horas no relógio, quando você usa o -90 ele vai pro 12 certinho.

    segundosEmGraus na verdade está contando os milisegundos.
    6/1000 porque um segundo tem 1000 milisegundos.
    */
    let segundosEmGraus = ((6 * segundoAtual) + (milisegundoAtual * (6 / 1000)) - 90) - 1;
    let minutosEmGraus = (6 * minutoAtual) - 90;
    let horasEmGraus = (30 * horaAtual) - 90;
    ponteiroSegundo.style.transform = `rotate(${segundosEmGraus}deg)`;
    ponteiroMinuto.style.transform = `rotate(${minutosEmGraus}deg)`;
    ponteiroHora.style.transform = `rotate(${horasEmGraus}deg)`;
}

/*
Ao inserir apenas as horas, minutos e segundos no mostradorDigital, quando o tempo for menor que 10 ele mostrará em apenas em 1 caractere...
Essa propriedade é responsável por adicionar o 0 quando o tempo for menor que 10.
*/
function adicionarZero(tempo) {
    if (tempo < 10) {
        return `0${tempo}`;
    } else {
        return tempo;
    }
}

/*
setInterval para atualizar as horas na tela infinitamente no período de tempo especificado.
atualizarHora() para iniciar a página já mostrando a hora.
*/
setInterval(atualizarHora, 10);
atualizarHora();