import { w } from "windstitch"

export const StyledInput = w.label(
  `w-full h-[55px] rounded-lg transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus-within:ring-4 ring-zinc-800 ring-offset-2 ring-offset-base-100 m-0 p-0 px-4`,
  {
    variants: {
      variant: {
        outline: "border-4 border-zinc-800 text-zinc-800",
      },
    },
  }
)

export const InputBody = w.input(
  `focus:outline-none w-full h-full`
)
