let buttom = document.querySelector('.buttom');
let shared = document.querySelector('.shared');

buttom.addEventListener('click', () => {

    if (shared.style.display == 'none') {
        shared.style.display = 'flex';
        /*
        Manipulando a cor de fundo do botão e do SVG quando clicado, como se fosse um :visited.
        */
        buttom.style.backgroundColor = 'hsl(214, 17%, 51%)';
        document.querySelector('.buttom img').style.filter = 'brightness(0) invert(1)';
    } else {
        shared.style.display = 'none';
        /*
       Manipulando a cor de fundo do botão e do SVG quando clicado, como se fosse um :visited.
       */
        buttom.style.backgroundColor = 'hsl(210, 46%, 95%)';
        document.querySelector('.buttom img').style.filter = 'brightness(1) invert(0)';
    }
});