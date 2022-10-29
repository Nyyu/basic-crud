import { w } from "windstitch"

export const StyledButton = w.button(
  `w-full h-[55px] rounded-lg transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus-within:ring-4 ring-zinc-800 ring-offset-2 ring-offset-base-100`,
  {
    variants: {
      variant: {
        fill: "bg-zinc-800 hover:bg-zinc-700 text-zinc-50",
        outline:
          "border-4 border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-50",
      },
    },
  }
)
