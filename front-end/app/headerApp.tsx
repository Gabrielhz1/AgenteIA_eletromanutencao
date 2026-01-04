import { CardTitle } from "@/components/ui/card"
import Image from "next/image";


export default function Apphead(){
    return (
        <header className="bg-slate-300/60 w-full h-20 flex justify-between  ">
     
        <div className="flex justify-start  gap-2 items-center px-4 py-2">
            <CardTitle className="text-3xl font-bold text-center">
              Tech<span className="text-orange-400">Fix</span>
            </CardTitle>

            <Image src="/chatbot.png" alt="robo" width={40} height={40} />
          </div>

          
            
      </header>
    )
}