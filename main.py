from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #O NAVEGADOR ESTAVA BLOQUEANDO A CONEXÃO DO FRONT COM O BACK
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # PERMITE QUALQUER ORIGEM
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Livro(BaseModel):
    titulo: str #ARMAZENA O TITULO DO LIVRO
    autor: str #ARMAZENA O NOME DO AUTOR

livros = []  #LISTA VAZIA PARA SEREM ARMAZENADOS OS 

@app.get("/")
def home():
    return {"mensagem": "Bem-vindo ao sistema de livros favoritos!"} 

@app.post("/livros/") #PARTE EM QUE O USUARIO ARMAZENA NOVOS LIVROS
def adicionar_livro(livro: Livro):
    livros.append(livro)
    return {"mensagem": "Livro adicionado com sucesso!"}

@app.get("/livros/") #VISUALOZACAO DOS LIVROS CADASTRADOS
def listar_livros():
    return livros

@app.put("/livros/{livro_id}") #ATUALIZAÇÃO DOS LIVROS
def atualizar_livro(livro_id: int, livro: Livro):
    if livro_id >= len(livros) or livro_id < 0:
        return {"erro": "Livro não encontrado"}
    
    livros[livro_id] = livro
    return {"mensagem": "Livro atualizado com sucesso!"}

@app.delete("/livros/{livro_id}") #PARTE PARA REMOÇÃO DE LIVROS, CASO SEJA DO INTERESSE DO USUÁRIO
def deletar_livro(livro_id: int):
    if livro_id >= len(livros) or livro_id < 0:
        return {"erro": "Livro não encontrado"}
    
    livros.pop(livro_id)
    return {"mensagem": "Livro removido com sucesso!"}