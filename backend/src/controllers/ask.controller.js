import { generateTechtips } from '../agent/agent.js'


export async function askQuestion(req, res) {
   const parse = req.body
   if (!parse) {
      return res.sendStatus(400)
   }

   try {

      const data = generateTechtips(parse)
      return res.send(data)
   } catch (error) {
      console.log(error)
   }

}