import type { Request, Response } from "express"

import { productModel } from "../models/product/types/product"
import { Product } from "../models/product"

/**
 * @route   /products
 */

/**
 * @method  get
 * @returns an array of productModel
 */
export const getProducts = async (
  req: Request,
  res: Response
) => {
  const productController = new Product()

  try {
    const products: productModel[] =
      await productController.getMany()

    res.status(200).json(products)
  } catch (error: any) {
    console.error(error)
    res.status(400).json({
      error: `Query error`,
      "more-info":
        typeof error?.message === "string"
          ? error.message
          : error,
    })
  }
}

/**
 * @method  post
 * @desc    it creates a new product and register it in the DB
 */
export const registerProduct = async (
  req: Request,
  res: Response
) => {
  const { name, description, price, stock } = req.body

  try {
    if (!name)
      throw new Error("An error ocurred, field: name")
    if (!description)
      throw new Error(
        "An error ocurred, field: description"
      )
    if (!price || +price < 0)
      throw new Error("An error ocurred, field: price")
    if (!stock || +stock < 0)
      throw new Error("An error ocurred, field: stock")

    const productController = new Product()
    await productController.create({
      name,
      description,
      price,
      stock,
    })

    res
      .status(201)
      .json({ message: "product created successfully" })
  } catch (error: any) {
    console.error(error)
    res.status(400).json({
      error: `Couldn't create product`,
      "more-info":
        typeof error?.message === "string"
          ? error.message
          : error,
    })
  }
}

/**
 * @route   /products/:id
 */

/**
 * @method  get
 * @returns an array of productModel
 */
export const getProduct = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params
  const productController = new Product()

  try {
    const product = await productController.get(id)

    res.status(200).json(product)
  } catch (error: any) {
    console.error(error)
    res.status(400).json({
      error: `Query error`,
      "more-info":
        typeof error?.message === "string"
          ? error.message
          : error,
    })
  }
}

/**
 * @method  delete
 * @desc    delete a product
 */
export const deleteProduct = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params

  if (!id) throw new Error("An error ocurred, field: id")

  const productController = new Product()

  try {
    await productController.delete(id)

    res
      .status(200)
      .json({ message: "product deleted successfully" })
  } catch (error: any) {
    console.error(error)
    res.status(400).json({
      error: `Product with ID ${id} does not exist in the database`,
      "more-info":
        typeof error?.message === "string"
          ? error.message
          : error,
    })
  }
}

/**
 * @method  patch
 * @desc    update a product
 */
export const updateProduct = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params

  if (!id || id.length === 0)
    throw new Error("An error ocurred, field: id")

  const productController = new Product()
  const newValues: any = {}

  // Setting new values to a new object
  Object.keys(req.body).forEach((key) => {
    if (req.body[key]) newValues[key] = req.body[key]
  })

  // Just to make sure nothing is missing from the request
  const product = await productController.get(id)

  try {
    // Replacing the old values with the new ones
    const newProduct = Object.assign(product, newValues)

    // Updating product
    const productResponse = await productController.update(
      id,
      newProduct
    )

    res.status(200).json(productResponse)
  } catch (error: any) {
    console.error(error)
    res.status(400).json({
      error: `Product with ID ${id} doesn't exist`,
      "more-info":
        typeof error?.message === "string"
          ? error.message
          : error,
    })
  }
}
