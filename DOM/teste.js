document.querySelector("h1").addEventListener("mouseover", (ev) => {
    ev.target.innerText = "Novas descobertas são feitas ao Explorar";
});

document.querySelector("h1").addEventListener("mouseout", (ev) => {
    ev.target.innerText = "Novos valores e Propriedades de CSS";
});
