import { W } from "windstitch"
import { StyledHeading } from "./styles/HeadingStyle"

// Types
import { RootProps } from "./types/HeadingTypes"

export const Heading = ({
  children,
  size = "md",
}: RootProps) => {
  return (
    <StyledHeading size={size}>{children}</StyledHeading>
  )
}

export type HeadingProps = W.Infer<typeof StyledHeading>
