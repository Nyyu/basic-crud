import { w } from "windstitch"

export const StyledInput = w.label(
  `w-full h-[55px] rounded-lg transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus-within:ring-2 ring-zinc-800/30 ring-offset-1 ring-offset-base-100 m-0 p-0 px-4`,
  {
    variants: {
      variant: {
        outline:
          "border-2 border-zinc-800/30 text-zinc-800",
      },
    },
  }
)

export const InputBody = w.input(
  `focus:outline-none w-full h-full`,
  {
    variants: {
      size: {
        lg: "placeholder:text-2xl",
        md: "placeholder:text-xl",
        sm: "placeholder:text-lg",
      },
    },
  }
)
