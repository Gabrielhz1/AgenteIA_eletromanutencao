'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useState } from "react";
export function LoginForm({
  className,
  ...props
  
}: React.ComponentProps<"div">
)

{


  
const[showPassword, setShowPassword] = useState(false)

  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card>
        <CardHeader>
            <div className="flex justify-center py-2 gap-2 items-center">
                        <CardTitle className="text-3xl font-bold text-center">
                          Tech<span className="text-orange-400">Fix</span> 
                        </CardTitle>
            
                        <Image src="/chatbot.png" alt="robo" width={40} height={40} />
            </div>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                    <Input id="password" type={showPassword?"text":"password"} required  />
                  
                  {!showPassword && <FaEye className="absolute bottom-2.5 right-[15px] w-[25px] h=[25px] cursor-pointer" onClick={()=> setShowPassword(true)}/> }
                  {showPassword && <FaEyeSlash className="absolute bottom-2.5 right-[15px] w-[25px] h=[25px] cursor-pointer" onClick={()=> setShowPassword(false)}/>  }
                  
                    
                </div>
                
                
              </Field>
              <Field>
                <Button type="submit" className="cursor-pointer bg-orange-400 hover:bg-orange-400/60">Login</Button>
                <Button variant="outline" type="button" className="cursor-pointer">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}