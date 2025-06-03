function formatAltura(input) {
  let valor = input.value.replace(/\D/g, "");
  if (valor.length >= 3) {
    valor = valor.slice(0, 3);
    input.value = valor[0] + "," + valor.slice(1);
  } else {
    input.value = valor;
  }
}

function formatPeso(input) {
  let valor = input.value.replace(/\D/g, "");
  if (valor.length > 5) {
    valor = valor.slice(0, 5);
  }
  if (valor.length > 3) {
    input.value = valor.slice(0, valor.length - 2) + "," + valor.slice(-2);
  } else {
    input.value = valor;
  }
}

document.getElementById("altura").addEventListener("input", function () {
  formatAltura(this);
});

document.getElementById("peso").addEventListener("input", function () {
  formatPeso(this);
});

function calcularIMC() {
  let altura = document.getElementById("altura").value.replace(",", ".");
  let peso = document.getElementById("peso").value.replace(",", ".");

  if (!altura || !peso) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  altura = parseFloat(altura);
  peso = parseFloat(peso);

  const imc = peso / (altura * altura);
  const resultado = document.getElementById("resultado");
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Magreza (Grau 0)";
  } else if (imc < 25) {
    classificacao = "Normal (Grau 0)";
  } else if (imc < 30) {
    classificacao = "Sobrepeso (Grau I)";
  } else if (imc < 40) {
    classificacao = "Obesidade (Grau II)";
  } else {
    classificacao = "Obesidade Grave (Grau III)";
  }

  resultado.style.background = escolherCor(classificacao);
  resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}

function escolherCor(classificacao) {
  switch (classificacao) {
    case "Magreza (Grau 0)":
      return "#e0f7e9"; // verde bem claro
    case "Normal (Grau 0)":
      return "#b7efc5"; // verde pastel
    case "Sobrepeso (Grau I)":
      return "#9bf6ff"; // verde água
    case "Obesidade (Grau II)":
      return "#a8dadc"; // verde suave
    case "Obesidade Grave (Grau III)":
      return "#89c9b8"; // verde mais fechado
    default:
      return "#caffbf"; // verde claro padrão
  }
}
