// 1º Jeito de criar objeto (Objeto Literal)
const Funcionario1 = {
  Matricula: "12345",
  Nome: "Mike Franguelli",
  Funcao: "UX/UI Designer",
};

alert(
  "Forma 1:\nMatrícula: " +
    Funcionario1.Matricula +
    "\nNome: " +
    Funcionario1.Nome +
    "\nFunção: " +
    Funcionario1.Funcao
);

// 2º jeito de criar objeto (new Object())
const Funcionario2 = new Object();
Funcionario2.Matricula = "67890";
Funcionario2.Nome = "Daniel Almeida";
Funcionario2.Funcao = "Desenvolvedor Back-End";

alert(
  "Forma 2:\nMatrícula: " +
    Funcionario2.Matricula +
    "\nNome: " +
    Funcionario2.Nome +
    "\nFunção: " +
    Funcionario2.Funcao
);

// 3º jeito de criar objeto (Função Construtora)
function Funcionario(matricula, nome, funcao) {
  this.Matricula = matricula;
  this.Nome = nome;
  this.Funcao = funcao;
}

const Funcionario3 = new Funcionario(
  "11223",
  "Laura Lacerda",
  "Engenheira de Software"
);

alert(
  "Forma 3:\nMatrícula: " +
    Funcionario3.Matricula +
    "\nNome: " +
    Funcionario3.Nome +
    "\nFunção: " +
    Funcionario3.Funcao
);
