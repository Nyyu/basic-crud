import Link from "next/link"
import { useRouter } from "next/router"

import { Navbar as NavbarComponent } from "./styles/NavbarStyle"

// Icons
import { House, Pencil, Plus, Trash } from "phosphor-react"

export const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <NavbarComponent>
      <Link href={"/"}>
        <House
          size={32}
          weight={pathname === "/" ? "fill" : "regular"}
        />
      </Link>
      <Link href={"/product/create"}>
        <Plus
          size={32}
          weight={
            pathname === "/product/create"
              ? "fill"
              : "regular"
          }
        />
      </Link>
      <Link href={"/product/edit"}>
        <Pencil
          size={32}
          weight={
            pathname === "/product/edit"
              ? "fill"
              : "regular"
          }
        />
      </Link>
      <Link href={"/product/delete"}>
        <Trash
          size={32}
          weight={
            pathname === "/product/delete"
              ? "fill"
              : "regular"
          }
        />
      </Link>
    </NavbarComponent>
  )
}
