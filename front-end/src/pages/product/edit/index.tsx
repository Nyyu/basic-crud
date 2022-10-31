import { Navbar } from "../../../components/Navbar"
import { Heading } from "../../../components/Heading"
import { Input } from "../../../components/Input"

import * as Dialog from "@radix-ui/react-dialog"

// styling
import {
  PaperPlaneTilt,
  Pencil,
  Trash,
  X,
} from "phosphor-react"

// utils
import { useForm } from "react-hook-form"
import { api, publicApi } from "../../../services/api"

// types
import { Product, TProduct } from "../../../types/product"
import { ChangeEvent, useEffect } from "react"
import { GetServerSideProps } from "next"
import { Button } from "../../../components/Button"
import { toast } from "react-toastify"

interface UpdateProps {
  products: Product[]
}

const Update = ({ products = [] }: UpdateProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Product>()

  const onSubmit = async (data: Product) => {
    try {
      await publicApi.patch("/product/change", data)
      toast.success("Product updated successfully")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  const handleUpdateInputs = (data: Product) => {
    setValue("id", data.id)
    setValue("name", data.name)
    setValue("description", data.description)
    setValue("price", data.price)
    setValue("stock", data.stock)
  }

  return (
    <div className="min-h-screen max-w-[430px] mx-auto px-[21px] py-[46px]">
      <section className="mx-auto">
        <Heading>Edit product</Heading>
        <ul className="flex flex-col gap-3 mt-4">
          {products.map((product) => {
            return (
              <Dialog.Root key={product.id}>
                <li className="w-full rounded border-2 border-zinc-800 px-2 py-3 text-lg font-medium flex items-center justify-between">
                  {product.name}

                  <Dialog.Trigger
                    onClick={() =>
                      handleUpdateInputs(product)
                    }
                  >
                    <Pencil
                      weight="fill"
                      className="w-[25px] h-[25px]"
                    />
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="bg-zinc-800/25 fixed inset-0" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-96 bg-zinc-50 flex-col gap-2 px-3 py-4 rounded-lg">
                      <Dialog.Title className="w-full flex justify-between">
                        <span className="font-bold text-xl uppercase">
                          Change product
                        </span>
                        <Dialog.Close>
                          <X
                            weight="bold"
                            className="w-[20px] h-[20px]"
                          />
                        </Dialog.Close>
                      </Dialog.Title>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 mt-6"
                      >
                        <Input.Root className="hidden border-0 p-0 m-0">
                          <Input.Body
                            registerFunction={register}
                            name="id"
                            type="hidden"
                            className="border-0 p-0 m-0"
                          >
                            ID
                          </Input.Body>
                        </Input.Root>
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
                            Price
                          </Input.Body>
                        </Input.Root>

                        <Input.Root>
                          <Input.Body
                            registerFunction={register}
                            name="stock"
                            type="number"
                          >
                            Stock
                          </Input.Body>
                        </Input.Root>

                        <Button.Root type="submit">
                          <Button.Icon>
                            <PaperPlaneTilt size={25} />
                          </Button.Icon>
                          <Button.Body size="lg">
                            <span className="font-semibold">
                              SUBMIT
                            </span>
                          </Button.Body>
                        </Button.Root>
                      </form>
                      <input type="text" />
                    </Dialog.Content>
                  </Dialog.Portal>
                </li>
              </Dialog.Root>
            )
          })}
        </ul>
      </section>
      <Navbar />
    </div>
  )
}

export default Update

export const getServerSideProps: GetServerSideProps =
  async () => {
    try {
      const response = await api.get("/product")
      if (response.data)
        return {
          props: {
            products: response.data,
          },
        }
    } catch (error) {
      console.error(error)
    }
    return {
      props: {},
    }
  }
