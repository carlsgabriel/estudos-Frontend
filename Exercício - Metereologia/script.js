document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let data = document.querySelector('#searchInput').value;
    if (data !== '') {
        limparInfos();
        mensagem('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(data)}&appid=a3ad8700c8a4563718f6b9da0513e365&units=metric&lang=pt_br`;
        let req = await fetch(url);
        let json = await req.json();
        console.log(json);

        if (json.cod === 200) {
            mensagem('');
            mostrarInfos(json);
            console.log(json.weather[0].description);
        } else {
            limparInfos();
            mensagem('A cidade inserida está incorreta ou não existe.');
            document.querySelector('body').style.backgroundImage = 'none';
        }

    } else {
        limparInfos();
        document.querySelector('body').style.backgroundImage = 'none';
    }
})

function mensagem(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function limparInfos() {
    mensagem('');
    document.querySelector('.resultado').style.display = 'none';
}

function mostrarInfos(json) {
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
        if (json.weather[0].description == 'céu limpo') {
            document.querySelector('body').style.backgroundImage = `url('imgs/ceu-limpo.jpg')`;
        } else if (json.weather[0].description == 'chuva moderada') {
            document.querySelector('body').style.backgroundImage = `url('imgs/chuva-moderada.jpg')`;
        } else if (json.weather[0].description == 'chuva leve') {
            document.querySelector('body').style.backgroundImage = `url('imgs/chuva-leve.jpg')`;
        } else if (json.weather[0].description == 'névoa') {
            document.querySelector('body').style.backgroundImage = `url('imgs/nevoa.jpg')`;
        } else if (json.weather[0].description == 'nuvens dispersas') {
            document.querySelector('body').style.backgroundImage = `url('imgs/nuvens-esparsas.jpg')`;
        } else if (json.weather[0].description == 'algumas nuvens') {
            document.querySelector('body').style.backgroundImage = `url('imgs/poucas-nuvens.jpeg')`;
        } else if (json.weather[0].description == 'nublado') {
            document.querySelector('body').style.backgroundImage = `url('imgs/nublado.jpg')`;
        } else if (json.weather[0].description == 'chuva forte') {
            document.querySelector('body').style.backgroundImage = `url('imgs/chuva-forte.jpg')`;
        } else if (json.weather[0].description == 'neblina') {
            document.querySelector('body').style.backgroundImage = `url('imgs/neblina.jpg')`;
        } else {
            document.querySelector('body').style.backgroundImage = `url('imgs/tempestade.webp')`;
        }
   
    document.querySelector('.titulo').innerHTML = `<div class="titulo">${json.name}, ${json.sys.country}</div>`;
    document.querySelector('.tempInfo').innerHTML = `<div class="tempInfo">${json.main.temp} <sup>ºC</sup></div>`;
    document.querySelector('.iconLegend').innerHTML = `<div class="iconLegend">${json.weather[0].description}</div>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
    document.querySelector('.ventoInfo').innerHTML = `<div class="ventoInfo">${json.wind.speed} <span>km/h</span></div>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.wind.deg - 90}deg)`;



    document.querySelector('.resultado').style.display = 'block';
}