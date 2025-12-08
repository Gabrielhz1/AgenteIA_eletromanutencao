// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [mensagem, setMensagem] = useState("");
//   const [resposta, setResposta] = useState("");
//   const [carregando, setCarregando] = useState(false);

//   async function enviarMensagem() {
//     if (!mensagem) return;

//     setResposta("");
//     setCarregando(true);

//     const response = await fetch("http://localhost:3000/api/ask", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ pergunta: mensagem }),
//     });

//     const reader = response.body.getReader();
//     const decoder = new TextDecoder();

//     let textoFinal = "";

//     while (true) {
//       const { value, done } = await reader.read();
//       if (done) break;

//       const chunk = decoder.decode(value);
//       textoFinal += chunk;
//       setResposta((prev) => prev + chunk);
//     }

//     setCarregando(false);
//   }

//   return (
//     <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-xl bg-zinc-900 rounded-xl p-4 space-y-4">
//         <h1 className="text-xl font-bold text-center">Chat com IA</h1>

//         <div className="min-h-[200px] bg-zinc-800 rounded p-3 text-sm whitespace-pre-wrap">
//           {resposta || "A resposta aparecerá aqui..."}
//         </div>

//         <textarea
//           className="w-full p-2 rounded bg-zinc-800 text-white resize-none"
//           rows={3}
//           placeholder="Digite sua pergunta..."
//           value={mensagem}
//           onChange={(e) => setMensagem(e.target.value)}
//         />

//         <button
//           onClick={enviarMensagem}
//           disabled={carregando}
//           className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded disabled:opacity-50"
//         >
//           {carregando ? "Respondendo..." : "Enviar"}
//         </button>
//       </div>
//     </div>
//   );
// }
