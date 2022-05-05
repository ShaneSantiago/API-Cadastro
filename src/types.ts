export type authenticationData = {
    id: string
}

export type aluno = {
    id: string,
    nome: string,
    nascimento: string,
    cpf: string,
    tel: string,
    bairro: string
}

export const alunoTableName = "alunos"