import { generateTechtips } from '../agent/agent.js'


export async function askQuestion(req, res) {




   try {
      const { pergunta } = req.body;
      if (!pergunta) {
         return res.status(400).json({
            error: "ValidationError",
         })
      }
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      res.flushHeaders();

      

      const data = await generateTechtips(pergunta, (chunk)=>{
         res.write(`data: ${chunk}\n`)
      });

      res.end();

      
      
   
   } catch (err) {
      console.error("Error Stream:", err)
      res.end();

   }

}