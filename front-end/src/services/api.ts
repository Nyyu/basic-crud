import axios from "axios"

export const api = axios.create({
  baseURL: `${process.env.BACKEND_API}`,
})

export const publicApi = axios.create({
  baseURL: "/api",
})
