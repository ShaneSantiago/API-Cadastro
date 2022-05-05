import app from "./app"
import createAluno from "./endpoints/createAluno"
import deleteAluno from "./endpoints/deleteAluno"
import editAluno from "./endpoints/editAluno"
import getAlunos from "./endpoints/getAlunos"
import getAlunoById from "./endpoints/getAlunosById"

app.post("/alunos/signup", createAluno)
app.get("/alunos", getAlunos)
app.get("/alunos/:id", getAlunoById)
app.put("/edit/aluno/:id", editAluno)
app.delete("/delete/aluno/:id", deleteAluno)