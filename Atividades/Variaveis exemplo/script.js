// VARIÁVEIS I

/* VARIAVEIS GLOBAIS */

var resultado;
var resultado2; /* sem atribuição fica UNDEFINED */
var resultado3;
var resultado4;
var resultado5 = "Conteúdo 5";
var resultado6 = "Conteúdo 6";

resultado = prompt("Qual é o seu nome?");

var teste = function () {
  var resultado6 = "nao adianta mudar";
  /* assume como a global já existente */

  resultado5; /* está local */

  resultado7 =
    "dentro da função"; /* não existe global com esse nome, SEM VAR fica acessível globalmente */

  resultado3 = "mudei dentro da função"; /* usando variável global */
  resultado5 = "Conteúdo 5 na função";
  return "resultado da função";
};

resultado4 = teste(); /* atribuindo resultado da função */

resultado7 = "fora da função";

alert(
  "resultado=" +
    resultado +
    " \n resultado2=" +
    resultado2 +
    " \n resultado3=" +
    resultado3 +
    " \n resultado4 =" +
    resultado4 +
    " \n resultado5 =" +
    resultado5 +
    " \n resultado6 =" +
    resultado6 +
    " \n resultado7 =" +
    resultado7
);

// VARIÁVEIS II

/* VARIAVEIS GLOBAIS */

var cidade = "SOROCABA"; /** aspas duplas ou simples **/
var estado = "SP";
var nome1 = "\n Antonio"; /* passa para outra linha */
var nome2 = "\n João";
var nome3 = "\r Carlos"; /* return */
var nome4 = null;
var nome5 = "\\ Maria";
var nome6 = "\xAE Bia";
var nome7 = "\u00AE Lia";

alert(
  cidade +
    nome1 +
    nome2 +
    nome3 +
    "\n" +
    nome4 +
    "\n" +
    nome5 +
    "\n" +
    nome6 +
    "\n" +
    nome7 +
    "\n fim"
);

var i = 1 + "2" + 3;

for (j = 0; j < 10; j++) {
  alert("Resultado=" + (i + j));

  if (j == 5) {
    break;
  }
}
alert("Resultado=" + (i + j));

// VARIÁVEIS III

let nomeCliente = "João Carlos"; //string

let alunoBolsista = true; //boolean

let intNum = 55; // inteiro

let octalNum1 = 0o70; //octal para 56 (INICIA POR ZERO)
let x = 0o1;
let y = 0o7;

let hexNum1 = 0xa; //hexadecimal para 10 //precedido de 0x

let binNum1 = 0b01010; //binário precedido de 0b

let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = 0.1; //válido, mas não recomendado

alert(
  "intNum=" +
    intNum +
    "   octalNum1=" +
    octalNum1 +
    "   hexNum1=" +
    hexNum1 +
    "  binNum1=" +
    binNum1 +
    "  FloatNum3=" +
    floatNum3 +
    "x=" +
    x +
    " y=" +
    y
);

// VARIÁVEIS VI

let frase = "Boa noite, alunos!!!";

alert("Comprimento=" + frase.length);

alert("Caracter na posição 10>> " + frase.charAt(9)); /* , */

alert("Fazendo replace de alunos>> " + frase.replace("alunos", "queridos"));

alert("Tudo para Maiúsculo>> " + frase.toUpperCase());

/** pegando da posição 0 até a posição 9*/
alert("Pegando partes da frase>> " + frase.substring(0, 9));

/** se não for especificado o segundo parâmetro, pega da posição 9 até o fim **/

alert("Procurando posição noite: " + frase.lastIndexOf("noite"));

// VARIÁVEIS V

function mostratexto() {
  texto1 = "ESTE É O TEXTO 1";

  if (true) var texto2 = "ESTE É O TEXTO 2";

  console.log(texto1);
  console.log(texto2);
  console.log(mensagem1);

  var mensagem1;
}

mostratexto();
