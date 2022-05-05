import { Request, Response } from "express"
import connection from "../connection"
import { aluno } from "../types"

const getAlunos = async (req: Request, res: Response): Promise<void> => {

    try {

        const id = req.query.body || "%"
        const nome = req.query.nome || "%"
        const nascimento = req.query.nascimento || "%"
        const cpf = req.query.cpf || "%"
        const tel = req.query.tel || "%"
        const bairro = req.query.bairro || "%"

        const aluno: aluno[]  = await connection("alunos")
        .where("nome", "LIKE", `%${nome}%`)
        .where("nascimento", "LIKE", `%${nascimento}%`)
        .where("cpf", "LIKE", `%${cpf}%`)
        .where("tel", "LIKE", `%${tel}%`)
        .where("id", "LIKE", `%${id}%`)
        .where("bairro", "LIKE", `%${bairro}%`)
        res.send(aluno)

        
    } catch (error: any) {
        console.log(error.message)

        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send(error.message)
        }
    }
}

export default getAlunos