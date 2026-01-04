'use client'
import { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Apphead from "./headerApp";


type Mensagem = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [mensagem, setMensagem] = useState("");
  const [chat, setChat] = useState<Mensagem[]>([]);
  const [carregando, setCarregando] = useState(false);

  async function enviarMensagem() {
    if (!mensagem.trim()) return;

    const userMessage: Mensagem = { role: "user", content: mensagem };

    setChat((prev) => [...prev, userMessage]);
    setMensagem("");
    setCarregando(true);

    const response = await fetch("http://localhost:3000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pergunta: userMessage.content }),
    });

    if (!response.body) return;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let respostaFinal = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      respostaFinal += chunk;

      // Atualiza mensagem sendo escrita
      setChat((prev) => {
        const semResposta = prev.filter((m) => m.role !== "assistant" || m.content !== "...");
        return [...semResposta, { role: "assistant", content: respostaFinal }];
      });
    }

    setCarregando(false);
  }

  return (
    
    <div className="flex flex-col items-center min-h-screen justify-center bg-slate-100 ">
      
      <Apphead/>

    <div className="py-6">
      
      <Card className="w-[500px] grid grid-rows-[min-content_1fr_min-content] shadow-xl">
        <CardHeader>
          <div className="flex justify-center py-2 gap-2 items-center">
            <CardTitle className="text-3xl font-bold text-center">
              Tech<span className="text-orange-400">Fix</span>
            </CardTitle>

            <Image src="/chatbot.png" alt="robo" width={40} height={40} />
          </div>

          <CardDescription className="text-center text-zinc-600">
            Pergunte ao <strong>TechFix</strong> dicas para manutenção do seu aparelho.
          </CardDescription>
        </CardHeader>

        <CardContent className="border rounded-md">
          <ScrollArea className="h-[600px] pr-2">
            <div className="flex flex-col gap-4 p-4">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Avatar do Assistente */}
                  {msg.role === "assistant" && (
                    <Avatar>
                      <AvatarFallback>AI</AvatarFallback>
                      <AvatarImage src="/chatbot.png" />
                    </Avatar>
                  )}

                  {/* Balão de mensagem */}
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[70%] whitespace-pre-wrap shadow-sm 
                      ${
                        msg.role === "user"
                          ? "bg-orange-400 text-white rounded-br-none"
                          : "bg-zinc-200 text-black rounded-bl-none"
                      }`}
                  >
                    {msg.content}
                  </div>

                  {/* Avatar do Usuário */}
                  {msg.role === "user" && (
                    <Avatar>
                      <AvatarFallback>GH</AvatarFallback>
                      <AvatarImage src="https://github.com/gabrielhz1.png" />
                    </Avatar>
                  )}
                </div>
              ))}

              {carregando && (
                <p className="text-sm text-gray-400 italic">O TechFix está digitando...</p>
              )}
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Input
            placeholder="Digite sua pergunta..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          <Button className="cursor-pointer" onClick={enviarMensagem} disabled={carregando}>
            {carregando ? "Enviando..." : "Enviar"}
          </Button>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
}
