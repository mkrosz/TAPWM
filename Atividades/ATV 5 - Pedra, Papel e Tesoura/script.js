let pontosHumano = 0;
let pontosComputador = 0;
let jogoAtivo = true;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function jogar(escolhaHumano) {
  if (!jogoAtivo) return; // Impede múltiplos cliques
  jogoAtivo = false; // Desativa o jogo até a rodada acabar
  toggleBotoes(false); // Desativa botões visivelmente

  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  const maoHumano = document.getElementById("img-humano");
  const maoComputador = document.getElementById("img-computador");
  const resultadoHumano = document.getElementById("resultado-humano");
  const resultadoComputador = document.getElementById("resultado-computador");

  // Limpa antes
  maoHumano.src = `assets/pedra.png`;
  maoComputador.src = `assets/pedra.png`;
  resultadoHumano.textContent = "";
  resultadoComputador.textContent = "";

  const mensagem = document.getElementById("mensagem-jokenpo");

  for (const palavra of ["JÔ", "QUEM", "PÔ!"]) {
    mensagem.textContent = palavra;

    // Remove qualquer classe anterior (pra reiniciar a animação)
    maoHumano.classList.remove("sacudir-uma-invertido");
    maoComputador.classList.remove("sacudir-uma");

    // Força reflow (pra reiniciar a animação)
    void maoHumano.offsetWidth;

    // Adiciona novamente
    maoHumano.classList.add("sacudir-uma-invertido");
    maoComputador.classList.add("sacudir-uma");

    await delay(700);
  }

  // Exibe imagens das mãos
  maoHumano.src = `assets/${escolhaHumano}.png`;
  maoComputador.src = `assets/${escolhaComputador}.png`;

  let resultado = "";

  if (escolhaHumano === escolhaComputador) {
    resultado = "Empate!";
  } else if (
    (escolhaHumano === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaHumano === "papel" && escolhaComputador === "pedra") ||
    (escolhaHumano === "tesoura" && escolhaComputador === "papel")
  ) {
    resultado = "Você venceu!";
    pontosHumano++;
    resultadoHumano.textContent = "Vencedor";
    resultadoHumano.className = "resultado vencedor";
    resultadoComputador.textContent = "Perdedor";
    resultadoComputador.className = "resultado perdedor";
  } else {
    resultado = "Computador venceu!";
    pontosComputador++;
    resultadoHumano.textContent = "Perdedor";
    resultadoHumano.className = "resultado perdedor";
    resultadoComputador.textContent = "Vencedor";
    resultadoComputador.className = "resultado vencedor";
  }

  document.getElementById("pontos-humano").textContent = pontosHumano;
  document.getElementById("pontos-computador").textContent = pontosComputador;

  mensagem.textContent = `Você escolheu ${escolhaHumano}, computador escolheu ${escolhaComputador}. ${resultado}`;

  await delay(100); // Dá um tempinho pro jogador respirar

  jogoAtivo = true; // Libera para a próxima jogada
  toggleBotoes(true); // Reativa os botões
}

function toggleBotoes(ativar) {
  const botoes = document.querySelectorAll(".botoes button");
  botoes.forEach((btn) => (btn.disabled = !ativar));
}
