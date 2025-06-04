// Funções de formatação
function formatarNome(nome) {
  return nome
    .toLowerCase()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function formatarMoeda(valor) {
  return (
    "R$ " +
    Number(valor)
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
}

function formatarData(input) {
  input = input.replace(/[^\d]/g, "");
  let dia = input.substr(0, 2);
  let mes = input.substr(2, 2);
  let ano = input.substr(4);

  if (!ano) {
    ano = new Date().getFullYear();
  } else if (ano.length === 2) {
    ano = "20" + ano;
  }
  return `${dia.padStart(2, "0")}/${mes.padStart(2, "0")}/${ano}`;
}

function formatarJuros(juros) {
  juros = juros.toString().replace(",", ".");
  return parseFloat(juros).toFixed(1).replace(".", ",") + "%";
}

function formatarAgencia(agencia) {
  agencia = agencia.replace(/\D/g, "").slice(0, 5);
  return agencia.length === 5
    ? agencia.slice(0, 4) + "-" + agencia.slice(4)
    : agencia;
}

// Funções de validação
function obterNome(mensagem) {
  let nome;
  do {
    nome = prompt(mensagem).trim();
  } while (!/^[A-Za-zÀ-ú\s]{3,}$/.test(nome));
  return formatarNome(nome);
}

function obterValorMonetario(mensagem) {
  let valor;
  do {
    valor = prompt(mensagem).replace(",", ".");
  } while (isNaN(valor) || Number(valor) <= 0);
  return Number(valor);
}

function obterData(mensagem) {
  let data;
  do {
    data = prompt(mensagem).trim();
  } while (
    !/^\d{2,8}$/.test(data) &&
    !/^\d{2}[-/]\d{2}([-/]?\d{2,4})?$/.test(data)
  );
  return formatarData(data);
}

function obterJuros(mensagem) {
  let juros;
  do {
    juros = prompt(mensagem).replace(",", ".");
  } while (isNaN(juros) || Number(juros) <= 0);
  return formatarJuros(juros);
}

function obterAgencia(mensagem) {
  let agencia;
  do {
    agencia = prompt(mensagem).replace(/\D/g, "");
  } while (agencia.length < 4 || agencia.length > 5);
  return formatarAgencia(agencia);
}

// Retângulo
function Retangulo(x, y) {
  this.base = x;
  this.altura = y;
  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function calcularAreaRetangulo() {
  let base = obterValorMonetario(
    "Informe a base do retângulo em cm (ex: 10.5):"
  );
  let altura = obterValorMonetario(
    "Informe a altura do retângulo em cm (ex: 5.2):"
  );
  let ret = new Retangulo(base, altura);
  let area = ret.calcularArea();

  document.getElementById(
    "resultadoRetangulo"
  ).innerText = `Base: ${base} cm\nAltura: ${altura} cm\nÁrea: ${area.toFixed(
    2
  )} cm²`;
}

// Conta com herança
class Conta {
  constructor(nome, banco, numero, saldo) {
    this._nomeCorrentista = nome;
    this._banco = banco;
    this._numeroConta = numero;
    this._saldo = saldo;
  }
  get nomeCorrentista() {
    return this._nomeCorrentista;
  }
  get banco() {
    return this._banco;
  }
  get numeroConta() {
    return this._numeroConta;
  }
  get saldo() {
    return this._saldo;
  }
}

class Corrente extends Conta {
  constructor(nome, banco, numero, saldo, saldoEspecial) {
    super(nome, banco, numero, saldo);
    this._saldoEspecial = saldoEspecial;
  }
  get saldoEspecial() {
    return this._saldoEspecial;
  }
}

class Poupanca extends Conta {
  constructor(nome, banco, numero, saldo, juros, dataVencimento) {
    super(nome, banco, numero, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }
  get juros() {
    return this._juros;
  }
  get dataVencimento() {
    return this._dataVencimento;
  }
}

function cadastrarContas() {
  // Corrente
  let nomeCorrente = obterNome(
    "Digite o nome completo do correntista da CONTA CORRENTE:"
  );
  let bancoCorrente = prompt(
    "Digite o nome do banco da CONTA CORRENTE:"
  ).toUpperCase();
  let agenciaCorrente = obterAgencia(
    "Digite a agência da CONTA CORRENTE (4 ou 5 dígitos):"
  );
  let numeroContaCorrente = prompt("Digite o número da CONTA CORRENTE:").trim();
  let saldoCorrente = obterValorMonetario("Digite o saldo da CONTA CORRENTE:");
  let saldoEspecial = obterValorMonetario(
    "Digite o SALDO ESPECIAL da CONTA CORRENTE:"
  );

  let contaCorrente = new Corrente(
    nomeCorrente,
    bancoCorrente,
    numeroContaCorrente,
    saldoCorrente,
    saldoEspecial
  );

  // Poupança
  let nomePoupanca = obterNome(
    "Digite o nome completo do correntista da CONTA POUPANÇA:"
  );
  let bancoPoupanca = prompt(
    "Digite o nome do banco da CONTA POUPANÇA:"
  ).toUpperCase();
  let agenciaPoupanca = obterAgencia(
    "Digite a agência da CONTA POUPANÇA (4 ou 5 dígitos):"
  );
  let numeroContaPoupanca = prompt("Digite o número da CONTA POUPANÇA:").trim();
  let saldoPoupanca = obterValorMonetario("Digite o saldo da CONTA POUPANÇA:");
  let juros = obterJuros("Digite a taxa de juros da POUPANÇA em % ao mês:");
  let dataVencimento = obterData(
    "Digite a data de vencimento da POUPANÇA (ex: 12062072, 12/06, etc):"
  );

  let contaPoupanca = new Poupanca(
    nomePoupanca,
    bancoPoupanca,
    numeroContaPoupanca,
    saldoPoupanca,
    juros,
    dataVencimento
  );

  document.getElementById("resultadoContas").innerText =
    `=== Conta Corrente ===\n` +
    `Nome: ${contaCorrente.nomeCorrentista}\n` +
    `Banco: ${contaCorrente.banco}\n` +
    `Agência: ${agenciaCorrente}\n` +
    `Número: ${contaCorrente.numeroConta}\n` +
    `Saldo: ${formatarMoeda(contaCorrente.saldo)}\n` +
    `Saldo Especial: ${formatarMoeda(contaCorrente.saldoEspecial)}\n\n` +
    `=== Conta Poupança ===\n` +
    `Nome: ${contaPoupanca.nomeCorrentista}\n` +
    `Banco: ${contaPoupanca.banco}\n` +
    `Agência: ${agenciaPoupanca}\n` +
    `Número: ${contaPoupanca.numeroConta}\n` +
    `Saldo: ${formatarMoeda(contaPoupanca.saldo)}\n` +
    `Juros: ${contaPoupanca.juros}\n` +
    `Data de Vencimento: ${contaPoupanca.dataVencimento}`;
}
