// ADICIONAR UM LIVRO
async function adicionarLivro() {
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;

  if (titulo && autor) {
      let response = await fetch("http://127.0.0.1:8000/livros/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ titulo, autor })
      });

      let data = await response.json();
      alert(data.mensagem); // Exibe a mensagem de sucesso

      listarLivros(); // Atualiza a lista de livros na tela
  } else {
      alert("Preencha todos os campos!");
  }
}
// EDITAR UM LIVRO
async function editarLivro(livroId) {
    let titulo = prompt("Novo título do livro:");
    let autor = prompt("Novo autor do livro:");

    if (titulo && autor) {
        let response = await fetch(`http://127.0.0.1:8000/livros/${livroId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, autor })
        });

        let data = await response.json();
        alert(data.mensagem); // Exibe mensagem de sucesso

        listarLivros(); // Atualiza a lista na tela
    } else {
        alert("Preencha todos os campos!");
    }
}
// LISTAR LIVROS
async function listarLivros() {
        let response = await fetch("http://127.0.0.1:8000/livros/");
        let livros = await response.json();
    
        let lista = document.getElementById("lista-livros");
        lista.innerHTML = ""; // Limpa a lista antes de adicionar os itens
    
        livros.forEach((livro, index) => {
            let item = document.createElement("li");
            item.innerHTML = `${livro.titulo} - ${livro.autor} 
                <button onclick="editarLivro(${index})">✏️Editar</button> 
                <button onclick="deletarLivro(${index})">🗑️ Excluir</button>`;
            lista.appendChild(item);
        });
    }
    
//EDITAR UM LIVRO
async function deletarLivro(livroId) {
    let confirmacao = confirm("Tem certeza que deseja excluir este livro?");
    if (confirmacao) {
        let response = await fetch(`http://127.0.0.1:8000/livros/${livroId}`, {
            method: "DELETE"
        });

        let data = await response.json();
        alert(data.mensagem); // Exibe mensagem de sucesso

        listarLivros(); // Atualiza a lista na tela
    }
}