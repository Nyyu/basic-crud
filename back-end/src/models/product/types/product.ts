export interface productModel {
  name: string
  description: string
  price: number
  stock: number
}

export interface productRepository {
  create: (data: productModel) => Promise<void>
  getMany: () => Promise<productModel[]>
  get: (id: string) => Promise<productModel>
  update: (id: string, data?: any) => Promise<void>
  delete: (id: string) => Promise<void>
}
