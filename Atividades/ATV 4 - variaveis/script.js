let resultNome = prompt("Qual é o seu nome?");
let resultNota1 = parseFloat(prompt("Digite sua primeira nota:"));
let resultNota2 = parseFloat(prompt("Digite sua segunda nota:"));
let resultNota3 = parseFloat(prompt("Digite sua terceira nota:"));

let media = (resultNota1 + resultNota2 + resultNota3) / 3;
let resultadoFinal = `Aluno: ${resultNome} - Média das notas: ${media.toFixed(2)}`;

alert(resultadoFinal);
