type Image = {
  url: string
}

type ProductVariant = {
  price: Float
}

export type Product = {
  id: string
  title: string
  images: Image[]
  productVariants: ProductVariant[]
}

type ProductBag = {
  amount?: number
} & Product

export type Category = {
  title: string
  id: string
}
