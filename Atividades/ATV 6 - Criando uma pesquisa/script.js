const dados = [];

document
  .getElementById("surveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const opiniao = parseInt(document.getElementById("opiniao").value);

    dados.push({ idade, sexo, opiniao });

    atualizarResultados();
    document.getElementById("surveyForm").reset();
  });

function atualizarResultados() {
  if (dados.length === 0) return;

  const totalIdades = dados.reduce((acc, cur) => acc + cur.idade, 0);
  const mediaIdade = (totalIdades / dados.length).toFixed(2);

  const idadeMaisVelha = Math.max(...dados.map((p) => p.idade));
  const idadeMaisNova = Math.min(...dados.map((p) => p.idade));

  const pessimo = dados.filter((p) => p.opiniao === 1).length;
  const bomOtimo = dados.filter(
    (p) => p.opiniao === 3 || p.opiniao === 4
  ).length;
  const percentualBomOtimo = ((bomOtimo / dados.length) * 100).toFixed(2);

  const homens = dados.filter((p) => p.sexo === "Masculino").length;
  const mulheres = dados.filter((p) => p.sexo === "Feminino").length;
  const outros = dados.filter((p) => p.sexo === "Outros").length;

  document.getElementById("resultado").innerHTML = `
        <strong>Resultados até agora:</strong><br>
        - Média de idade: ${mediaIdade}<br>
        - Idade da pessoa mais velha: ${idadeMaisVelha}<br>
        - Idade da pessoa mais nova: ${idadeMaisNova}<br>
        - Quantidade de avaliações "Péssimo": ${pessimo}<br>
        - Porcentagem de avaliações "Bom" e "Ótimo": ${percentualBomOtimo}%<br>
        - Número de homens: ${homens}<br>
        - Número de mulheres: ${mulheres}<br>
        - Número de outros: ${outros}
      `;
}
