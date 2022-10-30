import { InputHTMLAttributes, ReactNode } from "react"

export interface InputRootProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  asChild?: boolean
  variant?: "outline"
  className?: string
}
export interface InputIconProps {
  children: ReactNode
}
export interface InputBodyProps {
  children: string
  size?: "lg" | "sm" | "md"
}
