import { Slot } from "@radix-ui/react-slot"

// Custom components
import { StyledButton } from "./styles/ButtonStyled"
import { Paragraph } from "../Paragraph"

// Types
import {
  ButtonBodyProps,
  ButtonRootProps,
  ButtonIconProps,
} from "./types/ButtonTypes"

export const Root = ({
  children,
  asChild = false,
  variant = "fill",
  className = "",
}: ButtonRootProps) => {
  // Obs. if slot is used, styling resets
  const RootElement = asChild ? Slot : StyledButton

  return (
    <RootElement variant={variant} className={className}>
      {children}
    </RootElement>
  )
}

export const Icon = ({ children }: ButtonIconProps) => {
  return (
    <Slot
      className={`max-w-[25px] max-h-[25px] text-inherit`}
    >
      {children}
    </Slot>
  )
}

export const Body = ({
  children,
  size = "md",
}: ButtonBodyProps) => {
  return <Paragraph size={size}>{children}</Paragraph>
}

export const Button = {
  Root,
  Icon,
  Body,
}
