import { GoogleGenAI } from "@google/genai";
import { systemPrompt, userPrompt } from '../prompts/prompt.js'
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export async function generateTechtips(input, onChunk) {

    const system = systemPrompt();
    const user = userPrompt(input)

    const response = await genAI.models.generateContentStream({
        model: "gemini-2.5-flash",
        config: {
            systemInstruction: `${await system}`,
            temperature: 0.5,
        },
        // contents:
        //     `
        //      USUÁRIO:${await user}`,

        contents: [
        {
          role: "user",
          parts: [{ text: `${await user}` }], // A mensagem do usuário
        }
      ],
    });

    let completResponse = ""

    for await (const chunk of response) {
        const text = chunk.text || "";
        completResponse += text

        onChunk(text)
    }

    
    console.log(completResponse)
    return completResponse;


}
