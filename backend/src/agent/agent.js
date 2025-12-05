import { GoogleGenAI } from "@google/genai";
import { systemPrompt, userPrompt } from '../prompts/prompt.js'
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export async function generateTechtips(input) {

    const system = systemPrompt();
    const user = userPrompt(input)

    const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",

      
        contents:
            `SISTEMA:${await system}
             USUÁRIO:${ await user}`,
    });

        // console.log(response)
    console.log(response.text)

    return response.text;


}
