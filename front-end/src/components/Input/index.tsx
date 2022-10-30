import { Slot } from "@radix-ui/react-slot"

// CUstom components
import { Paragraph } from "../Paragraph"
import {
  InputBody,
  StyledInput,
} from "./styles/StyledInput"

// Types
import {
  InputBodyProps,
  InputIconProps,
  InputRootProps,
} from "./types/InputTypes"

const Root = ({
  children,
  asChild = false,
  className = "",
  variant = "outline",
}: InputRootProps) => {
  // Obs. if slot is used, styling resets
  const InputElement = asChild ? Slot : StyledInput

  return (
    <InputElement variant={variant} className={className}>
      {children}
    </InputElement>
  )
}

export const Icon = ({ children }: InputIconProps) => {
  return (
    <Slot
      className={`max-w-[25px] max-h-[25px] text-zinc-800/40`}
    >
      {children}
    </Slot>
  )
}

export const Body = ({
  children = "",
  variant = "md",
  registerFunction = () => {},
  name,
  ...props
}: InputBodyProps) => {
  const placeholderValue = String(children)
  return (
    <InputBody
      variant={variant}
      placeholder={placeholderValue}
      {...registerFunction(name)}
    />
  )
}

export const Input = {
  Root,
  Body,
  Icon,
}
