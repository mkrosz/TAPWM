// 1. Retorna o maior de três números
function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

// 2. Retorna os três números em ordem crescente
function ordenarCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

// 3. Verifica se uma string é palíndromo
function ehPalindromo(str) {
  if (typeof str !== "string") return false;
  const limpa = str.replace(/\s+/g, "").toLowerCase();
  const invertida = limpa.split("").reverse().join("");
  return limpa === invertida;
}

// 4. Verifica se a segunda palavra é subconjunto da primeira
function verificaSubconjunto(palavra1, palavra2) {
  if (!palavra1 || !palavra2) return "erro";

  const normaliza = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  palavra1 = normaliza(palavra1);
  palavra2 = normaliza(palavra2);

  return palavra1.includes(palavra2)
    ? "é um subconjunto"
    : "não é um subconjunto";
}
