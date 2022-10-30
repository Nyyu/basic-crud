import { NextApiRequest, NextApiResponse } from "next"
import { api } from "../../../services/api"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!(req.method === "POST"))
      throw new Error("Only post requests are supported")

    // My backend checks if any of the values are invalid
    const { name, description, price, stock } = req.body

    api.post("/product", {
      name,
      description,
      price,
      stock,
    })

    return res.status(201).json("product created")
  } catch (error: any) {
    res.status(400)
    return res.json({
      message: error.message,
    })
  }
}
