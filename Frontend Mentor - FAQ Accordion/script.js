const buttons = document.querySelectorAll(".faq-ask img");
const asks = document.querySelectorAll(".faq-ask span");
const responses = document.querySelectorAll(".faq-response");



buttons.forEach((value, index) => {
    value.addEventListener("click", () => {
        let button = buttons[index];
        let resp = responses[index];

        if (resp.classList.contains("hidden")) {
            resp.classList.toggle("hidden");
            button.setAttribute("src", "assets/images/icon-minus.svg");
        } else {
            resp.classList.toggle("hidden");
            button.setAttribute("src", "assets/images/icon-plus.svg");
        }
    })
});

asks.forEach((value, index) => {
    value.addEventListener("click", () => {
        let button = buttons[index];
        let resp = responses[index];

        if (resp.classList.contains("hidden")) {
            resp.classList.toggle("hidden");
            button.setAttribute("src", "assets/images/icon-minus.svg");
        } else {
            resp.classList.toggle("hidden");
            button.setAttribute("src", "assets/images/icon-plus.svg");
        }
    })
});