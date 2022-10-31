import { prisma } from "../../services/prisma"
import {
  productModel,
  productRepository,
} from "./types/product"

export class Product implements productRepository {
  // Fetch all products
  async getMany() {
    await prisma.$connect()
    try {
      const allProducts: Promise<productModel[]> =
        (await prisma.product.findMany()) as any

      if (!allProducts)
        throw new Error(
          "unable to fetch products, query error"
        )

      return allProducts
    } catch (err) {
      console.log(err)
      await prisma.$disconnect()
      // process.exit(1)
    }
    return []
  }

  // Fetch a single product
  async get(id: string) {
    await prisma.$connect()

    try {
      const product: Promise<productModel> =
        (await prisma.product.findUnique({
          where: {
            id,
          },
        })) as any

      return product
    } catch (error) {
      console.log(error)
      await prisma.$disconnect()
      // process.exit(1)
    }
    return {
      name: "",
      description: "",
      price: 0,
      stock: 0,
    }
  }

  // Create a new product
  async create({
    name,
    description,
    price,
    stock,
  }: productModel) {
    await prisma.$connect()

    try {
      const formattedPrice = +price
      const formattedStock = +stock
      const product = (await prisma.product.create({
        data: {
          name,
          description,
          price: formattedPrice,
          stock: formattedStock,
        },
      })) as any

      return product
    } catch (error) {
      console.log(error)
      await prisma.$disconnect()
    }
  }

  // Patch product
  async update(
    id: string,
    { description, name, price, stock }: productModel
  ) {
    await prisma.$connect()

    try {
      await prisma.product.update({
        where: {
          id,
        },
        data: {
          name,
          description,
          price,
          stock,
        },
      })
    } catch (error) {
      console.log(error)
      await prisma.$disconnect()
    }
  }

  // Patch product
  async delete(id: string) {
    await prisma.$connect()

    try {
      await prisma.product.delete({
        where: {
          id,
        },
      })
    } catch (error) {
      console.log(error)
      await prisma.$disconnect()
    }
  }
}
