"use client";
import { useState } from "react";

export default function Home() {
  const [mensagem, setMensagem] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function enviarMensagem() {
    if (!mensagem) return;

    setResposta("");
    setCarregando(true);

    const response = await fetch("http://localhost:3000/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pergunta: mensagem }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let textoFinal = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      textoFinal += chunk;
      setResposta((prev) => prev + chunk);
    }

    setCarregando(false);
  }

  return (
    <div className="flex items-center min-h-screen justify-center bg-slate-50" >
      <Card className="w-[500px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader >
          <div className="flex justify-center py-2">
            <CardTitle className="text-3xl font-bold text-center items-center">Tech<span className="text-orange-400">Fix</span></CardTitle>
            <Image
              src="/chatbot.png"
              alt="robo"
              width={40}
              height={40}
            />
          </div>
          <CardDescription className="text-base text-zinc-600 text-center py-4 ">
            Pergunte ao <span className="font-bold">TechFix</span> dicas para manutenção do seu aparelho.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex p-2 mb-3 gap-2 items-center">
            <Avatar className="w-12 h-12" >
              <AvatarFallback>GH</AvatarFallback>
              <AvatarImage src="https://github.com/gabrielhz1.png" />
            </Avatar>
            <p>Qual a sua opinição sobre javascript</p>
          </div>

          <div className="flex p-2 mb-3 gap-2 items-center">
            <Avatar className="w-12 h-12" >
              <AvatarFallback>GH</AvatarFallback>
              <AvatarImage src="https://avatars.githubusercontent.com/u/161781182?s=200&v=4" />
            </Avatar>
            <p>O javascript é uma linguagem de programação</p>
          </div>



        </CardContent>

        <CardFooter className="flex gap-2">
          <Input placeholder="Digite a sua pergunta..."/>
          <Button type="submit" className="cursor-pointer">Enviar</Button>
        </CardFooter>

      </Card>
  )
}
