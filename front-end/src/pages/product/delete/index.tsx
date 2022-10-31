import { GetServerSideProps } from "next"
import { Trash } from "phosphor-react"
import { toast } from "react-toastify"
import { Heading } from "../../../components/Heading"
import { Navbar } from "../../../components/Navbar"
import { api, publicApi } from "../../../services/api"
import { Product } from "../../../types/product"

interface DeleteProps {
  products: Product[]
}

const Delete = ({ products = [] }: DeleteProps) => {
  const onSubmit = async (id: string) => {
    try {
      const res = await publicApi.delete(
        "/product/delete",
        {
          data: {
            id,
          },
        }
      )
      if (res.status === 200)
        toast.success("Product deleted successfully")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="min-h-screen max-w-[430px] mx-auto px-[21px] py-[46px]">
      <section className="mx-auto">
        <Heading>Delete product</Heading>
        <ul className="flex flex-col gap-3 mt-4">
          {products.map((product) => {
            return (
              <li
                className="w-full rounded border-2 border-zinc-800 px-2 py-3 text-lg font-medium flex items-center justify-between"
                key={product.id}
              >
                {product.name}
                <button
                  onClick={() => onSubmit(product.id)}
                >
                  <Trash
                    weight="fill"
                    className="w-[25px] h-[25px]"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </section>
      <Navbar />
    </div>
  )
}

export default Delete

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
