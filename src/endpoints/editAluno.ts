import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../Services/authenticator";
import { aluno, authenticationData } from "../types";

export default async function editAluno(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const id = req.params.id
      const { nome, nascimento, cpf, tel, bairro }: aluno = req.body

      
       if (!nome && !nascimento && !cpf && !tel && !bairro) {
         res.statusCode = 422
         throw new Error("Informe os novos nome, nascimento, cpf, tel ou bairro'")
      }
      await connection('alunos')
         .update({ nome, nascimento, cpf, tel, bairro })
         .where({ id })

         res.status(201).send("Aluno editado com sucesso")

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).end({message: error.message})
      }
      res.send({message: error.message})
   }
}