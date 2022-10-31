import { useForm } from "react-hook-form"

import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { Heading } from "../../../components/Heading"
import { Navbar } from "../../../components/Navbar"

// icons
import { PaperPlaneTilt } from "phosphor-react"

// types
import { TProduct } from "../../../types/product"
import { publicApi } from "../../../services/api"
import { toast } from "react-toastify"

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>()

  const onSubmit = async (data: TProduct) => {
    try {
      await publicApi.post("/product", data)
      toast.success("Product created successfully")
    } catch (error) {
      console.log(error)
    }
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

          <Button.Root type="submit">
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

export default Create
