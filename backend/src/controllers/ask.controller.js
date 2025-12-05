import { generateTechtips } from '../agent/agent.js'


export async function askQuestion(req, res) {


   const { pergunta } = req.body;
   if (!pergunta) {
      return res.status(400).json({
         error: "ValidationError",
      })
   }

   try {

      const data = await generateTechtips(pergunta)
      return res.status(200).json(data)

   } catch (err) {
      return res.status(500).json({
         error: "InternalServerError",
         message: "Erro ao processar a sua pergunta"
      })

   }

}