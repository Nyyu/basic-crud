import { ReactElement, ReactNode } from "react"

export interface ProductRootProps {
  children: ReactNode
  className?: string
}

export interface ProductImageProps {
  src: any
  alt?: string
  placeholder?: "blur" | "empty" | undefined
  className?: string
  width?: number
  height?: number
}

export interface ProductBodyProps {
  title: string
  price: number | string
}
