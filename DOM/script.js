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

// Modo noturno

const buttonNoturno = document.querySelector(".button-noturno");
const body = document.querySelector("body");

const tag_a = document.querySelectorAll(".ativo");
const tag_p = document.querySelectorAll(".p-noturno");
const tag_h1 = document.querySelectorAll("h1");
const tag_h2 = document.querySelectorAll("h2");
const tag_li = document.querySelectorAll("li");
const tag_span = document.querySelectorAll("span");

let night = false;
buttonNoturno.addEventListener("click", () => {
    if (night == false) {
        night = true;
        body.classList.add("night");

        tag_a.forEach((el) => {
            el.style.color = "black";
            el.style.background = "white";
        });
        tag_p.forEach((el) => {
            el.style.color = "#c5c4c4";
        });
        tag_h1.forEach((el) => {
            el.style.color = "#ffffff";
        });
        tag_h2.forEach((el) => {
            el.style.color = "#ffffff";
        });
        tag_li.forEach((el) => {
            el.style.color = "#c5c4c4";
        });
        tag_span.forEach((el) => {
            el.style.color = "#c5c4c4";
        });
    } else if (night == true) {
        night = false;
        body.classList.remove("night");

        tag_a.forEach((el) => {
            el.style.color = "#000000";
            el.style.border = "4px solid #000000";
        });
        tag_p.forEach((el) => {
            el.style.color = "#565656";
        });
        tag_h1.forEach((el) => {
            el.style.color = "#000000";
        });
        tag_h2.forEach((el) => {
            el.style.color = "#000000";
        });
        tag_li.forEach((el) => {
            el.style.color = "#7c7c7c";
        });
        tag_span.forEach((el) => {
            el.style.color = "#3f3f3f";
        });
    }
});
