const comprarAtivo = document.querySelectorAll(".ativo");

if (comprarAtivo.length > 0) {
    comprarAtivo.forEach((i) => {
        i.addEventListener("mouseover", () => {
            i.style.background = "#2c70ff";
            i.style.color = "#ffffff";
        });
    });
    comprarAtivo.forEach((i) => {
        i.addEventListener("mouseout", () => {
            i.style.background = "#ffffff";
            i.style.color = "#000000";
        });
    });
} else {
    console.log("Elemento não encontrado.");
}

// --> Scroll Animado:

const sections = document.querySelectorAll(".scrollAnima");
function scrollAnime() {
    sections.forEach((se) => {
        var top = se.getBoundingClientRect().top;
        if (top < 600) {
            se.classList.add("scrollAtivo");
        }
    });
}

window.addEventListener("scroll", scrollAnime);
