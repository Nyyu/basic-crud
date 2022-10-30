import { NextApiRequest, NextApiResponse } from "next"
import { api } from "../../../../services/api"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!(req.method === "PUT"))
      throw new Error("Only put requests are supported")

    // My backend checks if any of the values are invalid
    const { id, name, description, price, stock } = req.body

    api.put("/product", {
      id,
      name,
      description,
      price,
      stock,
    })

    return res.status(200).json("product updated")
  } catch (error: any) {
    res.status(400)
    return res.json({
      message: error.message,
    })
  }
}
