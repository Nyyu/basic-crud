import { W } from "windstitch"
import { StyledParagraph } from "./styles/ParagraphStyle"

// Types
import { RootProps } from "./types/ParagraphTypes"

export const Paragraph = ({
  children,
  size = "md",
}: RootProps) => {
  return (
    <StyledParagraph size={size}>
      {children}
    </StyledParagraph>
  )
}

export type ParagraphProps = W.Infer<typeof StyledParagraph>
