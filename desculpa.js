const elements = {
    sim: document.getElementById("opcyes"),
    nao: document.getElementById("opcNo"),
    fundo: document.getElementById("area"),
    resp: document.getElementById("textinho")
};

let estado = -1;
const transformacoes = [
    () => {
        elements.sim.style.transform = "translate(+95px)";
        elements.nao.style.transform = "translate(130px, -150px)";
    },
    () => { elements.nao.style.transform = "translate(130px, +150px)"; },
    () => { elements.nao.style.transform = "translate(-325px, +150px)"; },
    () => { elements.nao.style.transform = "translate(-325px, -150px)"; },
    () => { elements.nao.style.transform = "translate(+135px, +150px)"; },
    () => { elements.nao.style.transform = "translate(+135px, -150px)"; },
    () => { elements.nao.style.transform = "translate(-325px, +150px)"; },
    () => {
        elements.nao.style.transform = "translate(-325px, -150px)";
        estado = -1;
    }
];

// Comportamento do botão "Não" (fujão)
elements.nao.addEventListener("mouseenter", () => {
    estado = (estado + 1) % transformacoes.length;
    transformacoes[estado]();
});

// Comportamento do botão "Sim" (redirecionamento instantâneo)
elements.sim.addEventListener("click", () => {
    window.location.href = "sim.html";
});