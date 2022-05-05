import { Request, Response } from "express";
import  connection  from "../connection"

export default async function deleteAluno(
  req: Request,
  res: Response
): Promise<void> {
  try {
      
    const id = req.params.id;
    await connection("alunos").delete().where({ id });

    res.status(201).send("Aluno deletado com sucesso");
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
}