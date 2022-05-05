import { Request, Response } from "express"
import connection from "../connection"
import generateId from "../Services/idGenerator"
import { alunoTableName } from "../types"

const createAluno = async (req: Request, res: Response): Promise<void> => {

    try {

        const {nome, nascimento, cpf, tel, bairro} = req.body

        if (!nome || !nascimento || !cpf || !tel || !bairro) {
            res.statusCode = 422
            throw new Error("Preencha todos os campos'")
         }

         const [aluno] = await connection('alunos')
         .where({ cpf })

      if (aluno) {
         res.statusCode = 409
         throw new Error('CPF já cadastrado')
      }

        const id: string = generateId()
        
        await connection(alunoTableName)
        .insert({
            id,
            nome,
            nascimento,
            cpf,
            tel,
            bairro
        })


        res.send("Criado com sucesso")
        
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send(error.message)
         } else {
            res.send({ message: error.message })
         }
    }
}
export default createAluno