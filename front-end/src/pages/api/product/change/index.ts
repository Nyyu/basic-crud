import { NextApiRequest, NextApiResponse } from "next"
import { api } from "../../../../services/api"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!(req.method === "PATCH"))
      throw new Error("Only PATCH requests are supported")

    Object.keys(req.body).forEach((key) => {
      if (!req.body[key])
        throw new Error(`Missing parameter ${key}`)
    })

    const { id, name, description, price, stock } = req.body

    await api.patch(`/product/${id}`, {
      name,
      description,
      price: +price,
      stock: +stock,
    })

    return res.status(200).json("product updated")
  } catch (error: any) {
    res.status(400)
    return res.json({
      message: error.message,
    })
  }
}
