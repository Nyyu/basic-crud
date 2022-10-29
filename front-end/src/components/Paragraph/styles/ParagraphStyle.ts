import { w } from "windstitch"

export const StyledParagraph = w.p(`font-regular`, {
  variants: {
    size: {
      lg: "text-[24px]",
      md: "text-[18px]",
      sm: "text-[16px]",
    },
  },
})
