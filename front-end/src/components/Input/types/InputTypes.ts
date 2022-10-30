import { InputHTMLAttributes, ReactNode } from "react"

export interface InputRootProps {
  children: ReactNode
  asChild?: boolean
  variant?: "outline"
  className?: string
}
export interface InputIconProps {
  children: ReactNode
}
export interface InputBodyProps
  extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "lg" | "sm" | "md"
  registerFunction: any
  name: string
  children: ReactNode
}
