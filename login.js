function fazerLogin() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  // LOGIN GENÉRICO APENAS PARA TESTE
  if (usuario === "admin" && senha === "1234") {
      localStorage.setItem("usuarioLogado", "true"); // SALVA O LOGIN
      window.location.href = "index.html"; // REDIRECIONA PARA O ARQUIVO INDEX
  } else {
      alert("Usuário ou senha incorretos!");
  }
}

// VERIFICAÇÃO DE LOGIN DO USUÁRIO
if (localStorage.getItem("usuarioLogado") === "true") {
  window.location.href = "index.html"; // REDIRECIONA AUTOMATICAMENTE
}