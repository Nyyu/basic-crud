import type { Request, Response } from "express"
import express from "express"

import {
  deleteProduct,
  getProduct,
  getProducts,
  registerProduct,
  updateProduct,
} from "../controllers/productController"

export const routes = express.Router()

// Mapping available routes
routes.route("/").get((req: Request, res: Response) =>
  res.status(200).json({
    routes: {
      "/": "router map",
      "/product": "list all products",
      "/product/:id": "show a specific product",
    },
    methods: {
      "/": ["get"],
      "/product": ["get", "post"],
      "/product/:id": ["get", "patch", "delete"],
    },
  })
)

routes
  .route("/product")
  .get(getProducts)
  .post(registerProduct)

routes
  .route("/product/:id")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)
