import { GetServerSideProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { CaretLeft } from "phosphor-react"
import { Button } from "../../../components/Button"
import { Heading } from "../../../components/Heading"
import { Paragraph } from "../../../components/Paragraph"
import { api } from "../../../services/api"
import { Product } from "../../../types/product"
import { priceFormatter } from "../../../utils/priceFormatter"

interface ProductProps {
  product: Product
}

const Product = ({ product }: ProductProps) => {
  const priceFormatted = priceFormatter.format(
    product.price / 100
  )

  return (
    <div className="min-h-screen max-w-[430px] mx-auto relative">
      <Link href={"/"}>
        <Button.Root
          className="max-w-[55px] absolute top-6 left-4"
          variant="outline"
        >
          <Button.Icon>
            <CaretLeft weight="bold" size={25} />
          </Button.Icon>
        </Button.Root>
      </Link>
      <img
        src="/product-image-02.png"
        alt={product.name}
        className="w-full h-96 object-center rounded-2xl rounded-t-none product-dropshadow-secondary object-cover"
      />
      <div className="flex flex-col mt-8 gap-4 mx-4">
        <div className="flex justify-between items-center">
          <Heading size="lg">{product.name}</Heading>
          <Heading size="md">{priceFormatted}</Heading>
        </div>
        <div className="flex flex-col gap-3 opacity-50">
          <Paragraph size="md">
            {product.description}
          </Paragraph>
          <Paragraph size="sm">
            {product.stock} units available
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default Product

export const getServerSideProps: GetServerSideProps =
  async (req) => {
    const { id = "" } = req.params as { id: string }

    const response = await api.get(`/product/${id}`)
    const product: Product = response.data

    return {
      props: {
        product,
      },
    }
  }
