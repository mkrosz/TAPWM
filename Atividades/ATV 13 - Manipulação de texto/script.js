function converterTexto(tipo) {
  const textoInput = document.getElementById("textoInput");
  if (textoInput) {
    if (tipo === "maiusculas") {
      textoInput.value = textoInput.value.toUpperCase();
    } else if (tipo === "minusculas") {
      textoInput.value = textoInput.value.toLowerCase();
    }
  }
}
