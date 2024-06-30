//botão necessário para adicionar o evento de click
const submit = document.querySelector(".button span");


//evento de click
submit.addEventListener("click", () => {

    /*
    selected -> valor que foi selecionado no input. o :checked faz isso.
    thanksresp -> seleciona a resposta da página de agradecimentos
    */
    const selected = document.querySelector('input[name="nota"]:checked');
    const thanksresp = document.querySelector('.section-response .response');
    const section = document.querySelector("section");
    const main = document.querySelector("main");
    

    /*
    se o botão for selecionado:
    o texto da resposta de agradecimento vai mudar já com o valor do input que foi selecionado.
    se a section fiver invisivel, torne-a visivel e deixe o main invisivel
    
    */
    if(selected){
        thanksresp.innerText = `You selected ${selected.getAttribute("value")} out of 5`;
        if(section.classList.contains("hidden")){
            section.classList.toggle("hidden");
            main.classList.toggle("hidden");
        };
    };
});
