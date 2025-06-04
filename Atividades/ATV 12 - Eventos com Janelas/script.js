const janela = document.getElementById("janela");
const statusText = document.getElementById("status");
const martelo = document.getElementById("martelo");
const iniciarBtn = document.getElementById("iniciar");
const overlay = document.getElementById("overlay");

let estado = "fechada";
let interacaoLiberada = false;

const imagens = {
  fechada: "img/janela-fechada.png",
  aberta: "img/janela-aberta.png",
  quebrada: "img/janela-quebrada.png",
};

const somAbrir = new Audio("som/abrindo.mp3");
const somFechar = new Audio("som/fechando.mp3");
const somQuebrar = new Audio("som/quebrando.mp3");
const somConsertar = new Audio("som/consertando.mp3");

iniciarBtn.addEventListener("click", () => {
  interacaoLiberada = true;
  overlay.style.display = "none";
  console.log("Interação liberada! Sons podem ser reproduzidos.");
});

janela.addEventListener("mouseenter", () => {
  if (!interacaoLiberada) return;

  if (estado === "fechada") {
    janela.src = imagens.aberta;
    janela.classList.add("abrindo");
    statusText.textContent = "Janela Aberta";

    somAbrir.currentTime = 0;
    somAbrir.play();
  }
});

janela.addEventListener("mouseleave", () => {
  if (!interacaoLiberada) return;

  if (estado === "fechada") {
    janela.src = imagens.fechada;
    janela.classList.remove("abrindo");
    statusText.textContent = "Janela Fechada";

    somFechar.currentTime = 0;
    somFechar.play();
  }
});

janela.addEventListener("click", () => {
  if (!interacaoLiberada) return;

  if (estado !== "quebrada") {
    estado = "quebrada";
    janela.src = imagens.quebrada;
    janela.classList.remove("abrindo");
    janela.classList.add("quebrando");
    statusText.textContent = "Janela Quebrada";

    somQuebrar.currentTime = 0;
    somQuebrar.play();
  }
});

martelo.addEventListener("dragstart", (e) => {
  if (!interacaoLiberada) {
    e.preventDefault();
    return;
  }
  e.dataTransfer.setData("text/plain", "martelo");
});

janela.addEventListener("dragover", (e) => {
  if (!interacaoLiberada) return;

  if (estado === "quebrada") {
    e.preventDefault();
  }
});

janela.addEventListener("drop", (e) => {
  if (!interacaoLiberada) return;

  e.preventDefault();
  if (estado === "quebrada") {
    consertarJanela();
  }
});

function consertarJanela() {
  janela.classList.remove("quebrando");
  janela.classList.add("consertando");
  somConsertar.currentTime = 0;
  somConsertar.play();
  statusText.textContent = "Consertando Janela...";


  somConsertar.onended = () => {
    janela.classList.remove("consertando");
    estado = "fechada";
    janela.src = imagens.fechada;
    statusText.textContent = "Janela Fechada";

    somConsertar.onended = null;
  };
}
