from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"mensagem": "Bem-vindo ao sistema de livros favoritos!"}
