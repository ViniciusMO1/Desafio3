# Desafio3
Mini Aplicação Web com Login e CRUD

## Primeiro fiz o HTML
Com o título: Lista com Meus Livros Favoritos
Uma aba para o autor colocar o nome do livro
Uma aba para o usuário colocar o autor do livro
E um botão para adicionar o livro

## Depois o Estilo com CSS
Coloquei cores mais escuras destacando com o amarelo para dar um destaque

## O back-end fiz em Python
Importei um FastAPI para conectar o back ao front
Importei um CORS porque o navegador estava bloqueando essa conexão
Importei o "BaseModel" do pydantic para uma melhor validação dos dados,
conversão inteligente e melhor estruturação dos dados

### -Para deixar o CRUD funcional tive que adicionar os seguintes caminhos e funcionalidades:
- Criar a rota para adicionar os livros
- Listar os livros cadastrados
- Editar um livro existente
- Excluir um livro
