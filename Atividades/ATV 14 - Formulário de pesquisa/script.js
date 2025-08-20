function showMessage(message, type = "info") {
  const msgBox = document.getElementById("message-box");
  msgBox.textContent = message;
  msgBox.style.display = "block";
  msgBox.style.backgroundColor = type === "error" ? "#fecaca" : "#d1fae5";
  msgBox.style.color = type === "error" ? "#7f1d1d" : "#10b981";
  msgBox.style.borderColor = type === "error" ? "#fca5a5" : "#6ee7b7";
}

function validar() {
  document.getElementById("message-box").style.display = "none";

  const formulario = document.meuFormulario;

  const nomeInput = formulario.elements.nome;
  if (nomeInput.value.length < 10) {
    showMessage("O campo Nome deve ter no mínimo 10 caracteres.", "error");
    nomeInput.focus();
    return false;
  }

  const emailInput = formulario.elements.email;
  if (
    emailInput.value.indexOf("@") === -1 ||
    emailInput.value.indexOf(".") === -1
  ) {
    showMessage("Por favor, insira um endereço de e-mail válido.", "error");
    emailInput.focus();
    return false;
  }

  const comentarioInput = formulario.elements.comentario;
  if (comentarioInput.value.length < 20) {
    showMessage(
      "O campo Comentário deve ter no mínimo 20 caracteres.",
      "error"
    );
    comentarioInput.focus();
    return false;
  }

  const pesquisaRadios = document.getElementsByName("pesquisa");
  let pesquisaSelecionada = false;
  let mensagemPesquisa = "";

  for (const radio of pesquisaRadios) {
    if (radio.checked) {
      pesquisaSelecionada = true;
      if (radio.value === "sim") {
        mensagemPesquisa = "Volte sempre à esta página!";
      } else {
        mensagemPesquisa = "Que bom que você voltou a visitar esta página!";
      }
      break;
    }
  }

  if (!pesquisaSelecionada) {
    showMessage("Por favor, responda à pesquisa para continuar.", "error");
    return false;
  }

  showMessage(mensagemPesquisa, "success");

  return false;
}
