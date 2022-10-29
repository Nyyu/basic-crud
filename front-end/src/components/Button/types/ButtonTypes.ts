import { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
  variant?: "fill" | "outline"
}
export interface ButtonBodyProps {
  children: ReactNode
  asChild?: boolean
  size?: "lg" | "md" | "sm"
}
export interface ButtonIconProps {
  children: ReactNode
}
