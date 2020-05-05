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

export type Address = {
  lat: number
  long: number
  description: string
}

export type BagState = {
  products: ProductBag[]
  amountToPay: number
  amountItems: number
  fixedFreight: number
  isOpen: boolean
}

export type CustomerState = {
  address: Address
  availablePocId: string
}
