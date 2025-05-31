// Função para embaralhar um array
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Exercício 1
function calcularNumeros() {
  const input = document.getElementById("inputNumeros").value;
  const numeros = input.split(",").map(Number);

  if (numeros.length !== 3 || numeros.some(isNaN)) {
    document.getElementById("resultado1").innerText =
      "Por favor, insira exatamente 3 números válidos.";
    return;
  }

  const soma = numeros.reduce((acc, val) => acc + val, 0);
  const quadrado1 = numeros[0] ** 2;
  const quadrado2 = numeros[1] ** 2;

  document.getElementById(
    "resultado1"
  ).innerHTML = `A <span class="destaque">soma</span> dos três números é: <span class="destaque">${soma}</span>
        O <span class="destaque">quadrado</span> do primeiro (${numeros[0]}) é: <span class="destaque">${quadrado1}</span>
        O <span class="destaque">quadrado</span> do segundo (${numeros[1]}) é: <span class="destaque">${quadrado2}</span>`;
}

// Exercício 2
function gerarPalavras() {
  const input = document.getElementById("inputLetras").value;
  const letras = input.split(",").map((l) => l.trim().toUpperCase());

  if (
    letras.length !== 5 ||
    letras.some((l) => l.length !== 1 || !/^[A-Z]$/.test(l))
  ) {
    document.getElementById("resultado2").innerText =
      "Por favor, insira exatamente 5 letras de A a Z.";
    return;
  }

  const palavras = new Set();

  function combinar(arr) {
    while (palavras.size < 10) {
      const embaralhado = embaralhar([...arr]);
      const palavra = embaralhado.join("");
      palavras.add(palavra);
    }
  }

  combinar.apply(null, [letras]);

  document.getElementById(
    "resultado2"
  ).innerHTML = `<span class="destaque">10 palavras formadas:</span> ${Array.from(
    palavras
  ).join(", ")}`;
}
