import { generateTechtips } from '../agent/agent.js'


export async function askQuestion(req, res) {


   const {dica} = req.body;

   if (!dica) {
      return res.sendStatus(400)
   }

   try {

      const data = await generateTechtips(dica)
      return res.sendStatus(200)

   } catch (error) {
      console.log(error)
   }

}