import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";


export default function Home() {
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
          <Input />
          <Button type="submit" className="cursor-pointer">Enviar</Button>
        </CardFooter>

      </Card>
    </div>
  );
}
