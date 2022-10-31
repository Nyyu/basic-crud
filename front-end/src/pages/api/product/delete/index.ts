import { NextApiRequest, NextApiResponse } from "next"
import { api } from "../../../../services/api"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!(req.method === "DELETE"))
      throw new Error("Only delete requests are supported")

    const { id } = req.body
    await api.delete(`/product/${id}`)

    return res.status(200).json("product deleted")
  } catch (error: any) {
    res.status(400)
    return res.json({
      message: error.message,
    })
  }
}
