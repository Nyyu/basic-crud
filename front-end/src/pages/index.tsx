import Head from "next/head"
import Image from "next/image"

// Custom components
import { Input } from "../components/Input"
import { Heading } from "../components/Heading"
import { Product } from "../components/Product"

// Icons
import { Handbag, MagnifyingGlass } from "phosphor-react"
import { GetServerSideProps } from "next"

// Utils
import { api } from "../services/api"
import Link from "next/link"
import { Navbar } from "../components/Navbar"
import { Product as TProduct } from "../types/product"

interface HomeProps {
  products: TProduct[]
}

export default function Home({ products = [] }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="max-w-[430px] mx-auto px-[21px] py-[46px] min-h-screen relative">
        <section
          aria-describedby="menu"
          className="flex justify-between"
        >
          <span className="my-auto">
            <Image
              src="/Menu.png"
              alt="menu icon"
              width={25}
              height={12}
            />
          </span>
          <Handbag size={25} weight="regular" />
        </section>
        <section
          aria-describedby="content"
          className="mt-8"
        >
          <Heading size="lg">All products</Heading>
          <Input.Root className="mt-6">
            <Input.Icon>
              <MagnifyingGlass size={25} weight="regular" />
            </Input.Icon>
            <Input.Body registerFunction={() => {}} name="">
              Search
            </Input.Body>
          </Input.Root>

          <div className="flex flex-wrap gap-4 md:gap-6 mt-6 justify-center">
            {products.map((product: any, idx: number) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
              >
                <Product.Root>
                  <Product.Image
                    src={`/product-image-0${
                      (idx % 2) + 1
                    }.png`} // No backend image available, using fallback for now
                  />
                  <Product.Body
                    price={product.price}
                    title={product.name}
                  />
                </Product.Root>
              </Link>
            ))}
          </div>
        </section>
        <Navbar />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps =
  async () => {
    try {
      const response = await api.get("/product")
      const products: TProduct[] = response.data

      return {
        props: {
          products,
        },
      }
    } catch (error) {
      console.error(error)
    }

    return {
      props: {},
    }
  }
