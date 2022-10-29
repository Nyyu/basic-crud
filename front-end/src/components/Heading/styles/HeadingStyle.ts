import { w } from "windstitch"

export const StyledHeading = w.h2(`font-semibold`, {
  variants: {
    size: {
      lg: "text-[32px]",
      md: "text-[24px]",
      sm: "text-[18px]",
    },
  },
})
