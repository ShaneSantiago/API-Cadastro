import { Request, Response } from "express"
import connection from "../connection"
import { alunoTableName } from "../types"

const getAlunoById = async (req: Request, res: Response): Promise<void> => {
    
    try {

        const alunoId = req.params.id

        const [aluno] = await connection(alunoTableName)
        .where({ id: alunoId })

        const { id, nome, nascimento, cpf, tel, bairro } = aluno

        res.send({ id, nome, nascimento, cpf, tel, bairro })

        
    } catch (error: any) {
        console.log(error.message)

        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send(error.message)
        }
    }
}
export default getAlunoById