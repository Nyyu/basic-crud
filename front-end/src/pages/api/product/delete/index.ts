import { NextApiRequest, NextApiResponse } from "next"
import { api } from "../../../../services/api"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!(req.method === "DELETE"))
      throw new Error("Only delete requests are supported")

    // My backend checks if any of the values are invalid
    // or if its missing
    const { id } = req.body

    api.delete("/product", id)

    return res.status(200).json("product removed")
  } catch (error: any) {
    res.status(400)
    return res.json({
      message: error.message,
    })
  }
}
