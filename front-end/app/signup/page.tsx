import { SignupForm } from "@/components/pages-components/signup-form";
import { GalleryVerticalEnd } from "lucide-react";

export default function SignUp(){
    return (
        <div className=" flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-slate-100">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          
        </a>
        <SignupForm />
      </div>
    </div>
    )
}