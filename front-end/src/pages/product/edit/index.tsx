import { PaperPlaneTilt } from "phosphor-react"
import { useForm } from "react-hook-form"
import { Button } from "../../../components/Button"

import { Heading } from "../../../components/Heading"
import { Input } from "../../../components/Input"
import { Navbar } from "../../../components/Navbar"
import { TProduct } from "../../../types/product"

const Update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>()

  const onSubmit = async (data: TProduct) => {
    console.log(data)
  }
  return (
    <div className="min-h-screen max-w-[430px] mx-auto px-[21px] py-[46px]">
      <section className="mx-auto">
        <Heading>New product</Heading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-6"
        >
          <Input.Root>
            <Input.Body
              registerFunction={register}
              name="name"
            >
              Name
            </Input.Body>
          </Input.Root>
          <Input.Root>
            <Input.Body
              registerFunction={register}
              name="description"
            >
              Description
            </Input.Body>
          </Input.Root>
          <Input.Root>
            <Input.Body
              registerFunction={register}
              name="price"
              type="number"
            >
              Price (in cents)
            </Input.Body>
          </Input.Root>
          <Input.Root>
            <Input.Body
              type="number"
              registerFunction={register}
              name="stock"
            >
              Stock
            </Input.Body>
          </Input.Root>

          <Button.Root type="reset">
            <Button.Icon>
              <PaperPlaneTilt size={25} />
            </Button.Icon>
            <Button.Body size="lg">
              <span className="font-semibold">SUBMIT</span>
            </Button.Body>
          </Button.Root>
        </form>
      </section>
      <Navbar />
    </div>
  )
}

export default Update
