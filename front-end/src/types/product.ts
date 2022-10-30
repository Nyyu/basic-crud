export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
}

export type TProduct = Omit<Product, "id">
