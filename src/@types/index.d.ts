type Image = {
  url: string
}

type ProductVariant = {
  inventoryItemId: !ID
  productVariantId: !ID
  title: !string
  subtitle: string
  description: string
  shortDescription: string
  attachment: string
  volume: string
  volumeUnit: string
  weight: string
  weightUnit: string
  barcode: string
  published: boolean
  price: Float
  availableDate: DateTime
  imageUrl: string
}

export type Product = {
  id: string
  title: string
  imageUrl: string
  images: Image[]
  productVariants: ProductVariant[]
}

type ProductCart = {
  amount?: number
} & Product

export type Category = {
  title: string
  id: string
}
