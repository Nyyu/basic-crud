import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Heading } from "../components/Heading"

import { Plus } from "phosphor-react"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Button.Root
        variant="fill"
        className="max-w-[300px] mx-auto mt-12"
      >
        <Button.Icon>
          <Plus size={25} weight="regular" />
        </Button.Icon>
        <Button.Body size="lg">Add to cart</Button.Body>
      </Button.Root>

      <Button.Root
        variant="outline"
        className="max-w-[300px] mx-auto mt-12"
      >
        <Button.Icon>
          <Plus size={25} weight="regular" />
        </Button.Icon>
        <Button.Body size="lg">Add to cart</Button.Body>
      </Button.Root>

      <Input.Root className="max-w-[300px] mx-auto mt-12">
        <Input.Icon>
          <Plus size={25} weight="regular" />
        </Input.Icon>
        <Input.Body>Add to cart</Input.Body>
      </Input.Root>
    </>
  )
}
