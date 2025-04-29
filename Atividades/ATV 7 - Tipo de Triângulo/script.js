function verificarTriangulo() {
  const a = parseFloat(document.getElementById("ladoA").value);
  const b = parseFloat(document.getElementById("ladoB").value);
  const c = parseFloat(document.getElementById("ladoC").value);
  const resultado = document.getElementById("resultado");
  const imagem = document.getElementById("imagemTriangulo");

  imagem.style.display = "none";
  imagem.src = "";

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultado.innerHTML = "Por favor, insira apenas números válidos.";
    imagem.src = "img/erro.png";
    imagem.alt = "Erro de entrada";
    imagem.style.display = "block";
    return;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    resultado.innerHTML =
      "Esses valores não formam um triângulo. A soma de dois lados deve ser sempre maior que o terceiro.";
    imagem.src = "img/invalido.png"; // imagem de triângulo impossível
    imagem.alt = "Triângulo inválido";
    imagem.style.display = "block";
    return;
  }
  let tipo = "";
  let explicacao = "";
  let imagemUrl = "";

  if (a === b && b === c) {
    tipo = "Equilátero";
    explicacao = "Todos os lados são iguais.";
    imagemUrl = "img/equilatero.png";
  } else if (a === b || a === c || b === c) {
    tipo = "Isósceles";
    explicacao = "Dois lados são iguais e um é diferente.";
    imagemUrl = "img/isosceles.png";
  } else {
    tipo = "Escaleno";
    explicacao = "Todos os lados têm medidas diferentes.";
    imagemUrl = "img/escaleno.png";
  }

  resultado.innerHTML = `Este é um triângulo <strong>${tipo}</strong>.<br>${explicacao}`;
  imagem.src = imagemUrl;
  imagem.alt = `Triângulo ${tipo}`;
  imagem.style.display = "block";
}
